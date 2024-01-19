import Fade from "react-reveal";

import Image from "next/image";
import PageLayout from "../../uiComponents/PageLayout/PageLayout";
import Paragraph from "../../uiComponents/paragraph/Paragraph";
import UseableRow from "../../uiComponents/useableRow/useableRow";
import { imagePrefix } from "../../utils/imagePrefix";

const title =
  "Online Food Delivery App in usa | Online Food Ordering Platform | FoodChoo";

const description =
  " FoodChoo is the fastest growing app in 2022 its covers all over the restaurants of the world with amazing features fast performance and discounts.";

const index = () => {
  const spacing = "0 0 80px 0";

  const customImageLoader = ({ src }) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = () => resolve(src);
      image.onerror = (error) => reject(error);
    });
  };

  return (
    <PageLayout title={title} description={description} overwrite>
      <div className="layout i-am-guide">
        <div
          style={{
            backgroundImage: `url(${imagePrefix(
              "chats/bg_wave-1686410909758.webp"
            )})`,
          }}
          className="her-section mb-5"
        >
          <Fade top>
            <h1 className="theme-head-x-lg md-bold white">WHAT IS FoodChoo?</h1>
            <h1 className="theme-head-lg text-center my-5 md-bold white">
              FoodChoo is an OnDemand! Now!™ Food delivery platform
              <br />
              that consists of three separate apps:
            </h1>
          </Fade>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 spacing center_object">
              <Fade top>
                <Image
                  width={1000}
                  height={680}
                  objectFit="contain"
                  loading="lazy"
                  src={imagePrefix("chats/image1-min-1686412144437.webp")}
                  alt=""
                />
              </Fade>
            </div>
            <div className="col-lg-12 spacing text-center">
              <Fade top>
                <h1 className="theme-head-x-lg md-bold text-center">
                  You as the Establishment will have YOUR OWN DRIVER(S)
                  <br /> doing your deliveries.
                </h1>
                <Paragraph customClass="my-4">
                  FoodChoo is an OnDemand! Now!™ Food delivery platform that
                  consists of three separate apps.
                  <br />
                  This is the first main difference between FoodChooand other
                  food delivery platforms.
                </Paragraph>

                <Paragraph customClass="my-4">
                  Your drivers will often be current Staff - or you can hire
                  someone for an hour where they deliver ONLY for you during
                  that one hour shift.
                  <br /> A shift will most likely last just a single hour as you
                  won't want hot food on the road for more than that (more on
                  this later).
                </Paragraph>
                <Paragraph customClass="my-4">
                  Now with traditional food delivery apps, you'll receive the
                  order, an app delivery driver will turn up and grab the food
                  and dash off.
                </Paragraph>
                <Paragraph customClass="my-4">
                  This is the main difference FoodChoo offers you and your
                  restaurant or establishment.
                </Paragraph>
              </Fade>
            </div>
            <div className="col-lg-12 text-center spacing">
              <Fade top>
                <h1 className="theme-head-x-lg md-bold">
                  FOODCHOO FOR RESTAURANTS WALKTHROUGH
                </h1>
                <Paragraph>
                  Let's use an example to show what we're all about, and how
                  FoodChoo is going to benefit you:
                </Paragraph>
              </Fade>
            </div>
          </div>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={true}
            addImage={imagePrefix("chats/wfc_gif2-1686413453825.gif")}
          >
            <Paragraph>
              Let's say your business is called KombuchaWOW and you sell a range
              of delicious kombucha flavours. However, it's the Phuket Blue
              flavour that the Customers best know you for!
            </Paragraph>
            <Paragraph>
              So, wanting to try FoodChoo straight away, you'll create your own
              Phuket Blue kombucha deal.
            </Paragraph>
            <Paragraph>
              Make sure you use a killer description and a great photo taken
              with your own mobile phone like you do with your Instagram photos.
            </Paragraph>
            <Paragraph>Total time to set this up = 5 minutes</Paragraph>
            <Paragraph>
              And yes, you could just as easily be a burger restaurant, or sell
              amazing pizzas - or Chinese. Or vegan food. Or.. (you get the
              idea!)
            </Paragraph>
          </UseableRow>
          <UseableRow
            alignCenter={true}
            reverse={false}
            addSpacing={spacing}
            addImage={imagePrefix("chats/wfc_gif5-1686581581358.gif")}
          >
            <Paragraph>
              Being your first day on FoodChoo, you decide to just sell 5
              bottles of Phuket Blue kombucha to see how well it goes.
            </Paragraph>
            <Paragraph>
              So in the FoodChoo Establishment you'll create a NEW POPUP MENU
              and set 5 as the amount you're going to be selling, and set the
              delivery area you want to cover tonight (or leave the default 3
              miles / 5km)
            </Paragraph>
            <Paragraph>Total time to set this up = 1 minute</Paragraph>
            <Paragraph>
              We always suggest selling just 2 or 3 of your most popular menu
              item through FoodChoo on your first couple of days. Pizzas and
              hotdogs are always crowd favourites too!
            </Paragraph>
          </UseableRow>
          <UseableRow
            alignCenter={true}
            reverse={true}
            addSpacing={spacing}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/wfc_gif13-1686413351782.webp")}
          >
            <Paragraph>
              Although you have a few staff that work for you, for today's
              Kombucha deliveries you want Abraham to do them. Now Abraham can
              use his own transport, or maybe you have a scooter or transport he
              can use for the hour.
            </Paragraph>
          </UseableRow>
          <UseableRow
            alignCenter={true}
            addSpacing={spacing}
            fixImage={"auto-size"}
            reverse={false}
            addImage={imagePrefix("chats/wfc_gif6-1686581676079.gif")}
          >
            <Paragraph>
              Abraham needs to have been verified by us as an authorised Driver
              first (the app asks to take a picture of his driving license and
              verifies within 30 seconds)
            </Paragraph>
            <Paragraph>
              Once verified, then he taps START SHIFT in his app.
            </Paragraph>
            <Paragraph>
              Now you can assign him menu items ready for him. Could be 5
              bottles of cold sparkling kombucha, or it could be 3 of your
              best-selling pizzas!
            </Paragraph>
          </UseableRow>
          <UseableRow
            alignCenter={true}
            reverse={true}
            addSpacing={spacing}
            addImage={imagePrefix("chats/wfc_gif3-1686413488226.gif")}
          >
            <Paragraph>
              Now, if you're selling kombucha, you can give the bottles straight
              to Abraham and off he goes, BUT let's say you're selling tacos! It
              might take you a while to cook up 5 x Chicken Taco Supremes, but
              once they're ready, you tap the FoodChoo app and assign all 5
              items to Abraham.
            </Paragraph>
            <Paragraph>
              Time taken to set this up = Less than 10 seconds!
            </Paragraph>
          </UseableRow>
          <UseableRow
            alignCenter={true}
            addSpacing={spacing}
            fixImage={"auto-size"}
            reverse={false}
            addImage={imagePrefix("chats/wfc_gif7-1686581722903.gif")}
          >
            <Paragraph>
              FoodChoo will immediately notify Eaters in your area that there
              are 3 bottles of delicious sparkling kombucha (or, remember the 5
              x Chicken Taco Supreme deals!)
            </Paragraph>
            <Paragraph>
              Pretty much, as soon as you tell the FoodChoo app you've given the
              menu items to Abraham, you should start getting orders within a
              minute or so!
            </Paragraph>
            <Paragraph>
              By the time Abraham starts his engine, there's a good chance all
              of the menu items you assigned to him will be ALREADY SOLD!
            </Paragraph>
          </UseableRow>
          {/* <UseableRow
            alignCenter={true}
            reverse={true}
            addSpacing={spacing}
            addImage={image8}>
            <Paragraph>
              And you're done - you're live and selling right now.
            </Paragraph>
          </UseableRow> */}
          <UseableRow
            alignCenter={true}
            addSpacing={spacing}
            reverse={true}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/image9-1686583062182.gif")}
          >
            <div className="text-center">
              <Paragraph>
                Time taken from FoodChoo signup to being ready to sell your
                menus..
              </Paragraph>
              <Paragraph>6 MINUTES.</Paragraph>
              <Paragraph>Yes. Really.</Paragraph>
            </div>
          </UseableRow>
          {/* _____________________ */}
          <div className="row">
            <div className="col-lg-12 flex-column-center text-center spacing">
              <Fade top>
                <h1 className="theme-head-x-lg md-bold text-center">
                  SO HOW DO THE EATERS FIND OUT ABOUT ME AND MY DEALS?
                </h1>
                <Paragraph>
                  This is the second part of our FoodChoo "secret sauce" - it's
                  how we made our Eater app work better for everyone - here's a
                  quick rundown for you to better understand how we use our On
                  Demand! Now! technology to help you sell more food.
                </Paragraph>
              </Fade>
            </div>
          </div>
          {/* _____________________ */}

          <UseableRow
            alignCenter={true}
            reverse={true}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/wfc_gif14-1686413384263.gif")}
            addSpacing={spacing}
          >
            <Paragraph>
              As you already know with current food delivery apps and food
              delivery platforms; The Eater opens their app, thinks they want a
              pizza and 45 minutes later a cold, lifeless box of stringy cheese
              crust disappointment is dropped off to them.
            </Paragraph>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            addImage={imagePrefix("chats/image11-min-1686412618453.webp")}
          >
            <Paragraph>
              It wasn't your fault - you did everything right and cooked the
              pizza and it was hot, fresh and delicious when you gave it to the
              Driver
            </Paragraph>
            <Paragraph>
              But then 45 mins later, the Eater finally gets that pizza and it's
              been smashed around, it's got colder and it's made the box greasy
              and has made your restaurant look bad, and made the Eater annoyed
              af
            </Paragraph>
          </UseableRow>
          <div className="row">
            <div className="col-lg-12 flex-column-center text-center spacing">
              <h1 className="theme-head-x-lg md-bold text-center">
                Enter FoodChoo and our On Demand! Now! app for the Eater.
              </h1>
              <Paragraph>They have two methods to order from you:</Paragraph>
            </div>
          </div>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={true}
            addImage={imagePrefix("chats/wfc_gif8-1686582431242.gif")}
          >
            <Paragraph>
              As you already know with current food delivery apps and food
              delivery platforms; The Eater opens their app, thinks they want a
              pizza and 45 minutes later a cold, lifeless box of stringy cheese
              crust disappointment is dropped off to them.
            </Paragraph>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/wfc_gif9-1686582715031.gif")}
          >
            <Paragraph>
              The Eater sees that your Driver has 3 of the 5 Chicken Taco
              Supreme deals left, after already selling 2 already and also sees
              the Driver is only 1 minute away from them!
            </Paragraph>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={true}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/gif-order-1686582953541.gif")}
          >
            <Paragraph>
              They order, and then see your Driver's live location as he heads
              towards them in real time.
            </Paragraph>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/wfc_gif10-1686413078398.gif")}
          >
            <Paragraph>
              The Eater wants Mexican food, and isn't interested in anything
              else!
            </Paragraph>
            <Paragraph>
              They tap their I AM HUNGRY button and set "Mexican" as their
              preferred cuisine type. If they have any food allergies too, they
              would have set that up already in their app.
            </Paragraph>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            reverse={true}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/wfc_gif12-1686413209932.gif")}
          >
            <Paragraph>
              For the next 20 mins - even if the phone has been put down - then
              if any Driver who is carrying Mexican cuisine menus comes into
              range of the Eater, the Eater app will start to alert them that a
              Driver is near them. Hopefully YOUR driver!
            </Paragraph>
          </UseableRow>
          <UseableRow
            addSpacing={spacing}
            alignCenter={true}
            fixImage={"auto-size"}
            addImage={imagePrefix("chats/wfc_gif11-1686413167660.gif")}
          >
            <Paragraph>
              They then follow the previous steps from example 1 above, and you
              have another sale of your Chicken Taco Supreme this evening!
            </Paragraph>
          </UseableRow>
          <div className="row">
            <div className="col-lg-12 text-center spacing">
              <Paragraph customClass="my-4">
                We also kind of like using the example of ice cream trucks when
                you were a kid - remember them? Remember how you heard their
                catchy tunes playing from way off, so you'd badger your Mom into
                giving you money so you could run outside and be waiting for
                them to arrive?
              </Paragraph>
              <Paragraph customClass="my-4">
                We're like that - but with a bang up to date app, for how people
                want on demand food delivery these days. Could be ice cream
                still, but could also be your Chicken Taco Supreme delivery. Or
                your coffee cart delivery. Or your pizza delivery. Or your...
                (you know what? I'm the copy writer guy Nate writing this, and
                I'm hungry now. BRB, just using FoodChoo myself right now for
                Indian food delivery...)
              </Paragraph>
              {/* <Paragraph customClass="my-4">
              [[[Bottom of screen: the * text for the starred text in first line
              of text!!]]]
            </Paragraph> */}
              <Paragraph customClass="my-4">
                * You need to be verified on the FoodChoo platform, which can
                take up to 24 hours, and your own Drivers also need to be
                verified separately too with us. When we say 6 minutes, we're
                not lying - you can create your menu and sell in just 6 minutes
                after being verified. We'll show you how in our app and at our
                Chooniversity learning area. It's simple, we promise.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default index;
