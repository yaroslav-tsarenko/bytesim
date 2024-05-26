import SupportInfo from "./SupportInfo";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./Background4.css";

const Background4 = ({ className = "" }) => {
  return (
    <div className={`background77 ${className}`}>
      <div className="trust-content">
        <h1 className="heading-29">Why trust us</h1>
      </div>
      <div className="trust-reasons">
        <SupportInfo
          link4d5c9eaa28f3485eaa5bc="/link--8d170b3e4a83417595c392a588a1478a-375xpng@2x.png"
          customerSupport="Competitive Price"
          needHelpContactUsAnytimeV="As a reliable network provider, With millions customers"
          hourWhatsAppSupportOurHum="per year, Bytesim is able to provide attractive offers"
          hereNoBotsJustGenuineAssi="worldwide for tourists and business travelers."
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="325px"
          propDebugCommit="unset"
          propDebugCommit1="unset"
          propFlex1="unset"
        />
        <div className="quality-reason">
          <div className="quality-description">
            <img
              className="link-f473eeb364ab4cb78ab7a13"
              alt=""
              src="/link--f473eeb364ab4cb78ab7a13f2335b076-375xpng@2x.png"
            />
          </div>
          <div className="quality-title">
            <div className="quality-heading">
              <h3 className="network-quality">Network Quality</h3>
            </div>
            <p className="as-a-licensed-container">
              <span className="as-a-licensed">
                As a licensed telecom oprerator, Bytesim delivers best
              </span>
              <span className="cellular-network-speeds">
                cellular network speeds and leads on overall network
              </span>
              <span className="quality-by-partnering">
                quality  by  partnering with the best local carriers in
              </span>
              <span className="countries">200+ countries.</span>
            </p>
          </div>
        </div>
        <FrameComponent
          linkFafdd228776e4aaeb3f15="/link--9526810b657a468f9e3a02d0cca30501-375xpng@2x.png"
          immediateDelivery="Flexible Plan Options"
          ifYoureInARushOrYoureAlre="We offer a wide variety of plans. Cellular data range"
          dontWorryAboutWaitingForD="from 300MB/Day to 50GB or even unlimited calls and"
          prepaidESIMCardImmediatel="data plans. Service time ranges from 1 day to 30 days."
          canConnectInSecondsThroug="You have more than 50 kinds of data plans to choose"
          suchAsIPhoneXRAndAndroidP="from in popular destinations."
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="322px"
          propDebugCommit="unset"
          propDebugCommit1="unset"
          propWidth="252.2px"
          propDisplay="flex"
        />
      </div>
    </div>
  );
};

Background4.propTypes = {
  className: PropTypes.string,
};

export default Background4;
