import HorizontalBorder from "./HorizontalBorder";
import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <div className={`footer1 ${className}`}>
      <HorizontalBorder
        link="/link@2x.png"
        linkAppStore1svg="/link--appstore1svg.svg"
        linkSVG="/link--svg-4.svg"
        linkSVG1="/link--svg-5.svg"
        linkSVG2="/link--svg-6.svg"
        horizontalBorderHeight="unset"
        linkIconDebugCommit="unset"
        linkGooglePlay3svgDebugCommit="unset"
      />
      <div className="copyright1">
        <div className="copyright-info">
          <div className="bytesim-container">
            <div className="bytesim1">© 2024 ByteSIM </div>
          </div>
          <div className="payment-logos1">
            <div className="logo-rows">
              <img
                className="db139ae3d9347288599d26937f0372-icon2"
                alt=""
                src="/7db139ae3d9347288599d26937f03721svg1.svg"
              />
              <img className="mastersvg-icon1" alt="" src="/mastersvg@2x.png" />
            </div>
            <div className="logo-rows1">
              <img
                className="apple-paysvg-icon1"
                alt=""
                src="/apple-paysvg@2x.png"
              />
              <img className="paynowsvg-icon1" alt="" src="/paynowsvg1.svg" />
            </div>
            <div className="logo-rows2">
              <img
                className="e2694400ff3043e19cd888bd045333-icon1"
                alt=""
                src="/e2694400ff3043e19cd888bd0453336csvg1.svg"
              />
              <img className="paypalsvg-icon1" alt="" src="/paypalsvg@2x.png" />
            </div>
            <div className="logo-rows3">
              <img
                className="discoversvg-icon2"
                alt=""
                src="/discoversvg@2x.png"
              />
              <img
                className="samsung-paysvg-icon1"
                alt=""
                src="/samsung-paysvg@2x.png"
              />
            </div>
            <div className="logo-rows4">
              <img
                className="d854878c8ba246f7a7f955c624ead4-icon1"
                alt=""
                src="/d854878c8ba246f7a7f955c624ead478svg@2x.png"
              />
              <img
                className="shopee-paysvg-icon1"
                alt=""
                src="/shopee-paysvg@2x.png"
              />
            </div>
            <div className="logo-rows5">
              <img
                className="google-paysvg-icon1"
                alt=""
                src="/google-paysvg@2x.png"
              />
              <img
                className="dc3ccc5c01043c581393fc034132a4-icon1"
                alt=""
                src="/0dc3ccc5c01043c581393fc034132a46svg@2x.png"
              />
            </div>
            <div className="currency">
              <div className="border2">
                <div className="usd16">$ USD</div>
                <div className="currency-dropdown">
                  <img className="svg-icon27" alt="" src="/svg-41.svg" />
                </div>
              </div>
              <div className="card-logos1">
                <img
                  className="b9fac56bd43d6a869af9d6f806bd8-icon1"
                  alt=""
                  src="/198b9fac56bd43d6a869af9d6f806bd8svg@2x.png"
                />
                <img className="jcbsvg-icon2" alt="" src="/jcbsvg1.svg" />
                <img
                  className="maestrosvg-icon1"
                  alt=""
                  src="/maestrosvg1.svg"
                />
                <img className="visasvg-icon1" alt="" src="/visasvg@2x.png" />
                <img
                  className="visa-electronsvg-icon1"
                  alt=""
                  src="/visa-electronsvg@2x.png"
                />
                <img
                  className="df9757029c64cf6adcffdeb378e6f6-icon1"
                  alt=""
                  src="/0df9757029c64cf6adcffdeb378e6f69svg@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-icon56" alt="" src="/background-80.svg" />
    </div>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
