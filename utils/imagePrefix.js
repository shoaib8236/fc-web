export const imagePrefix = (endpoint) => {
  if (endpoint) {
    return `https://foodchooapp.s3.us-east-2.amazonaws.com/${endpoint}`;
  } else {
    return "";
  }
};
