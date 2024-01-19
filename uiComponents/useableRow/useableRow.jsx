import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";
const UseableRow = (props) => {
  const {
    addImage,
    reverse = false,
    alignCenter = false,
    className,
    children,
    addSpacing,
    fixImage,
  } = props;

  return (
    <>
      {reverse ? (
        <div
          style={{ margin: addSpacing }}
          className={`row wrap-rev ${alignCenter ? "align-items-center" : ""} ${
            className ? className : ""
          }`}
        >
          <Fade left>
            <div className="col-lg-6 flex-center-sm center-text">
              {children}
            </div>
          </Fade>
          <div className="col-lg-6 flex-column-center mr-b-column ">
            <Fade right>
              <Image
                width={!fixImage ? 520 : 300}
                height={!fixImage ? 340 : 600}
                objectFit="contain"
                loading="eager"
                unoptimized={true}
                src={addImage}
                alt=""
              />
            </Fade>
          </div>
        </div>
      ) : (
        <div
          style={{ margin: addSpacing }}
          className={`row ${alignCenter ? "align-items-center" : ""} ${
            className ? className : ""
          }`}
        >
          <div className="col-lg-6 flex-column-center mr-b-column">
            <Fade left>
              <Image
                width={!fixImage ? 520 : 300}
                height={!fixImage ? 340 : 600}
                objectFit="contain"
                loading="eager"
                unoptimized={true}
                src={addImage}
                alt=""
              />
            </Fade>
          </div>
          <div className="col-lg-6 flex-center-sm center-text">
            <Fade right>{children}</Fade>
          </div>
        </div>
      )}
    </>
  );
};

export default UseableRow;
