import React, { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import listicon from "../../assets/images/icons/listIcon.svg";
import mapIcon from "../../assets/images/icons/mapIcon.svg";
import simNetwork from "../../assets/images/icons/simNetwork.svg";
import time from "../../assets/images/icons/time.svg";
import { imagePrefix } from "../../utils/imagePrefix";
import GoogleMap from "../GoogleMap/GoogleMap";
import CousinesListView from "../ListView/CousinesListView";
import Button from "../button/Button";

const DesktopMobileMap = ({ showDemo, setShowDemo, setIsPermission }) => {
  const [foodMenu, setFoodMenu] = useState("food-menu-hide");
  const [showMap, setShowMap] = useState("show-mobo-map");
  const [showDownload, setShowDownload] = useState("hide-download-app");
  const [hitMapApi, setHitMapApi] = useState(false);
  const [countdown, setCountdown] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);
  const listView = useRef("hide");
  const timerRef = useRef(null);
  const [cusisines, setCuisines] = useState([]);
  const fetchCuisines = async () => {
    try {
      const res = await fetch(
        "https://api.foodchoo.com/api/v1/customers/cuisines"
      );
      const { data } = await res.json();
      setCuisines(data.cuisine);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCuisines();
  }, []);

  React.useEffect(() => {
    if (showMap === "show-mobo-map") {
      listView.current = "hide";
    } else {
      listView.current = "show";
    }
  }, [showMap]);

  const handleFoodMenu = () => {
    setFoodMenu(
      foodMenu === "food-menu-hide" ? "food-menu-show" : "food-menu-hide"
    );
  };
  const handleMap = () => {
    if (showMap === "show-mobo-map") {
      listView.current = "show";
    } else {
      listView.current = "hide";
    }
    setShowMap(showMap === "show-mobo-map" ? "hide-mobo-map" : "show-mobo-map");
  };
  const handleDowloadApp = useCallback(() => {
    setShowDownload(
      showDownload === "hide-download-app"
        ? "show-download-app"
        : "hide-download-app"
    );
  }, [showDownload]);

  let apiHit = useCallback(() => {
    return hitMapApi;
  }, [hitMapApi]);

  useEffect(() => {
    if (showDemo) {
      if (!hitMapApi) {
        setHitMapApi(true);
      }
    }
  }, [showDemo]);



  return (
    <div className="device-x-desktop">
      <img
        src={imagePrefix("chats/mobile-frame-min-1686346952759.webp")}
        alt=""
        className="fram"
      />
      <div className="bottom-shadow" />
      <div className="wrapper-device ">
        <div className={`download-app ${showDownload}`}>
          <div className="close-button">
            <span onClick={handleDowloadApp}>X</span>
          </div>
          <div className="download-links">
            <div className="alignment-icons">
              <h1> Download Now!</h1>
              <a
                style={{ marginRight: 10 }}
                href="https://apps.apple.com/gb/app/foodchoo/id1578098220"
                target="_blank"
              >
                <Image
                  width={150}
                  height={60}
                  objectFit="contain"
                  loading="lazy"
                  src={imagePrefix("chats/app-store-min-1686333735877.webp")}
                  className={"download_actions"}
                  alt=""
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.project.foodchooeater"
                target="_blank"
              >
                <Image
                  width={150}
                  height={60}
                  objectFit="contain"
                  loading="lazy"
                  className={"download_actions"}
                  src={imagePrefix("chats/playstore-min-1686333578568.webp")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className={`react-map-wrapper ${showMap}`}>
          {/* <ReactMap handleDowloadApp={handleDowloadApp} /> */}
          {hitMapApi && (
            <GoogleMap
              className="google-map"
              apiHit={hitMapApi}
              setIsPermission={setIsPermission}
              onDisplayDownload={handleDowloadApp}
            />
          )}
          <div className="close-map">
            {hitMapApi && (
              <Button
                style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
                onClick={handleMap}
                sm
                red
              >
                <img src={listicon.src} alt="" />
                Switch to List View
              </Button>
            )}
          </div>
          {/* <div className="bottom-shadow" /> */}
        </div>
        <div className={`def-screen ${listView.current}`}>
          <span>
            <div className="list-items">
              <div className="wrapper-avatar">
                <div className="avatar">
                  <Image
                    width={85}
                    height={85}
                    layout="fill"
                    objectFit="contain"
                    loading="lazy"
                    src={imagePrefix("chats/food1-min-1686346083004.webp")}
                  />
                  <span>20% OFF</span>
                </div>
                <div className="description">
                  <div>
                    <h1>Vegan Poke Bowl</h1>
                    <p>
                      This is are flagship Vegan Poke Bowl - brusting with
                      flagship healthy deliciousness
                    </p>
                  </div>
                  <div>
                    <span>$21.00</span>
                    <span>$17.00</span>
                  </div>
                </div>
              </div>
              <div className="wrapper-estimation">
                <div className="estimate-time">5 mins</div>
                <div className="left-time">2 left</div>
              </div>
            </div>
            <div className="list-items">
              <div className="wrapper-avatar">
                <div className="avatar">
                  <Image
                    width={85}
                    height={85}
                    layout="fill"
                    objectFit="contain"
                    loading="lazy"
                    src={imagePrefix("chats/food2-min-1686346324862.webp")}
                  />
                  <span>20% OFF</span>
                </div>
                <div className="description">
                  <div>
                    <h1>Deluxe Pizza</h1>
                    <p>
                      Our premium grade cheese crust stuffed pizza - armed to
                      the teeth with
                    </p>
                  </div>
                  <div>
                    <span>$46.00</span>
                    <span>$37.00</span>
                  </div>
                </div>
              </div>
              <div className="wrapper-estimation">
                <div className="estimate-time">6 mins</div>
                <div className="left-time">2 left</div>
              </div>
            </div>
          </span>

          <Button
            style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
            onClick={handleMap}
            sm
            red
          >
            <img src={mapIcon.src} alt="" />
            Switch to Map View
          </Button>
        </div>

        <div className="menu-items">
          <div className="statusBar">
            <img src={simNetwork.src} alt="" />
            <img src={time.src} alt="" />
            <Image
              width={80}
              height={14}
              objectFit="contain"
              loading="lazy"
              src={imagePrefix("chats/charging-1686348539035.webp")}
              alt=""
            />
          </div>
          <div className="nav-bar">
            <div className="home-button">
              <Image
                height={24}
                width={24}
                objectFit="contain"
                loading="lazy"
                src={imagePrefix("chats/homeIcon-min-1686333291338.webp")}
                alt=""
                onClick={handleDowloadApp}
              />
            </div>

            <div className="imhungry">
              <p className="hungry-text" onClick={handleFoodMenu}>
                I am hungry {countdown !== "" && countdown}
              </p>
            </div>
            <div className="bell-icon">
              <Image
                height={24}
                width={24}
                objectFit="contain"
                loading="lazy"
                src={imagePrefix("chats/bell-min-1686332933251.webp")}
                alt=""
                onClick={handleDowloadApp}
              />
            </div>
          </div>
        </div>
        {/* {showDemo && (
          <div className="effective-demo">
            <div className="demo">
              <p>Click to Try Interactive demo</p>
              <img src={play.src} alt="" />
            </div>
          </div>
        )} */}
        <CousinesListView
          countdown={countdown}
          setCountdown={setCountdown}
          setNotificationVisible={setNotificationVisible}
          handleFoodMenu={handleFoodMenu}
          foodMenu={foodMenu}
        />
        <div
          className={`notification ${
            notificationVisible ? "visible" : "hidden"
          }`}
        >
          <Image
            width={124}
            height={82}
            objectFit="contain"
            loading="lazy"
            src={imagePrefix("chats/pizza-min-1686334998646.webp")}
          />
          <div className="kombucha-noti">
            <p>Pizza available right now in your area!</p>
            <p className="time">(2 mins away)</p>
            <h1>Pizza Express</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMobileMap;
