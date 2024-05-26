import SetUpInstructions from "./SetUpInstructions";
import PropTypes from "prop-types";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <div className={`background63 ${className}`}>
      <SetUpInstructions
        link7375xpng="/link---7-375xpng@2x.png"
        check="Check"
        makeSureYourMobilePhoneIs="Make sure your mobile phone is"
        compatibleWithESIM="compatible with eSIM."
      />
      <SetUpInstructions
        link7375xpng="/link---8-375xpng@2x.png"
        check="Buy"
        makeSureYourMobilePhoneIs="Choose your destination and"
        compatibleWithESIM="select your data plan."
        propWidth="246.5px"
        propPadding="0px 14px 0px 0px"
        propDisplay="flex"
        propMinWidth="46.2px"
        propWidth1="46.2px"
      />
      <div className="set-up-instructions1">
        <div className="link-9-375xpng-wrapper">
          <img
            className="link-9-375xpng"
            alt=""
            src="/link---9-375xpng@2x.png"
          />
        </div>
        <div className="frame-parent12">
          <div className="install-the-qr-wrapper">
            <h3 className="install-the-qr">Install the QR</h3>
          </div>
          <div className="activate-your-plan-container">
            <p className="activate-your-plan">Activate your plan using the</p>
            <p className="qr-code-from">QR code from email.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Background1;
