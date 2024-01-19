import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = (props) => {
  const { children, responsive } = props;
  return (
    <>
      <Carousel {...props} responsive={responsive}>{children}</Carousel>
    </>
  );
};

export default React.memo(Slider);
