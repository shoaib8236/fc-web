function generateRandomPoint(center, radius) {
  var x0 = center.lng;
  var y0 = center.lat;

  // console.log(x0, y0);
  // Convert Radius from meters to degrees.
  var rd = radius / 111139;

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
    lng: x + x0,
    key: Math.random().toString() + Date.now(),
  };
}

export const generateMarkersOnRadius = (center, radius, numberOfMarkers) => {
  var markers = [];
  for (let index = 0; index < numberOfMarkers; index++) {
    const marker = generateRandomPoint(center, radius);
    markers.push(marker);
  }

  return markers;
};
