import React from "react";

import { lineString, lineDistance } from "@turf/turf";
import along from "@turf/along";
const OPTIONS = { units: "kilometers" };
// 30.1 seconds, the .1 is to allow a buffer for the next set of cords to load
// I know it's not exact, but it's close :)
const STEPS = 60100;

const Marker = ({ locations = [], toggleOverlay = () => {}, ...options }) => {
  const [marker, setMarker] = React.useState();
  const key = React.useRef(null);

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    if (key.current === null) {
      key.current = options.markerKey;
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    let markerListener = null;
    if (marker) {
      marker.setOptions(options);
      markerListener = google.maps.event.addListener(
        marker,
        "click",
        (function (marker) {
          return toggleOverlay;
        })(marker)
      );
    }
    return () => {
      google.maps.event.removeListener(markerListener);
    };
  }, [marker, options]);

  //inside component function
  React.useEffect(() => {
    // console.log('marker locations', locations)
    if (marker && locations.length) {
      let arc = [];
      let startTime = 0;
      if (!locations.length) {
        // exit if no cords in array
        // console.log("no locations");
        return;
      }

      if (locations.length === 1) {
        // locations = [[marker.position.lat, marker.position.lng], locations[0]]
        return;
      }

      locations = [...locations, ...locations.reverse()];

      const line = lineString(locations); // our array of lat/lngs
      const distance = lineDistance(line, "meters");
      // line.geometry.coordinates = line.geometry.coordinates.map(c => c.reverse())
      for (let i = 0; i < distance; i += distance / STEPS) {
        let segment = along(line, i, "meters");

        arc.push(segment.geometry.coordinates);
      }
      function animate(timestamp) {
        // console.log('timestamps is', timeStep)
        // animate function to set location
        const runtime = timestamp - startTime;
        const timeStep = Math.round(runtime);
        const latlng = arc[timeStep] || arc[arc.length - 1];
        // console.log('marker position', latlng)
        marker.setOptions({
          ...options,
          position: { lat: latlng[1], lng: latlng[0] },
        });
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
    }
  }, [locations]);

  return null;
};

export default React.memo(Marker);
