import { useEffect, useState } from "react";
import { osName } from "react-device-detect";
import { Fade } from "react-reveal";
import heroBg from "../../../assets/images/driver/image1.png";
import appStoreIcon from "../../../assets/images/icons/app-store.png";
import playStore from "../../../assets/images/icons/playstore.png";
import PageLayout from "../../../uiComponents/PageLayout/PageLayout";
import Paragraph from "../../../uiComponents/paragraph/Paragraph";
import UseableRow from "../../../uiComponents/useableRow/useableRow";
import { imagePrefix } from "../../../utils/imagePrefix";

const index = () => {
  const spacing = "0 0 80px 0 ";
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
    <PageLayout title="Becoming a FoodChoo Rider">
      <div className="layout i-am-driver">
        <div
          style={{ backgroundImage: `url(${heroBg.src})` }}
          className="her-section mb-5"
        >
          <div className="container">
            <div className="row" style={{ alignItems: "flex-start" }}>
              <div className="col-lg-6 mr-b-column d-column center driver_title">
                <h1 className="theme-title theme-title-white theme-title-max">
                  Earn more per hour <br /> With less stress
                </h1>
                <h1 className="theme-head-md md-bold clr-white ">
                  We’re here to make your food delivery WAY more profitable for
                  you!
                </h1>
              </div>
              <div className="col-lg-6 center">
                <Fade top>
                  <img
                    style={{ maxWidth: 300 }}
                    className="w-100"
                    src={imagePrefix("chats/01-1686848614529.gif")}
                    alt=""
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row spacing">
            <div className="col-lg-12 text-center">
              <h1 className="theme-head-x-lg">How It Works</h1>
            </div>
          </div>
          <UseableRow
            fixImage={"auto-size"}
            reverse={false}
            alignCenter={true}
            addSpacing={spacing}
            addImage={imagePrefix("chats/02-1686849381313.gif")}
          >
            <Paragraph>
              Become a registered Driver with us! Download the app{" "}
              {`<<<popup modal for both google / apple store download links>>`},
              and apply. Our approval process can take up to 7 days.
            </Paragraph>
          </UseableRow>
          <UseableRow
            reverse={true}
            fixImage={"auto-size"}
            alignCenter={true}
            addSpacing={spacing}
            addImage={imagePrefix("chats/03-1686849421613.gif")}
          >
            <Paragraph>
              Find your Restaurant in the app and connect with them (or they can
              connect with you)
            </Paragraph>
          </UseableRow>
          <UseableRow
            reverse={false}
            alignCenter={true}
            addSpacing={spacing}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/04-1686849481465.gif")}
          >
            <Paragraph>Start your SHIFT</Paragraph>
          </UseableRow>
          <UseableRow
            reverse={true}
            alignCenter={true}
            addSpacing={spacing}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/05-1686849505702.gif")}
          >
            <Paragraph>
              Your Restaurant / Establishment will then assign you a certain
              number of food items to hold for up to an hour. This is the main
              difference to FoodChoo and all other platforms.
            </Paragraph>
          </UseableRow>
          <UseableRow
            reverse={false}
            alignCenter={true}
            addSpacing={spacing}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/06-1686849523205.gif")}
          >
            <Paragraph>Deliveries will come in, you make them!</Paragraph>
          </UseableRow>
          <UseableRow
            reverse={true}
            alignCenter={true}
            addSpacing={spacing}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/07-1686849552062.gif")}
          >
            <Paragraph>Annnnnd... EARN!</Paragraph>
            <Paragraph>
              If you are working for multiple Establishments, we'll show you
              what you're owed in tips from each of them: 100% transparency.
              We'll also show you how much distance (Km / Miles) you've driven
              each day to help you in your tax reporting.
            </Paragraph>
          </UseableRow>
          <div className="row spacing">
            <div className="col-lg-12 text-center">
              <h1 className="theme-head-x-lg mb-4">
                Sounds like more of the same. What’s different with FoodChoo
                then?
              </h1>
              <Paragraph customClass="mb-4">
                Yup, you’re used to driving but you’re not used to where we said
                you’d be assigned a certain amount of menu items by your
                Establishment, right?
              </Paragraph>
              <Paragraph customClass="mb-4">
                You ONLY Drive for one Restaurant / Establishment You ONLY drive
                for (usually) a maximum of one hour!
                <br />
                You make more in that one hour than 6 hours at other food
                delivery platforms
              </Paragraph>
              <Paragraph customClass="mb-4">
                Sounds too good to be true?
              </Paragraph>
              <Paragraph customClass="mb-4">
                Nope, we’ll explain what our On Demand! Now!™ technology means
                for you as a Driver, and why we say you’ll earn more in an hour
                as a driver using our app than with competing food delivery
                apps:
              </Paragraph>
            </div>
          </div>
          <UseableRow
            reverse={false}
            fixImage={"auto-size"}
            alignCenter={true}
            addSpacing={spacing}
            addImage={imagePrefix("chats/08-1686849575197.gif")}
          >
            <Paragraph>
              With FoodChoo, you’ll be driving for only a single restaurant. You
              will likely be a Staff member of that restaurant already, or they
              will ask you to work for them directly through the app.
            </Paragraph>
          </UseableRow>
          <UseableRow
            reverse={true}
            alignCenter={true}
            fixImage={"auto-size"}
            addSpacing={spacing}
            addImage={imagePrefix("chats/09-1686849595602.gif")}
          >
            <Paragraph>
              What happens is that the restaurant is known for maybe a few menu
              items in your local area.
            </Paragraph>
            <Paragraph>
              You agree to work deliveries for the breakfast rush, the lunchtime
              rush, or maybe even the evening dinner rush.
            </Paragraph>
            <Paragraph>
              The restaurant will make a number of the same menu items and then
              assign them to you to carry in your satchel or bag.
            </Paragraph>
          </UseableRow>
          <UseableRow
            reverse={false}
            alignCenter={true}
            fixImage={"auto-size"}
            addSpacing={spacing}
            addImage={imagePrefix("chats/10-1686849616710.gif")}
          >
            <Paragraph customClass="mb-4">
              As soon as the restaurant taps the deal is live, then your first
              orders will come in straight away as Eaters can see you’re only a
              few minutes away from them AND THEY DON’T HAVE TO WAIT AGES FOR
              THE ITEMS YOU’RE ALREADY CARRYING!
            </Paragraph>
          </UseableRow>
          <UseableRow
            reverse={true}
            fixImage="auto-size"
            alignCenter={true}
            addSpacing={spacing}
            addImage={imagePrefix("chats/11-1686849653955.gif")}
          >
            <h1 className="theme-head-lg md-bold">
              You ONLY drive for (usually) a maximum of one hour!
            </h1>
            <Paragraph customClass="mb-4">
              OK, so now you know the main difference on what On Demand! Now!™
              food delivery actually is, let’s blow your mind with how that’s
              going to make you more money in just an hour!
            </Paragraph>
            <Paragraph customClass="mb-4">
              Following on from above, you know you’ll be driving around the
              very local area to the restaurant with menu items already with
              you.
            </Paragraph>
            <Paragraph customClass="mb-4">
              Now assuming they’re hot items such as fries, then you want to
              have them all delivered well inside an hour - noone wants hour-old
              cold and limp fries, right?
            </Paragraph>
            <Paragraph customClass="mb-4">
              You will be receiving orders and SHOULD sell out long before that
              hour is up - and because you’ve made many deliveries in that hour
              - each of those deliveries will hopefully have tips with them - we
              always remind the Eaters to tip you.
            </Paragraph>
          </UseableRow>
          <UseableRow
            reverse={false}
            fixImage="auto-size"
            alignCenter={true}
            addSpacing={spacing}
            addImage={imagePrefix("chats/12-1686849703369.gif")}
          >
            <h1 className="theme-head-lg md-bold">
              You make more in that one hour than 6 hours at other food delivery
              platforms
            </h1>
            <Paragraph customClass="mb-4">
              So you’re making very local deliveries, and can easily make 6
              deliveries or more, in that single hour.
            </Paragraph>
            <Paragraph customClass="mb-4">
              That’s 6x tips in 60 mins or less.
            </Paragraph>
            <Paragraph customClass="mb-4">
              Less stress. More money for you.
            </Paragraph>
          </UseableRow>
        </div>
        <div className={`red-bar ${showBar ? "show-bar" : "hide-bar"}`}>
          <div className="download">
            <p>Start earning NOW!</p>
            <div className=" download-icons  d-flex justify-content-center">
              {osType === "ipa" && (
                <a
                  href="https://apps.apple.com/gb/app/foodchoo/id1578098220"
                  target="_blank"
                >
                  {" "}
                  <img
                    className={"download_actions"}
                    src={appStoreIcon.src}
                    alt="Eater App"
                  />{" "}
                </a>
              )}
              {osType === "apk" && (
                <a
                  href="https://play.google.com/store/apps/details?id=com.project.foodchooriderapp"
                  target="_blank"
                >
                  {" "}
                  <img
                    className={"download_actions"}
                    src={playStore.src}
                    alt="Eater App"
                  />{" "}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default index;
