import React from "react";
import Logo from "../../assets/images/logo/logo_red.svg";
import Paragraph from "../paragraph/Paragraph";
import FB from "../../assets/images/icons/fb.png";
import insta from "../../assets/images/icons/insta.png";
import linkedin from "../../assets/images/icons/linkedin.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="i-am-footer container-fluid">
        <div className="container footer-items-wrapper">
          {/* <div className="row footer-row">
            <div className="col-lg-6">
              <img className="mb-3" src={Logo.src} alt="logo" />
              <Paragraph customClass="footer-desc">
                The FoodChoo OnDemand! Now! Food delivery platform will be
                available to every small restaurant that wants to use it. Our
                platform is designed to help restaurants sell more food in less
                time in the most ethical way possible. We believe in
                transparency and we believe that restaurants are a great small
                business.
              </Paragraph>
            </div>
            <div className="col-lg-3">
              <ul className="footer-links">
                <li>
                  <h3 className="footer-title">Useful Links</h3>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/restaurant">Restaurant</Link>
                </li>
                <li>
                  <Link href="/customer">Customer</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="footer-links">
                <li>
                  <h3 className="footer-title">Contact</h3>
                </li>
                <li>
                  <a href="tel:+123456789">Call: +123 4560 7890</a>
                </li>
                <li>
                  <a href="mailto:someone@example.com">
                    Email: example@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="mr-4" src={insta.src} alt="instagram" />
                  </a>
                  <a href="#">
                    <img className="mr-4" src={FB.src} alt="facebook" />
                  </a>
                  <a href="#">
                    <img className="mr-4" src={linkedin.src} alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="row footer-row">
            <div className="col-lg-5">
              <img className="mb-3" src={Logo.src} alt="logo" />
              <Paragraph customClass="footer-desc">
                The FoodChoo OnDemand! Now! Food delivery platform is available
                to every restaurant that wants to use it. Our platform is
                designed to help restaurants sell more food in less time in the
                most ethical way possible. We believe in transparency and we
                believe that restaurants should continue to grow and prosper
                with us in this age of 'instant everything'.
              </Paragraph>
            </div>
            <div className="col-lg-3">
              <ul className="footer-links">
                <li>
                  <h3 className="footer-title">Company</h3>
                </li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#">
                    <span>Suggestions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">What is FoodChoo</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                {/* <li>
                  <Link href="/restaurant">Restaurant</Link>
                </li>
                <li>
                  <Link href="/customer">Customer</Link>
                </li> */}
              </ul>
            </div>
            {/* <div className="col-lg-3">
              <ul className="footer-links">
                <li>
                  <h3 className="footer-title">News</h3>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Newsroom</a>
                </li>
              </ul>
            </div> */}
            <div className="col-lg-4">
              <ul className="footer-links">
                <li>
                  <h3 className="footer-title">Get In Touch</h3>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          © Copyrights FoodChoo 2022, All rights reserved |
          <Link href="/privacy-policy"> Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
