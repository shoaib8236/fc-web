const { useState, useEffect } = require("react");

const useGeoLocation = () => {
  var [location, setLocation] = useState({
    loaded: false,
    error: false,
    coordinates: {
      lat: "",
      lng: "",
    },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
        // lat: -33.894485,
        // lng: 151.111381,
        // lat: 7.903329020410498,
        // lng: 98.38835581695143
        // lat:  -34.64895780102501,
        // lng: -58.68615053902889,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        loaded: true,
        error: "user browser doesnt support location",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return location;
};

export default useGeoLocation;
