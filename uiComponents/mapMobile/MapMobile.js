import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiPlay } from "react-icons/fi";
import appStoreIcon from "../../assets/images/icons/app-store.png";
import bell from "../../assets/images/icons/bell.png";
import charging from "../../assets/images/icons/charging.svg";
import homeIcon from "../../assets/images/icons/homeIcon.png";
import listicon from "../../assets/images/icons/listIcon.svg";
import mapIcon from "../../assets/images/icons/mapIcon.svg";
import playStore from "../../assets/images/icons/playstore.png";
import simNetwork from "../../assets/images/icons/simNetwork.svg";
import time from "../../assets/images/icons/time.svg";
import product from "../../assets/images/sample/food1.png";
import product2 from "../../assets/images/sample/food2.png";
import halfFrame from "../../assets/images/sample/iphone-frame.png";
import Button from "../button/Button";
import GoogleMap from "../GoogleMap/GoogleMap";
import CousinesListView from "../ListView/CousinesListView";

const MapMobile = ({ showDemo, setIsPermission }) => {
  const [foodMenu, setFoodMenu] = useState("food-menu-hide");
  const [showMap, setShowMap] = useState("show-mobo-map");
  const [showDownload, setShowDownload] = useState("hide-download-app");
  const [countdown, setCountdown] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [hitMapApi, setHitMapApi] = useState(false);
  const timerRef = useRef(null);

  // const startTimer = (duration) => {
  //   let timer = duration;
  //   let minutes = 0;
  //   let seconds = 0;
  //   timerRef.current = setInterval(() => {
  //     minutes = parseInt(timer / 60, 10);
  //     seconds = parseInt(timer % 60, 10);
  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;
  //     setCountdown(`${minutes}:${seconds}`);
  //     if (--timer < 0) {
  //       timer = duration;
  //       clearInterval(timerRef.current);
  //       timerRef.current = null;
  //     }
  //   }, 1000);

  //   setTimeout(() => {
  //     setNotificationVisible(true);
  //     setTimeout(() => {
  //       setNotificationVisible(false);
  //     }, 5000);
  //   }, 3000);
  // };

  useEffect(() => {
    if (showDemo) {
      if (!hitMapApi) {
        setHitMapApi(true);
      }
    }
  }, [showDemo]);

  const handleFoodMenu = () => {
    foodMenu === "food-menu-hide"
      ? setFoodMenu("food-menu-show")
      : setFoodMenu("food-menu-hide");
  };
  const handleMap = () => {
    showMap === "show-mobo-map"
      ? setShowMap("hide-mobo-map")
      : setShowMap("show-mobo-map");
  };
  const handleDowloadApp = useCallback(() => {
    setShowDownload(
      showDownload === "hide-download-app"
        ? "show-download-app"
        : "hide-download-app"
    );
  }, [showDownload]);

  return (
    <div className="device-y">
      {/* {!hitMapApi && (
        <div className="demo-wrapper">
          <h1 className="demo">Click to try interactive demo</h1>
          <FiPlay onClick={() => setHitMapApi(true)} />
        </div>
      )} */}
      <div className="mobile-layout">
        <img className="half-frame" src={halfFrame.src} alt="" />
        <div className="mobile-layout-wrapper">
          <div className="menu-items">
            <div className="statusBar">
              <img src={simNetwork.src} alt="" />
              <img src={time.src} alt="" />
              <img src={charging.src} alt="" />
            </div>
            <div className="nav-bar">
              <div className="home-button">
                <img src={homeIcon.src} alt="" onClick={handleDowloadApp} />
              </div>

              <div className="imhungry">
                <p className="hungry-text" onClick={handleFoodMenu}>
                  I am hungry {countdown !== "" && countdown}
                </p>
              </div>
              <div className="bell-icon">
                <img src={bell.src} alt="" onClick={handleDowloadApp} />
              </div>
            </div>
          </div>
          {/* <div
            style={{
              width: "100vh",
              height: "100vh",
              background: "red",
            }}>
            test demo
          </div> */}
          {/* {showDemo && (
           
          )} */}
          <CousinesListView
            countdown={countdown}
            setCountdown={setCountdown}
            setNotificationVisible={setNotificationVisible}
            handleFoodMenu={handleFoodMenu}
            foodMenu={foodMenu}
          />
          {hitMapApi && (
            <div className={`download-app ${showDownload}`}>
              <div className="close-button">
                <span onClick={handleDowloadApp}>X</span>
              </div>
              <div className="download-links">
                <div className="alignment-icons flex-center-sm">
                  <h1> Download Now!</h1>
                  <a
                    href="https://apps.apple.com/gb/app/foodchoo/id1578098220"
                    target="_blank"
                  >
                    <img
                      className={"download_actions"}
                      src={appStoreIcon.src}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.project.foodchooeater"
                    target="_blank"
                  >
                    <img
                      className={"download_actions"}
                      src={playStore.src}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
          {hitMapApi && (
            <div className={`react-map-wrapper ${showMap}`}>
              {/* <ReactMap handleDowloadApp={handleDowloadApp} /> */}
              {hitMapApi && (
                <GoogleMap
                  setIsPermission={setIsPermission}
                  fromMobile={true}
                  apiHit={hitMapApi}
                  onDisplayDownload={handleDowloadApp}
                />
              )}
              <div className="close-map">
                <Button
                  style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
                  onClick={handleMap}
                  sm
                  red
                >
                  <img src={listicon.src} alt="" />
                  View list
                </Button>
                {/* <img src={center.src} alt="" className="position-center" /> */}
              </div>
            </div>
          )}
          <div className="inner-items text-white">
            <div className="def-screen">
              {hitMapApi && (
                <span>
                  {
                    <div className="list-items">
                      <div className="wrapper-avatar">
                        <div className="avatar">
                          <img src={product.src} />
                          <span>20% OFF</span>
                        </div>
                        <div className="description">
                          <div>
                            <h1>Vegan Poke Bowl</h1>
                            <p>
                              This is are flagship Vegan Poke Bowl - brusting
                              with flagship healthy deliciousness
                            </p>
                          </div>
                          <div>
                            <span>$200.00</span>
                            <span>$160.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="wrapper-estimation">
                        <div className="estimate-time">20 mins</div>
                        <div className="left-time">15 left</div>
                      </div>
                    </div>
                  }
                  <div className="list-items">
                    <div className="wrapper-avatar">
                      <div className="avatar">
                        <img src={product2.src} />
                        <span>20% OFF</span>
                      </div>
                      <div className="description">
                        <div>
                          <h1>Deluxe Pizza</h1>
                          <p>
                            Our premium grade cheese crust stuffed pizza - armed
                            to the teeth with
                          </p>
                        </div>
                        <div>
                          <span>$200.00</span>
                          <span>$160.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="wrapper-estimation">
                      <div className="estimate-time">20 mins</div>
                      <div className="left-time">15 left</div>
                    </div>
                  </div>
                </span>
              )}

              {hitMapApi && (
                <Button
                  style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
                  onClick={handleMap}
                  sm
                  red
                >
                  <img src={mapIcon.src} alt="" />
                  Switch to Map View
                </Button>
              )}
            </div>
          </div>
        </div>
        <div
          className={`notification ${
            notificationVisible ? "visible" : "hidden"
          }`}
        >
          <div className="kombucha-noti">
            <p>
              This product is available in your area <br /> right now
            </p>
            <h1>Kombuchawow!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MapMobile);
