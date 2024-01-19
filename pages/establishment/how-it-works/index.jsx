import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { osName } from "react-device-detect";
import appStoreIcon from "../../../assets/images/icons/app-store.png";
import playStore from "../../../assets/images/icons/playstore.png";
import PageLayout from "../../../uiComponents/PageLayout/PageLayout";
import Button from "../../../uiComponents/button/Button";
import Paragraph from "../../../uiComponents/paragraph/Paragraph";
import UseableRow from "../../../uiComponents/useableRow/useableRow";
import { imagePrefix } from "../../../utils/imagePrefix";

const index = () => {
  const spacing = "0 0 80px 0";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentGif, setCurrentGif] = useState(null);
  const [showBar, setShowBar] = useState(false);
  const [deviceType, setDeviceType] = useState("");
  const [osType, setOsType] = useState("");

  useEffect(() => {
    const os = osName;
    if (os === "Windows" || os === "Android") {
      setOsType("apk");
    } else if (os === "iOS" || os === "Mac OS") {
      setOsType("ipa");
    }
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (
      navigator.userAgent.includes("Mac") ||
      navigator.userAgent.includes("iPhone") ||
      navigator.userAgent.includes("iPad") ||
      navigator.userAgent.includes("iPod")
    ) {
      setDeviceType("ios");
    } else {
      setDeviceType("android");
    }
  }, []);

  useEffect(() => {
    const scroll = () => {
      const scrollTop = window.pageYOffset;
      // get psge scroll percentage in number
      const scrollPercentage =
        (scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100;
      // remove decimal
      const scrollPercentageInt = Math.floor(scrollPercentage);

      if (scrollPercentageInt > 10 && scrollPercentageInt < 90) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
      if (scrollPercentageInt > 90) {
        setShowBar(false);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <PageLayout title="Establishments | How It Works">
      <div className="layout i-am-guide">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center spacing spacing-top">
              <h1 className="theme-head-x-lg md-bold">
                How to sell your food on FoodChoo in 6 minutes.
              </h1>
            </div>
          </div>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={true}
            addImage={imagePrefix("chats/image1-1686847681836.webp")}
          >
            <h1 className="theme-title theme-title-red">Step 1:</h1>
            <Paragraph>Once logged in, create your first menu item</Paragraph>
            <Paragraph>
              You can add unlimited menu items in FoodChoo, and you can make
              their descriptions and photos POP for Eaters to want to grab your
              food as soon as it's available! You can also set the optional
              discount timer to ensure menus that contain time-sensitive food
              items such as fries, is still sold to Eaters who are still hugely
              happy to grab your discount for these time-sensitive fries!
            </Paragraph>
            <Button
              red
              lg
              onClick={() => {
                showModal();
                setCurrentGif(imagePrefix("chats/01-1686847991703.gif"));
              }}
            >
              Show More
            </Button>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={false}
            fixImage="auto-size"
            addImage={imagePrefix("chats/image2-1686847771202.webp")}
          >
            <h1 className="theme-title theme-title-red">Step 2:</h1>
            <Paragraph>
              Your verified Driver opens their FoodChoo Driver app and starts
              their shift
            </Paragraph>
            <Paragraph>
              This is one of the "special sauce" parts of our FoodChoo platform
              - the Drivers are YOUR OWN STAFF, not ours! Your Drivers are
              verified by us, but they work exclusively for you.
            </Paragraph>
            <Button
              red
              lg
              onClick={() => {
                showModal();
                setCurrentGif(imagePrefix("chats/02-1686848007759.gif"));
              }}
            >
              Show More
            </Button>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={true}
            addImage={imagePrefix("chats/image3-1686847794903.webp")}
          >
            <h1 className="theme-title theme-title-red">Step 3:</h1>
            <Paragraph>
              Create your new popup menu for today, adding which menu items and
              how many you'll be giving to your Driver.
            </Paragraph>
            <Paragraph>
              You can assign a minimum of one item, or however many you think
              you can sell during this Driver's shift! Remember your optional
              discount timer should ensure all assigned menus are sold out
              though.
            </Paragraph>
            <Button
              red
              lg
              onClick={() => {
                showModal();
                setCurrentGif(imagePrefix("chats/03-1686848040444.gif"));
              }}
            >
              Show More
            </Button>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={false}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/image4-1686847831355.webp")}
          >
            <h1 className="theme-title theme-title-red">Step 4:</h1>
            <Paragraph>
              Your Driver will be notified so they can make their way into your
              restaurant.
            </Paragraph>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={true}
            addImage={imagePrefix("chats/image5-1686847843068.webp")}
          >
            <h1 className="theme-title theme-title-red">Step 5:</h1>
            <Paragraph>Assign menu items to your Driver.</Paragraph>
            <Paragraph>
              We'll then immediately notify all matching Eaters in your area
              that your menu items are available for delivery right now -
              they'll be literally MINUTES away (seriously, we're talking 1-5
              minutes away from your Driver most of the time!)
            </Paragraph>
            <Button
              red
              lg
              onClick={() => {
                showModal();
                setCurrentGif(imagePrefix("chats/04-1686848062018.gif"));
              }}
            >
              Show More
            </Button>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={false}
            addImage={imagePrefix("chats/image6-1686847865994.webp")}
          >
            <h1 className="theme-title theme-title-red">Step 6:</h1>
            <Paragraph>
              You'll see the orders on the app in real time - as well as your
              Drivers' live locations and Eater wait times. It's all built to be
              as hands-off as possible, whilst making it simple for you, your
              Drivers and Eaters to order from you!
            </Paragraph>
            <Button
              red
              lg
              onClick={() => {
                showModal();
                setCurrentGif(imagePrefix("chats/05-1686848088827.gif"));
              }}
            >
              Show More
            </Button>
          </UseableRow>
        </div>
        <div className={`red-bar ${showBar ? "show-bar" : "hide-bar"}`}>
          <div className="download">
            <p>Start Selling NOW!</p>
            <div className=" download-icons  d-flex justify-content-center">
              {osType === "ipa" && (
                <a
                  href="https://apps.apple.com/us/app/foodchoo-restaurant/id1574576732"
                  target="_blank"
                >
                  {" "}
                  <img
                    className={"download_actions"}
                    src={imagePrefix("chats/app-store-min-1686333735877.webp")}
                    alt="Eater App"
                  />{" "}
                </a>
              )}
              {osType === "apk" && (
                <a
                  href="https://play.google.com/store/apps/details?id=com.project.foodchooapp"
                  target="_blank"
                >
                  {" "}
                  <img
                    className={"download_actions"}
                    src={imagePrefix("chats/playstore-min-1686333578568.webp")}
                    alt="Eater App"
                  />{" "}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        width={750}
        wrapClassName="gif-wrapper"
        bodyStyle={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          padding: "10px",
        }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {currentGif && (
          <img
            src={currentGif}
            style={{ maxWidth: "100%", marginTop: "0px" }}
          />
        )}
      </Modal>
    </PageLayout>
  );
};
export default index;
