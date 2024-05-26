import "./Copyright.css";

const Copyright = ({ className = "" }) => {
  return (
    <div className={`copyright ${className}`}>
      <div className="frame-parent15">
        <div className="bytesim-wrapper">
          <div className="bytesim">© 2024 ByteSIM </div>
        </div>
        <div className="payment-logos">
          <div className="payment-methods1">
            <div className="payment-row">
              <img
                className="db139ae3d9347288599d26937f0372-icon1"
                alt=""
                src="/7db139ae3d9347288599d26937f03721svg.svg"
              />
              <img className="mastersvg-icon" alt="" src="/mastersvg@2x.png" />
            </div>
            <div className="payment-row1">
              <img
                className="apple-paysvg-icon"
                alt=""
                src="/apple-paysvg@2x.png"
              />
              <img className="paynowsvg-icon" alt="" src="/paynowsvg.svg" />
            </div>
            <div className="payment-row2">
              <img
                className="e2694400ff3043e19cd888bd045333-icon"
                alt=""
                src="/e2694400ff3043e19cd888bd0453336csvg.svg"
              />
              <img className="paypalsvg-icon" alt="" src="/paypalsvg@2x.png" />
            </div>
            <div className="payment-row3">
              <img
                className="discoversvg-icon1"
                alt=""
                src="/discoversvg@2x.png"
              />
              <img
                className="samsung-paysvg-icon"
                alt=""
                src="/samsung-paysvg@2x.png"
              />
            </div>
            <div className="payment-row4">
              <img
                className="d854878c8ba246f7a7f955c624ead4-icon"
                alt=""
                src="/d854878c8ba246f7a7f955c624ead478svg@2x.png"
              />
              <img
                className="shopee-paysvg-icon"
                alt=""
                src="/shopee-paysvg@2x.png"
              />
            </div>
            <div className="payment-row5">
              <img
                className="google-paysvg-icon"
                alt=""
                src="/google-paysvg@2x.png"
              />
              <img
                className="dc3ccc5c01043c581393fc034132a4-icon"
                alt=""
                src="/0dc3ccc5c01043c581393fc034132a46svg@2x.png"
              />
            </div>
            <div className="payment-row6">
              <img
                className="b9fac56bd43d6a869af9d6f806bd8-icon"
                alt=""
                src="/198b9fac56bd43d6a869af9d6f806bd8svg@2x.png"
              />
              <img className="visasvg-icon" alt="" src="/visasvg@2x.png" />
            </div>
            <div className="card-logos">
              <div className="card-icons7">
                <img className="jcbsvg-icon1" alt="" src="/jcbsvg.svg" />
                <img className="maestrosvg-icon" alt="" src="/maestrosvg.svg" />
              </div>
              <div className="card-icons8">
                <img
                  className="visa-electronsvg-icon"
                  alt=""
                  src="/visa-electronsvg@2x.png"
                />
                <img
                  className="df9757029c64cf6adcffdeb378e6f6-icon"
                  alt=""
                  src="/0df9757029c64cf6adcffdeb378e6f69svg@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="background65">
            <img className="svg-icon23" alt="" src="/svg-11.svg" />
            <b className="rewards">Rewards</b>
          </div>
        </div>
      </div>
    </div>
  );
};

Copyright.propTypes = {
  className: PropTypes.string,
};

export default Copyright;
