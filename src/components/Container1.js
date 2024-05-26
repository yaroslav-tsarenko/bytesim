import "./Container1.css";

const Container1 = ({ className = "" }) => {
  return (
    <div className={`container27 ${className}`}>
      <img className="background-icon44" alt="" src="/background@2x.png" />
      <h1 className="discover-the-convenience-container">
        <p className="discover-the-convenience">Discover the convenience</p>
        <p className="of-esims-with">of eSIMs with ByteSIM App</p>
      </h1>
      <div className="download-app-description">
        <p className="download-the-bytesim">
          Download the ByteSIM app to purchase, manage your eSIMs anytime,
          anywhere!
        </p>
      </div>
      <div className="app-store-links">
        <div className="link4">
          <div className="store-button-elements">
            <img className="app-store-icon" alt="" src="/app-store-icon.svg" />
            <img className="google-play-icon" alt="" src="/vector-1.svg" />
          </div>
          <div className="download-on-the">Download on the</div>
          <div className="platform-names">
            <div className="app-store">App Store</div>
          </div>
        </div>
        <div className="link5">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/app-store-icon.svg" />
            <img className="vector-icon1" alt="" src="/vector-3.svg" />
            <img className="vector-icon2" alt="" src="/vector-4.svg" />
            <img className="vector-icon3" alt="" src="/vector-5.svg" />
            <img className="vector-icon4" alt="" src="/vector-6.svg" />
          </div>
          <div className="getit-on">GETIT ON</div>
          <div className="google-play-wrapper">
            <div className="google-play">Google Play</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
