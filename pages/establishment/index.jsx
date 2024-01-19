import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import heroBg from "../../assets/images/driver/image1.png";
import PageLayout from "../../uiComponents/PageLayout/PageLayout";
import Slider from "../../uiComponents/carousel/Carousel";
import { imagePrefix } from "../../utils/imagePrefix";
import Paragraph from "./../../uiComponents/paragraph/Paragraph";

const contentStyle = {
  maxHeight: "800px",
  color: "#fff",
  width: "100%",
  textAlign: "center",
};

const index = () => {
  const carouselProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  // emblaRef will be a reference to our carousel viewport
  const [emblaRef, embla] = useEmblaCarousel(
    {
      align: "start",
      // aligns the first slide to the start
      // of the viewport else will align it to the middle.

      loop: true,
      // we need the carousel to loop to the
      // first slide once it reaches the last slide.

      skipSnaps: false,
      // Allow the carousel to skip scroll snaps if
      // it's dragged vigorously.

      inViewThreshold: 0.7,
      // percentage of a slide that need's to be visible
      // inorder to be considered in view, 0.7 is 70%.
    },
    [Autoplay()]
  );

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <PageLayout title="Sell as an Establishment">
      <div className="layout i-am-establish">
        <div
          style={{ backgroundImage: `url(${heroBg.src})` }}
          className="her-section"
        >
          <h1 className="theme-head-x-lg md-bold mb-h-establish">
            The OnDemand! Now! Food Delivery App
          </h1>
          <h1 className="theme-head-lg md-bold mb-h-establish">
            List your restaurant on FoodChoo and start selling in just 6
            minutes*.
          </h1>
          <Paragraph customClass="mb-4">
            FoodChoo is a food ordering and delivery management platform that
            instantly connects customers with your business. We put your
            business in front of a customer right at the moment they are hungry,
            with successful delivery to them within just a few minutes from your
            own drivers.
          </Paragraph>
          <br />

          <Paragraph customClass="mb-4">
            Our FoodChoo apps are powered by our OnDemand! Now! system, which
            finally allows food delivery to be more profitable for you.
          </Paragraph>
          <Paragraph customClass="mb-4">
            Restaurants can now prepare meals for a local, targeted customer
            base and then deliver those fresh hot or cold meals to hungry
            customers in minutes.
          </Paragraph>
          <Paragraph customClass="mb-4">
            With FoodChoo, the world's first OnDemand! Now! food delivery
            platform, you're finally able to control your restaurant's food
            delivery experience,
            <br /> and put profits back in YOUR hands.
          </Paragraph>
        </div>
        <div className="container">
          <div className="w-100 mr-b">
            <Slider Autoplay={true} arrows={true} responsive={responsive}>
              <div className="flex_center p-3">
                <Image
                  height={518}
                  width={700}
                  objectFit="contain"
                  loading="lazy"
                  className="carousel-slides"
                  src={imagePrefix("chats/01-min-1686843804885.webp")}
                  alt=""
                />
              </div>
              <div className="flex_center p-3">
                <Image
                  height={518}
                  width={700}
                  objectFit="contain"
                  loading="lazy"
                  className="carousel-slides"
                  src={imagePrefix("chats/02-min-1686843961258.webp")}
                  alt=""
                />
              </div>
              <div className="flex_center p-3">
                <Image
                  height={518}
                  width={700}
                  objectFit="contain"
                  loading="lazy"
                  className="carousel-slides"
                  src={imagePrefix("chats/03-min-1686843997235.webp")}
                  alt=""
                />
              </div>
              <div className="flex_center p-3">
                <Image
                  height={518}
                  width={700}
                  objectFit="contain"
                  loading="lazy"
                  className="carousel-slides"
                  src={imagePrefix("chats/04-min-1686844024381.webp")}
                  alt=""
                />
              </div>
              <div className="flex_center p-3">
                <Image
                  height={518}
                  width={700}
                  objectFit="contain"
                  loading="lazy"
                  className="carousel-slides"
                  src={imagePrefix("chats/05-min-1686844076815.webp")}
                  alt=""
                />
              </div>
              <div className="flex_center p-3">
                <Image
                  height={518}
                  width={700}
                  objectFit="contain"
                  loading="lazy"
                  className="carousel-slides"
                  src={imagePrefix("chats/06-min-1686844101068.webp")}
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center mr-b">
              <Paragraph customClass="mb-4">
                FoodChoo and our OnDemand! Now platform does food delivery the
                RIGHT way - it finally makes food delivery profitable for you,
                <br />
                and puts you in control of your own customer experience
              </Paragraph>
              <Paragraph customClass="mb-4">
                Not just because we charge less fees than competing food
                delivery apps and platforms (although we do!), but more because
                we offer something better for you,
                <br />
                your drivers AND the hungry customers too!
              </Paragraph>
              <Paragraph customClass="mb-4">
                You're here because you want to know more about how FoodChoo can
                help your business make food delivery work better for you,
                <br />
                so let's cut to the questions with no fluff or hype.
              </Paragraph>
              <Link href={"/establishment/how-it-works"}>
                <span className="styled-btn red lg">Take Tour</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default index;
