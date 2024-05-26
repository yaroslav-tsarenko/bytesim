import "./DeviceCompatibility.css";

const DeviceCompatibility = ({ className = "" }) => {
  return (
    <div className={`device-compatibility ${className}`}>
      <div className="background78">
        <div className="compatibility-title">
          <h2 className="heading-355">
            Compatible Devices for USA Travel eSIM
          </h2>
        </div>
        <div className="you-may-check-the-list-of-comp-wrapper">
          <p className="you-may-check">
            You May Check the List of Compatible Devices for eSIM for Travel to
            USA
          </p>
        </div>
        <div className="horizontalborder7">
          <div className="platform-names1">
            <b className="apple">Apple</b>
          </div>
          <img className="border-icon" alt="" src="/border.svg" />
        </div>
        <div className="horizontalborder8">
          <div className="android-wrapper">
            <b className="android">Android</b>
          </div>
          <img className="border-icon1" alt="" src="/border.svg" />
        </div>
      </div>
      <img
        className="link-getting-help-1-5-1512x"
        alt=""
        src="/link--gettinghelp15-1512xpng@2x.png"
      />
    </div>
  );
};

DeviceCompatibility.propTypes = {
  className: PropTypes.string,
};

export default DeviceCompatibility;
