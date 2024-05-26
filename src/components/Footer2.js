import HorizontalBorder from "./HorizontalBorder";
import PropTypes from "prop-types";
import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <div className={`footer2 ${className}`}>
      <HorizontalBorder
        link="/link@2x.png"
        linkAppStore1svg="/link--appstore1svg1.svg"
        linkSVG="/link--svg-51.svg"
        linkSVG1="/link--svg-61.svg"
        linkSVG2="/link--svg-7.svg"
        horizontalBorderHeight="394.4px"
        linkIconDebugCommit="unset"
        linkGooglePlay3svgDebugCommit="unset"
      />
      <div className="footer-details">
        <div className="footer-content">
          <div className="bytesim-frame">
            <div className="bytesim2">© 2024 ByteSIM </div>
          </div>
          <div className="payment-methods2">
            <div className="card-logos2">
              <img
                className="db139ae3d9347288599d26937f0372-icon3"
                alt=""
                src="/7db139ae3d9347288599d26937f03721svg-1.svg"
              />
              <img className="mastersvg-icon2" alt="" src="/mastersvg@2x.png" />
            </div>
            <div className="card-logos3">
              <img
                className="apple-paysvg-icon2"
                alt=""
                src="/apple-paysvg@2x.png"
              />
              <img className="paynowsvg-icon2" alt="" src="/paynowsvg2.svg" />
            </div>
            <div className="card-logos4">
              <img
                className="e2694400ff3043e19cd888bd045333-icon2"
                alt=""
                src="/e2694400ff3043e19cd888bd0453336csvg2.svg"
              />
              <img className="paypalsvg-icon2" alt="" src="/paypalsvg@2x.png" />
            </div>
            <div className="card-logos5">
              <img
                className="discoversvg-icon3"
                alt=""
                src="/discoversvg-1@2x.png"
              />
              <img
                className="samsung-paysvg-icon2"
                alt=""
                src="/samsung-paysvg@2x.png"
              />
            </div>
            <div className="digital-wallets">
              <div className="wallet-icons">
                <img
                  className="d854878c8ba246f7a7f955c624ead4-icon2"
                  alt=""
                  src="/d854878c8ba246f7a7f955c624ead478svg@2x.png"
                />
                <img
                  className="google-paysvg-icon2"
                  alt=""
                  src="/google-paysvg@2x.png"
                />
              </div>
              <div className="wallet-icons1">
                <img
                  className="shopee-paysvg-icon2"
                  alt=""
                  src="/shopee-paysvg@2x.png"
                />
                <img
                  className="dc3ccc5c01043c581393fc034132a4-icon2"
                  alt=""
                  src="/0dc3ccc5c01043c581393fc034132a46svg@2x.png"
                />
              </div>
            </div>
            <div className="currency-dropdown1">
              <div className="border3">
                <div className="usd17">$ USD</div>
                <div className="currency-icon">
                  <img className="svg-icon28" alt="" src="/svg-7.svg" />
                </div>
              </div>
              <div className="credit-card-logos">
                <img
                  className="b9fac56bd43d6a869af9d6f806bd8-icon2"
                  alt=""
                  src="/198b9fac56bd43d6a869af9d6f806bd8svg@2x.png"
                />
                <img className="jcbsvg-icon3" alt="" src="/jcbsvg-1.svg" />
                <img
                  className="maestrosvg-icon2"
                  alt=""
                  src="/maestrosvg2.svg"
                />
                <img className="visasvg-icon2" alt="" src="/visasvg@2x.png" />
                <img
                  className="visa-electronsvg-icon2"
                  alt=""
                  src="/visa-electronsvg@2x.png"
                />
                <img
                  className="df9757029c64cf6adcffdeb378e6f6-icon2"
                  alt=""
                  src="/0df9757029c64cf6adcffdeb378e6f69svg@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-icon61" alt="" src="/background-410.svg" />
    </div>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
