import HorizontalBorder from "./HorizontalBorder";
import PropTypes from "prop-types";
import "./Footer3.css";

const Footer3 = ({ className = "" }) => {
  return (
    <div className={`footer3 ${className}`}>
      <HorizontalBorder
        link="/link@2x.png"
        linkAppStore1svg="/link--appstore1svg1.svg"
        linkSVG="/link--svg-4.svg"
        linkSVG1="/link--svg-5.svg"
        linkSVG2="/link--svg-6.svg"
        horizontalBorderHeight="394.4px"
        linkIconDebugCommit="unset"
        linkGooglePlay3svgDebugCommit="unset"
      />
      <div className="copyright2">
        <div className="copyright-container">
          <div className="bytesim-wrapper1">
            <div className="bytesim3">© 2024 ByteSIM </div>
          </div>
          <div className="payment">
            <div className="payment-container">
              <div className="payment-icons">
                <div className="payment-icon-rows">
                  <img
                    className="db139ae3d9347288599d26937f0372-icon4"
                    alt=""
                    src="/7db139ae3d9347288599d26937f03721svg1.svg"
                  />
                  <img
                    className="mastersvg-icon3"
                    alt=""
                    src="/mastersvg@2x.png"
                  />
                </div>
                <div className="payment-icon-rows1">
                  <img
                    className="apple-paysvg-icon3"
                    alt=""
                    src="/apple-paysvg@2x.png"
                  />
                  <img
                    className="paynowsvg-icon3"
                    alt=""
                    src="/paynowsvg1.svg"
                  />
                </div>
                <div className="payment-icon-rows2">
                  <img
                    className="e2694400ff3043e19cd888bd045333-icon3"
                    alt=""
                    src="/e2694400ff3043e19cd888bd0453336csvg1.svg"
                  />
                  <img
                    className="paypalsvg-icon3"
                    alt=""
                    src="/paypalsvg@2x.png"
                  />
                </div>
                <div className="payment-icon-rows3">
                  <img
                    className="discoversvg-icon4"
                    alt=""
                    src="/discoversvg@2x.png"
                  />
                  <img
                    className="samsung-paysvg-icon3"
                    alt=""
                    src="/samsung-paysvg@2x.png"
                  />
                </div>
                <div className="payment-icon-rows4">
                  <img
                    className="d854878c8ba246f7a7f955c624ead4-icon3"
                    alt=""
                    src="/d854878c8ba246f7a7f955c624ead478svg@2x.png"
                  />
                  <img
                    className="shopee-paysvg-icon3"
                    alt=""
                    src="/shopee-paysvg@2x.png"
                  />
                </div>
                <div className="payment-icon-rows5">
                  <img
                    className="google-paysvg-icon3"
                    alt=""
                    src="/google-paysvg@2x.png"
                  />
                  <img
                    className="dc3ccc5c01043c581393fc034132a4-icon3"
                    alt=""
                    src="/0dc3ccc5c01043c581393fc034132a46svg@2x.png"
                  />
                </div>
                <div className="currency1">
                  <div className="border4">
                    <div className="usd18">$ USD</div>
                    <div className="currency-dropdown2">
                      <img className="svg-icon32" alt="" src="/svg-41.svg" />
                    </div>
                  </div>
                  <div className="card-logos6">
                    <img
                      className="b9fac56bd43d6a869af9d6f806bd8-icon3"
                      alt=""
                      src="/198b9fac56bd43d6a869af9d6f806bd8svg@2x.png"
                    />
                    <img className="jcbsvg-icon4" alt="" src="/jcbsvg1.svg" />
                    <img
                      className="maestrosvg-icon3"
                      alt=""
                      src="/maestrosvg1.svg"
                    />
                    <img
                      className="visasvg-icon3"
                      alt=""
                      src="/visasvg@2x.png"
                    />
                    <img
                      className="visa-electronsvg-icon3"
                      alt=""
                      src="/visa-electronsvg@2x.png"
                    />
                    <img
                      className="df9757029c64cf6adcffdeb378e6f6-icon3"
                      alt=""
                      src="/0df9757029c64cf6adcffdeb378e6f69svg@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="background85">
              <img className="svg-icon33" alt="" src="/svg-11.svg" />
              <b className="rewards1">Rewards</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer3.propTypes = {
  className: PropTypes.string,
};

export default Footer3;
