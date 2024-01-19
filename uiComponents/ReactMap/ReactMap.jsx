import { maxBy, minBy } from "lodash";
import { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import WebMercatorViewport from "viewport-mercator-project";
import driver0 from "../../assets/images/drivers/0.jpeg";
import driver1 from "../../assets/images/drivers/1.jpeg";
import driver2 from "../../assets/images/drivers/2.jpeg";
import driver3 from "../../assets/images/drivers/3.jpeg";
import driver4 from "../../assets/images/drivers/4.jpeg";
import userIcon from "../../assets/images/icons/user_icon.png";
import useGeoLocation from "../../utils/hooks";
import useWindowSize from "../../utils/useWindowSize";
import DriverMarker from "./DriverMarker";

const driverImages = [driver0, driver1, driver2, driver3, driver4];
const driverNames = ["Abraham", "Jacob", "Smith", "Kyle", "Larry"];

const getMinOrMax = (markers, minOrMax, latOrLng) => {
  if (minOrMax === "max") {
    return maxBy(markers, (value) => value[latOrLng])[latOrLng];
  } else {
    return minBy(markers, (value) => value[latOrLng])[latOrLng];
  }
};

const getBounds = (markers) => {
  const maxLat = getMinOrMax(markers, "max", "lat");
  const minLat = getMinOrMax(markers, "min", "lat");
  const maxLng = getMinOrMax(markers, "max", "lng");
  const minLng = getMinOrMax(markers, "min", "lng");

  const southWest = [minLng, minLat];
  const northEast = [maxLng, maxLat];
  return [southWest, northEast];
};

function generateRandomPoint(center, radius) {
  var x0 = center.lng;
  var y0 = center.lat;

  // Convert Radius from meters to degrees.
  var rd = radius / 111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x / Math.cos(y0);

  // Resulting point.
  return {
    lat: y + y0,
    lng: xp + x0,
    key: Math.random().toString() + Date.now,
  };
}

const generaterandomMarkerss = (center, radius, numberOfMarkers) => {
  var markers = [];
  for (let index = 0; index < numberOfMarkers; index++) {
    const marker = generateRandomPoint(center, radius);
    markers.push(marker);
  }

  return markers;
};

const ReactMap = (props) => {
  const { className, handleDowloadApp } = props;
  const defaultLocation = useRef({
    lat: 37.7577,
    lng: -122.4376,
  });
  const [locations, setLocations] = useState([]);
  const intervalRef = useRef(null);
  const mapRef = useRef(null);
  var [markerPosition, setMarkerPosition] = useState({
    lat: defaultLocation.current.lat,
    lng: defaultLocation.current.lng,
  });
  var [randomMarkers, setRandomMarkers] = useState([]);
  const counter = useRef(0);
  const location = useGeoLocation();
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: markerPosition.lat,
    longitude: markerPosition.lng,
    zoom: 17,
  });

  useEffect(() => {
    if (location.loaded) {
      const isLocationLoaded = location.loaded && !location.error;
      setMarkerPosition({
        lat: isLocationLoaded
          ? location.coordinates.lat
          : defaultLocation.current.lat,
        lng: isLocationLoaded
          ? location.coordinates.lng
          : defaultLocation.current.lng,
      });
      setViewport({
        ...viewport,
        latitude: isLocationLoaded
          ? location.coordinates.lat
          : defaultLocation.current.lat,
        longitude: isLocationLoaded
          ? location.coordinates.lng
          : defaultLocation.current.lng,
      });
      const position = {
        lat: isLocationLoaded
          ? location.coordinates.lat
          : defaultLocation.current.lat,
        lng: isLocationLoaded
          ? location.coordinates.lng
          : defaultLocation.current.lng,
      };
      const randomMarkerss = generaterandomMarkerss(position, 500, 5);
      const origin = `${position.lat},${position.lng}`;
      let routedLocations = randomMarkerss.map(async (m, i) => {
        // Fetch Route points
        const destination = `${m.lat},${m.lng}`;
        let res = await fetch(
          `/api/hello?origin=${origin}&destination=${destination}`
        );
        res = await res.json();
        const steps = res?.data?.routes[0]?.legs[0]?.steps;
        setLocations((prev) => [
          ...prev,
          steps.map((s) => Object.values(s.end_location)),
        ]);
      });

      setRandomMarkers(randomMarkerss);
      const MARKERS_BOUNDS = getBounds(randomMarkerss);
      setViewport((viewport) => {
        const NEXT_VIEWPORT = new WebMercatorViewport({
          ...viewport,
        }).fitBounds(MARKERS_BOUNDS, { padding: 100 });

        return NEXT_VIEWPORT;
      });
    }
  }, [location]);

  const handleModal = () => {
    setIsModal(true);
    setIsHungry(false);
  };
  const handleModalHungry = () => {
    setIsHungry(true);
    setIsModal(false);
  };
  const [isModal, setIsModal] = useState(false);
  const [isHungry, setIsHungry] = useState(false);
  const { width } = useWindowSize();
  return (
    <>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        mapboxApiAccessToken="pk.eyJ1IjoiYWhzYW4ta2hhbiIsImEiOiJja3dleHpiNXQwOWY4Mm9ydW4ybmdmaHI2In0.SM6rznh2-l49smS53AyV9A"
        onViewStateChange={(nextViewport) => setViewport(nextViewport)}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/ahsan-khan/ckwnm5jhm795s14p4huny3nt3"
      >
        <Marker latitude={markerPosition.lat} longitude={markerPosition.lng}>
          <img
            style={{
              width: "40px",
              height: "40px",
              border: "3px solid #6bb459",
              borderRadius: "20px",
            }}
            src={userIcon.src}
          />
        </Marker>
        {randomMarkers.map((randomMarker, i) => (
          <DriverMarker
            handleDowloadApp={handleDowloadApp}
            key={randomMarker.key}
            initialLocation={[randomMarker.lat, randomMarker.lng]}
            image={driverImages[i].src}
            name={driverNames[i]}
            locations={locations[i]?.reverse()}
          />
        ))}
      </ReactMapGL>
    </>
  );
};

export default ReactMap;
