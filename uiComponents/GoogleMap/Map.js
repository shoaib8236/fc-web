import React from "react";
import { createCustomEqual } from "fast-equals";
import centerImage from "../../assets/images/icons/center.svg";

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
  if (a instanceof google.maps.LatLng || b instanceof google.maps.LatLng) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }
  // TODO extend to other types

  // use fast-equals for other objects
  return deepEqual(a, b);
});

function useDeepCompareMemoize(value) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(callback, dependencies) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

const Map = ({
  onIdle,
  children,
  style,
  markers = [],
  marginTop,
  ...options
}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();
  const drivers = React.useRef([]);
  const isMounted = React.useRef(false);

  const fitMapToMarkerBounds = () => {
    const bounds = new google.maps.LatLngBounds();
    drivers.current = markers.map((m) => {
      const markerPosition = new google.maps.LatLng(m.lat, m.lng);
      bounds.extend(markerPosition);
      return markerPosition;
    });
    let mapDiv = map.getDiv();

    // let padding = {
    //   bottom: mapDiv.offsetHeight * 0.2,
    //   left: mapDiv.offsetWidth * 0.2,
    //   right: mapDiv.offsetWidth * 0.2,
    //   top: mapDiv.offsetHeight * 0.2,
    // };
    // map.fitBounds(bounds, padding);
  };

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
      fitMapToMarkerBounds();
      map.panTo(options.center);
      const parent = document.querySelector(
        '[style="margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;"]'
      );
      if (parent) {
        parent.remove();
      }
    }
  }, [map, options]);

  React.useEffect(() => {
    if (isMounted.current) {
      if (markers.length > 1 && map) {
        fitMapToMarkerBounds();
        map.panTo(options.center);
      }
    }
  }, [markers]);

  React.useEffect(() => {
    isMounted.current = true;
  }, []);

  return (
    <>
      <div ref={ref} style={{ ...style, marginTop }} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
      <button
        className="close-map"
        onClick={() => {
          map.panTo(options.center);
          fitMapToMarkerBounds();
        }}>
        <img src={centerImage.src} alt="" className="position-center" />
      </button>
    </>
  );
};

export default React.memo(Map);
