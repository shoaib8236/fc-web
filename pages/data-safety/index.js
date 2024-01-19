import React, { useState } from "react";
import { imagePrefix } from "../../utils/imagePrefix";
import useWindowSize from "../../utils/useWindowSize";
import Paragraph from "../../uiComponents/paragraph/Paragraph";
import StyledButton from "../../uiComponents/styledButton/StyledButton";

const Index = () => {
  const { width } = useWindowSize();
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  return (
    <div className="data_safety">
      <div
        style={{
          backgroundImage: `url(${
            width > 640
              ? imagePrefix("chats/home_img_1-1686253096484.webp")
              : imagePrefix("chats/home_img_1-1686253096484.webp")
          })`,
        }}
        className="page_banner"
      >
        <div className="container">
          <h1>Data Safety</h1>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            dicta officia laboriosam voluptates doloribus commodi odio harum,
            illo praesentium soluta at perspiciatis voluptatum corporis et unde
            mollitia, modi tempore accusamus?
          </Paragraph>
          <div className="input_wrap">
            {!isEmailSubmitted ? (
              <input placeholder="Enter Your email" type="email" />
            ) : (
              <input placeholder="Enter verification code" type="number" />
            )}
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
