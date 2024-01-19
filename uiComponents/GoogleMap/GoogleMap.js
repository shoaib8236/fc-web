import { Status, Wrapper } from "@googlemaps/react-wrapper";
import React, { memo, useEffect, useRef, useState } from "react";
import useGeoLocation from "../../utils/hooks";
import Map from "./Map";
import Marker from "./Marker";
import { lineDistance, lineString } from "@turf/turf";
import driver1 from "../../assets/images/icons/pizza.svg";
import driver0 from "../../assets/images/icons/vegi.svg";

import { Spin } from "antd";
import Image from "next/image";
import { imagePrefix } from "../../utils/imagePrefix";
import useWindowSize from "../../utils/useWindowSize";

const driverImages = [
  {
    id: 0,
    image: imagePrefix("chats/vegi-1686348323350.webp"),
    type: "burger",
  },
  {
    id: 1,
    image: imagePrefix("chats/pizza-1686348296458.webp"),
    type: "pizza",
  },
  {
    id: 2,
    image: imagePrefix("chats/mike-location-min-1686347094556.webp"),
    type: "",
  },
];
const defaultLocation = {
  lat: 37.75709993588712,
  lng: -122.4018906064128,
};

const GoogleMap = ({
  onDisplayDownload,
  apiHit,
  fromMobile = false,
  setIsPermission = () => {},
}) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(16);
  const [drivers, setDrivers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [showApp, setShowApp] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = useState({});
  const [mapMargin, setMapMargin] = useState("");
  const wrapperRef = useRef(null);
  const location = useGeoLocation();
  const { width } = useWindowSize();

  useEffect(() => {
    console.log(location);

    if (location?.coordinates?.lat) {
      setIsPermission(true);

      console.log("in");
    } else {
      setIsPermission(false);
      console.log("out");
    }
  }, [location]);

  const toggleOverlay = (data) => {
    setShowApp((v) => {
      if (v) {
        onDisplayDownload && onDisplayDownload();
      }
      return !v;
    });
    if (Object.entries(data).length > 0) {
      setSelectedMarker(data);
    }
  };

  function distanceMethod(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  }
  const generaterandomMarkerss = async (c, radius, numberOfMarkers = 2) => {
    var markers = [];
    let INTERVAL = 0;
    let results = await fetch(`api/nearby?center=${c}&type=restaurant`);
    results = await results.json();
    if (!results.data.length) {
      results = await fetch(
        `api/nearby?center=${c}&radius=2000&type=establishment`
      );
      results = await results.json();
      if (!results.data.length) return;
    }

    try {
      const tempArrayOfCoordinates = [];

      results.data.map((item) => {
        const distanceResult = distanceMethod(
          location.coordinates.lat,
          location.coordinates.lng,
          item.lat,
          item.lng,
          "K"
        );
        let obj = item;
        obj["distance"] = distanceResult;
        tempArrayOfCoordinates.push(obj);
      });
      tempArrayOfCoordinates.sort((a, b) => {
        return a.distance - b.distance;
      });
      let index = 0; //parseInt(Math.random() * tempArrayOfCoordinates.length);
      let shouldIterate = true;
      markers.push(results.data[index]);
      while (shouldIterate) {
        index += 1;

        if (index >= tempArrayOfCoordinates.length) {
          shouldIterate = false;
        } else {
          const line = lineString([
            [markers[0].lng, markers[0].lat],
            [
              tempArrayOfCoordinates[index].lng,
              tempArrayOfCoordinates[index].lat,
            ],
          ]); // our array of lat/lngs
          const distance = lineDistance(line, "meters");
          const distanceFilter = 0.3;
          if (distance > distanceFilter && distance < distanceFilter + 0.1) {
            shouldIterate = false;
            markers.push(tempArrayOfCoordinates[index]);
          } else if (distance > 0.03 && distance < distanceFilter + 0.1) {
            shouldIterate = false;
            markers.push(tempArrayOfCoordinates[index]);
          } else if (distance > 0.02 && distance < distanceFilter + 0.1) {
            shouldIterate = false;
            markers.push(tempArrayOfCoordinates[index]);
          } else if (distance > 0.01 && distance < distanceFilter + 0.1) {
            shouldIterate = false;
            markers.push(tempArrayOfCoordinates[index]);
          }
        }
      }
      if (markers.length === 1 && tempArrayOfCoordinates.length > 1) {
        setZoom(fromMobile ? 12 : 14);
      }
      setDrivers(markers);
    } catch (error) {
      setIsPermission(false);
      console.log("error while generating markers : ", error);
    }

    const formatStep = ({ lat, lng }) => {
      return [lng, lat, 0.0];
    };

    markers.forEach(async (m, i) => {
      if (!m) return;
      // Fetch Route points
      const destination = `${m.lat},${m.lng}`;
      let res = await fetch(
        `/api/hello?origin=${c}&destination=${destination}`
      );
      res = await res.json();
      const steps = res?.data?.routes[0]?.legs[0]?.steps;
      let pathFromSteps =
        steps?.length === 1
          ? [
              formatStep(steps[0].end_location),
              formatStep(steps[0].start_location),
            ]
          : steps?.map((s) => formatStep(s.end_location)).reverse();
      setLocations((prev) => [...prev, pathFromSteps]);
    });
  };

  useEffect(() => {
    if (location.loaded && apiHit) {
      const isLocationLoaded = location.loaded && !location.error;
      const position = {
        lat: isLocationLoaded ? location.coordinates.lat : defaultLocation.lat,
        lng: isLocationLoaded ? location.coordinates.lng : defaultLocation.lng,
      };
      setCenter(position);
      setZoom(16);
      const origin = `${position.lat},${position.lng}`;
      generaterandomMarkerss(origin, "700");
    }
  }, [location, apiHit]);

  useEffect(() => {
    setMapMargin(width >= 1024 ? "90px" : "0px");
  }, [width]);

  const mapOptions = {
    panControl: false,
    zoomControl: false,
    disableDefaultUI: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: true,
    rotateControl: false,
    draggable: true,
  };

  const markers = [...drivers, center];

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowApp(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <div className="spinner-map">
            <Spin />{" "}
          </div>
        );
      case Status.FAILURE:
        return (
          <div className="spinner-map-failure">
            Oops! Something went wrong. This page didn't load Google Maps
            correctly. <br />
            Please refresh your browser or use Google Chrome
          </div>
        );
      case Status.SUCCESS:
        return (
          <Map
            center={center}
            zoom={zoom}
            markers={markers}
            options={mapOptions}
            toggleOverlay={toggleOverlay}
            gestureHandling={"none"}
            marginTop={mapMargin}
            style={{
              width: "100%",
              height: "380px",
              background: "#fff",
            }}
          >
            <Marker
              position={center}
              className="map-marker"
              icon={imagePrefix("chats/user_marker-min-1686347855755.webp")}
            />
            {drivers.map(({ lat, lng }, i) => (
              <Marker
                key={`driver${i}`}
                position={{ lat, lng }}
                locations={locations[i]}
                toggleOverlay={() => toggleOverlay(driverImages[i])}
                className="map-marker"
                icon={driverImages[i]?.image}
                style={{ height: "50px", width: "50px" }}
              />
            ))}
            )
          </Map>
        );
    }
  };

  return (
    <>
      <Wrapper
        apiKey={"AIzaSyAVwyKaZ6NFVTM5kVpAGElJKFfND5pH8yk"}
        version="3.46"
        render={render}
      ></Wrapper>
      {showApp && (
        <div className="marker-modal">
          {selectedMarker.type === "pizza" ? (
            <p
              style={{ width: "max-content", marginLeft: "auto" }}
              ref={wrapperRef}
              onClick={toggleOverlay}
            >
              <Image
                height={345}
                width={160}
                objectFit="contain"
                loading="lazy"
                src={imagePrefix("chats/deelinfo-min-1686347145247.webp")}
              />
            </p>
          ) : (
            <p
              style={{ width: "max-content", marginLeft: "auto" }}
              ref={wrapperRef}
              onClick={toggleOverlay}
            >
              <Image
                height={345}
                width={160}
                objectFit="contain"
                loading="lazy"
                src={imagePrefix("chats/vegitable-min-1686347430392.webp")}
              />
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default memo(GoogleMap);
