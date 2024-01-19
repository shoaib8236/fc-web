import React, { useState, useEffect, useRef } from "react";
// import { Marker } from "react-map-gl";

import { lineString, along, lineDistance } from "@turf/turf";
const OPTIONS = { units: "meters" };
// 30.1 seconds, the .1 is to allow a buffer for the next set of cords to load
// I know it's not exact, but it's close :)
const STEPS = 30100;

import pin from "../../assets/images/icons/map-marker.png";

const DriverMarker = ({
  locations = [],
  image,
  initialLocation,
  name,
  handleDowloadApp,
}) => {
  const [currentLocation, setCurrentLocation] = useState(initialLocation);
  const [showApp, setShowApp] = useState(false);
  //inside component function
  useEffect(() => {
    let arc = [];
    let startTime = 0;
    if (!locations.length) {
      // exit if no cords in array
      // console.log("no locations");
      return;
    }

    if (locations.length === 1) {
      // console.log("cant move ahead man!");
      return;
    }

    const line = lineString(locations); // our array of lat/lngs
    const distance = lineDistance(line, OPTIONS);
    for (let i = 0; i < distance; i += distance / STEPS) {
      let segment = along(line, i, OPTIONS);
      arc.push(segment.geometry.coordinates);
    }

    function animate(timestamp) {
      // animate function to set location
      const runtime = timestamp - startTime;
      const timeStep = Math.round(runtime);
      setCurrentLocation(arc[timeStep] || arc[arc.length - 1]);
      if (timeStep <= STEPS) {
        window.requestAnimationFrame(animate);
      }
    }
    const frameId = window.requestAnimationFrame((timeStamp) => {
      startTime = timeStamp;
      animate(timeStamp);
    });
    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [locations]);
  const handleShow = () => {
    setShowApp(true);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowApp(false);
          alert("...");
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef);

  return (
    <>
      {showApp && (
        <>
          <div className="marker-modal">
            <img
              ref={wrapperRef}
              src={deelinfo.src}
              onClick={handleDowloadApp}
            />
          </div>
        </>
      )}
      <Marker
        latitude={currentLocation[0]}
        longitude={currentLocation[1]}
        onClick={handleShow}
        style={{ zIndex: -1 }}>
        <img style={{ width: "80px", height: "80px" }} src={pin.src} />
        <img
          src={image}
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: 11,
            left: 27,
            borderRadius: 15,
          }}
        />
        <p className="driver-name">{name}</p>
      </Marker>
    </>
  );
};

export default DriverMarker;
