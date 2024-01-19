import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

import PageLayout from "../uiComponents/PageLayout/PageLayout";
import DownloadActions from "../uiComponents/downloadActions/DownloadActions";
import FAQ from "../uiComponents/faq/Faq";
import MapMobile from "../uiComponents/mapMobile/MapMobile";
import Paragraph from "../uiComponents/paragraph/Paragraph";

import useWindowSize from "../utils/useWindowSize";
// import Shadow from "../assets/images/icons/Shadow.svg";
import DesktopMobileMap from "../uiComponents/desktopMobileMap/DesktopMobileMap";
import { imagePrefix } from "../utils/imagePrefix";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import useGeoLocation from "../utils/hooks";
import { notification } from "antd";

const title =
  "Best Food delivery app in 2022 | Best Restaurant deals & discounts | FoodChoo";

const description =
  "Foodchoo is a Food delivery platform where you can easily signup your food chain business as a business owner this app best food delivery app in 2022 and you can also find the best restaurant deals & discounts in the food choo app.";

const Home = () => {
  const { width } = useWindowSize();
  const [mapComponent, setMapComponent] = useState(null);
  const [showDemo, setShowDemo] = useState(false);
  const [isPermission, setIsPermission] = React.useState(false);

  var [location, setLocation] = useState({
    loaded: false,
    error: false,
    coordinates: {
      lat: "",
      lng: "",
    },
  });

  useEffect(() => {
    if (width <= 850) {
      setMapComponent(<MapMobile />);
    } else {
      setMapComponent(
        <DesktopMobileMap showDemo={showDemo} setShowDemo={setShowDemo} />
      );
    }
  }, [width]);

  // const handlemodal = () => {
  //   setShowDemo(false);
  // };

  useEffect(() => {
    if (isPermission) {
    } else {
      setShowDemo(false);
    }
  }, [isPermission]);

  const onStartDemo = () => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        setShowDemo(true);
      },
      (res) => {
        notification.error({
          message: "You must allow location services to see our demo",
        });
      }
    );
  };

  useEffect(() => {
    // console.log(location);
    // if(location?.co)
  }, [location]);

  return (
    <PageLayout title={title} description={description} overwrite>
      <div className="i-am-home layout">
        <div
          style={{
            backgroundImage: `url(${
              width > 640
                ? imagePrefix("chats/home_img_1-1686253096484.webp")
                : imagePrefix("chats/home_img_1-1686253096484.webp")
            })`,
          }}
          className="hero-section"
        >
          {!showDemo && (
            <div className="hero_section_demo_toggler">
              {/* <span className="title">Food Delivery 3.0</span> */}
              <p className="mt_20"></p>
              <Paragraph>
                We are not a traditional food delivery company. We have
                developed a new, innovative food delivery platform that is
                completely different from every other method of food delivery
                out there.
              </Paragraph>
              <Paragraph>
                FoodChoo empowers everyone in the food delivery ecosphere. On
                our platform, drivers make a living wage, restaurants increase
                sales significantly from within their local communities and
                consumers can purchase a variety of fresh, hot meals delivered
                in minutes with speed and convenience.
              </Paragraph>
              <h1>
                FoodChoo is Food Delivery 3.0 - THE FUTURE OF FOOD DELIVERY.
              </h1>
              <button onClick={onStartDemo}>
                Start Demo <BsPlayCircle size={16} />
              </button>
            </div>
          )}
          <div
            style={{ display: showDemo ? "flex" : "none" }}
            className="hero_title"
          >
            <p>FoodChoo</p>
            <span>On Demand Now!</span>
          </div>
          <div
            style={{ display: showDemo ? "block" : "none" }}
            className="map-mobile"
          >
            <div className="content-img">
              <p>FoodChoo</p>
              <span>On Demand Now</span>
            </div>

            <div className="map_wrap">
              {width <= 850 ? (
                <MapMobile
                  setIsPermission={setIsPermission}
                  showDemo={showDemo}
                />
              ) : (
                <DesktopMobileMap
                  setIsPermission={setIsPermission}
                  showDemo={showDemo}
                />
              )}
              <button onClick={() => setShowDemo(false)}>
                <FiX />
              </button>
            </div>
          </div>
        </div>
        <div className="app-intro container spacingY">
          <Fade top>
            <Paragraph customClass="text-center">
              FoodChoo was designed and created around the possibility of
              getting people hot fresh meals in the fastest time possible. Our
              outside the box approach to food delivery is to build a
              sustainable business model that connects vibrant communities of
              local restaurants along with the people that live, work and even
              vacation in the area.
            </Paragraph>
          </Fade>
          <Fade top delay={1000}>
            <Image
              width={1200}
              height={800}
              objectFit="contain"
              loading="lazy"
              className="w-100"
              src={imagePrefix("chats/home_img_2-1686253379602.webp")}
              alt=""
            />
          </Fade>
        </div>
        <div className="establishment-app container spacingY">
          <div className="row">
            <div className="col-lg-12 flex-column-center">
              <h1 className="theme-title ">
                OnDemand! Now! Food Delivery and our
              </h1>
              <h1 className="theme-title theme-title-red theme-title-max">
                innovative Pop-Up Menu
              </h1>
              <Paragraph customClass="text-center">
                With FoodChoo, the world's only OnDemand! Now! Food Delivery
                Platform, small, local restaurants FIRST prepare and package
                awesome meals, THEN these meals are sent out with a driver and
                made available for immediate delivery. Any local eater with the
                foodchoo eater app can see what is available for immediate
                delivery in their area and order accordingly. All purchases
                should be delivered in minutes
              </Paragraph>
              <br />
            </div>
            <div className="col-lg-12 flex-column-center">
              <Fade top>
                <div className="wrapper-rectangle-div w-100">
                  <Image
                    width={1200}
                    height={800}
                    objectFit="contain"
                    loading="lazy"
                    className="m-auto w-100"
                    src={imagePrefix("chats/home_img_3-1686253450918.webp")}
                    alt=""
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="about-app container">
          <div className="row align-items-center spacingY">
            <div className="col-lg-6 flex-column-center mr-b-column">
              <Fade left>
                <Image
                  width={300}
                  height={600}
                  objectFit="contain"
                  loading="lazy"
                  className="m-auto gif-mok"
                  src={imagePrefix("chats/home_gif_2-1686254482751.gif")}
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-lg-6 flex-center-sm ">
              <Fade right>
                <h1 className="theme-head-x-lg theme-title-red theme-title mr-top-mob">
                  PUSH NOTIFICATION
                </h1>
                <Paragraph>
                  This is our second major innovation. Push notifications are
                  sent out by restaurants when there are hot meals out for
                  delivery. This allows consumers in the local community to
                  purchase these items immediately. The FoodChoo push
                  notification system is designed to provide a range of settings
                  so that the consumer has the ultimate control of how they
                  experience using the FoodChoo platform.
                </Paragraph>
              </Fade>
            </div>
          </div>

          <div className="row align-items-center wrap-rev spacingY">
            <div className="col-lg-6 flex-center-sm ">
              <Fade right>
                <h1 className="theme-head-x-lg theme-title-red theme-title mr-top-mob">
                  POP-UP MENU
                </h1>
                <Paragraph>
                  This is our first major innovation. Pop-up menus are created
                  by restaurants and made available through the FoodChoo -
                  OnDemand! Now! Food Delivery platform. The items available for
                  sale in the Pop -Up menu are the only items that are in the
                  delivery vehicle. These items are available for immediate
                  delivery and are only listed in the Pop-Up menu. When the
                  driver sells out of items the Pop-Up menu goes away.
                </Paragraph>
              </Fade>
            </div>
            <div className="col-lg-6 flex-column-center mr-b-column">
              <Fade left>
                <Image
                  width={300}
                  height={600}
                  objectFit="contain"
                  loading="lazy"
                  className="m-auto gif-mok"
                  src={imagePrefix("chats/home_gif_2-1686254482751.gif")}
                  alt=""
                />
              </Fade>
            </div>
          </div>

          <div className="row align-items-center spacingY">
            <div className="col-lg-6 flex-column-center mr-b-column">
              <Fade left>
                <Image
                  width={300}
                  height={600}
                  objectFit="contain"
                  loading="lazy"
                  className="m-auto gif-mok"
                  src={imagePrefix("chats/home_gif_2-1686254482751.gif")}
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-lg-6 flex-center-sm ">
              <Fade right>
                <h1 className="theme-head-x-lg theme-title-red theme-title mr-top-mob">
                  Live Menu
                </h1>
                <Paragraph>
                  Once a restaurant sends out a push notification. The driver
                  will appear on the map of the eater app, and the consumer just
                  has to tap on the driver to see the Pop-Up menu of items
                  available and purchase accordingly. Any consumer in the local
                  area with the FoodChoo eater app can see all the drivers in
                  the area, even if push notifications are set to off.
                </Paragraph>
              </Fade>
            </div>
          </div>

          <div className="row align-items-center wrap-rev spacingY ">
            <div className="col-lg-6  flex-center-sm">
              <Fade left>
                <h1 className="theme-head-x-lg theme-title-red theme-title mr-top-mob">
                  Discount Offer
                </h1>
                <Paragraph>
                  If a restaurant has decided to offer a discount if the hot
                  food hasn’t sold out in a certain time then you will also see
                  a discount level on the Driver pin. Grab yourself a discounted
                  meal deal!
                </Paragraph>
                <div>
                  <Image
                    width={300}
                    height={600}
                    objectFit="contain"
                    loading="lazy"
                    className="m-auto gif-mok mob-res"
                    src={imagePrefix("chats/driver-min-1686253798697.webp")}
                    alt=""
                  />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 flex-column-center mr-b-column">
              {/* <video  autoPlay loop style={{ width: "500px", height: "500px" }}>
              <source src="./../assets/images/sample/Video.mp4" type="video/mp4" />
            </video> */}
              <Fade right>
                <Image
                  width={300}
                  height={600}
                  objectFit="contain"
                  loading="lazy"
                  className="m-auto gif-mok"
                  src={imagePrefix("chats/home_gif_1-1686254252538.gif")}
                  alt=""
                />
              </Fade>
            </div>
          </div>

          <div className="row align-items-center spacingY">
            <div className="col-lg-6 flex-column-center mr-b-column">
              <Fade left>
                <img
                  className="m-auto gif-mok"
                  src={imagePrefix("chats/home_img_6-1686253509760.webp")}
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-lg-6 flex-center-sm">
              <Fade right>
                <h1 className="theme-head-x-lg theme-title-red theme-title mr-top-mob">
                  Tap to order and pay.
                </h1>
              </Fade>
            </div>
            <div />
          </div>
          <div className="row align-items-center wrap-rev spacingY ">
            <div className="col-lg-6  flex-center-sm">
              <Fade left>
                <Paragraph>
                  And finally you can see the Driver coming to you in real time
                  - often they’ll be 5 minutes away from you or less.
                </Paragraph>
              </Fade>
            </div>
            <div className="col-lg-6 flex-column-center mr-b-column">
              <Fade right>
                <Image
                  width={300}
                  height={600}
                  objectFit="contain"
                  loading="lazy"
                  className="m-auto gif-mok"
                  src={imagePrefix("chats/home_gif_3-1686254521710.gif")}
                  alt=""
                />
              </Fade>
            </div>
          </div>
          <div className="app-intro container spacingY">
            <div className="flex-column-center">
              <Fade top>
                <Image
                  width={1000}
                  height={600}
                  objectFit="contain"
                  loading="lazy"
                  src={imagePrefix("chats/home_img_8-1686330222740.webp")}
                  alt=""
                  // className="responsive-f-mobile max-widths"
                />
              </Fade>
            </div>
          </div>
          <div className="download-app container flex-column-center spacingY">
            <Fade left>
              <h1 className="theme-title ">
                Download the app and create your FREE
              </h1>
              <h1 className="theme-title theme-title-red theme-title-max">
                account right now
              </h1>
            </Fade>
            <DownloadActions />
          </div>
          <div className="container faqs spacingY">
            <FAQ />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
