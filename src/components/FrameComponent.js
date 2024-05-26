import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  linkFafdd228776e4aaeb3f15,
  immediateDelivery,
  ifYoureInARushOrYoureAlre,
  dontWorryAboutWaitingForD,
  prepaidESIMCardImmediatel,
  canConnectInSecondsThroug,
  suchAsIPhoneXRAndAndroidP,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propDebugCommit,
  propDebugCommit1,
  propWidth,
  propDisplay,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const linkFafdd228776e4aaeb3f1532Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const deliveryMessageStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const immediateDeliveryStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={`delivery-info-parent ${className}`} style={frameDivStyle}>
      <div className="delivery-info1">
        <img
          className="link-fafdd228776e4aaeb3f1532"
          alt=""
          src={linkFafdd228776e4aaeb3f15}
          style={linkFafdd228776e4aaeb3f1532Style}
        />
      </div>
      <div className="delivery-message" style={deliveryMessageStyle}>
        <div className="immediate-delivery-wrapper">
          <h3 className="immediate-delivery" style={immediateDeliveryStyle}>
            {immediateDelivery}
          </h3>
        </div>
        <p className="if-youre-in-container">
          <span className="if-youre-in">{ifYoureInARushOrYoureAlre}</span>
          <span className="dont-worry-about">{dontWorryAboutWaitingForD}</span>
          <span className="prepaid-esim-card">{prepaidESIMCardImmediatel}</span>
          <span className="can-connect-in">{canConnectInSecondsThroug}</span>
          <span className="such-as-iphone">{suchAsIPhoneXRAndAndroidP}</span>
        </p>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  linkFafdd228776e4aaeb3f15: PropTypes.string,
  immediateDelivery: PropTypes.string,
  ifYoureInARushOrYoureAlre: PropTypes.string,
  dontWorryAboutWaitingForD: PropTypes.string,
  prepaidESIMCardImmediatel: PropTypes.string,
  canConnectInSecondsThroug: PropTypes.string,
  suchAsIPhoneXRAndAndroidP: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent;
