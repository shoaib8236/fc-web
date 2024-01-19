import React, { useEffect, useState } from "react";
import { osName } from "react-device-detect";
import Fade from "react-reveal/Fade";
import appStoreIcon from "../../assets/images/icons/app-store.png";
import playStore from "../../assets/images/icons/playstore.png";

const DownloadActions = ({ getTitle, center }) => {
  const [osType, setOsType] = useState("");

  useEffect(() => {
    const os = osName;

    if (os === "Windows" || os === "Android") {
      setOsType("apk");
    } else if (os === "iOS" || os === "Mac OS") {
      setOsType("ipa");
    }
  }, []);

  return (
    <>
      <Fade duration={1000} delay={500} bottom>
        <div className="row download-btn-gap-y">
          {getTitle && (
            <div className="mb-3 col-lg-12 d-flex justify-content-center">
              <h1 className="theme-title theme-title-red theme-title-max">
                DOWNLOAD THE APP NOW
              </h1>
            </div>
          )}
          <div
            style={{ justifyContent: center ? "center" : "" }}
            className=" download-icons col-lg-12 d-flex"
          >
            {osType === "ipa" && (
              <a
                href="https://apps.apple.com/gb/app/foodchoo/id1578098220"
                target="_blank"
              >
                <img
                  className="download_actions"
                  src={appStoreIcon.src}
                  alt="Eater App"
                />
              </a>
            )}
            {osType === "apk" && (
              <a
                href="https://play.google.com/store/apps/details?id=com.project.foodchooeater"
                target="_blank"
              >
                <img
                  className="download_actions"
                  src={playStore.src}
                  alt="Eater App"
                />
              </a>
            )}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default React.memo(DownloadActions);
