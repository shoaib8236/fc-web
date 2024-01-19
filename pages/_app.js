import "../assets/scss/index.scss";
import Navbar from "../uiComponents/navbar/Navbar";
import Footer from "../uiComponents/footer/Footer";

export function reportWebVitals(metric) {
  // console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
