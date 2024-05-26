import { useMemo } from "react";
import "./SupportInfo.css";

const SupportInfo = ({
  className = "",
  link4d5c9eaa28f3485eaa5bc,
  customerSupport,
  needHelpContactUsAnytimeV,
  hourWhatsAppSupportOurHum,
  hereNoBotsJustGenuineAssi,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propDebugCommit,
  propDebugCommit1,
  propFlex1,
}) => {
  const supportInfoStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const link4d5c9eaa28f3485eaa5bc14Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const supportMessageStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const customerSupportStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div className={`support-info ${className}`} style={supportInfoStyle}>
      <div className="support-image">
        <img
          className="link-4d5c9eaa28f3485eaa5bc14"
          alt=""
          src={link4d5c9eaa28f3485eaa5bc}
          style={link4d5c9eaa28f3485eaa5bc14Style}
        />
      </div>
      <div className="support-message" style={supportMessageStyle}>
        <div className="support-contact">
          <h3 className="customer-support" style={customerSupportStyle}>
            {customerSupport}
          </h3>
        </div>
        <p className="need-help-contact-container">
          <span className="need-help-contact">{needHelpContactUsAnytimeV}</span>
          <span className="hour-whatsapp-support">
            {hourWhatsAppSupportOurHum}
          </span>
          <span className="here-no-bots">{hereNoBotsJustGenuineAssi}</span>
        </p>
      </div>
    </div>
  );
};

SupportInfo.propTypes = {
  className: PropTypes.string,
  link4d5c9eaa28f3485eaa5bc: PropTypes.string,
  customerSupport: PropTypes.string,
  needHelpContactUsAnytimeV: PropTypes.string,
  hourWhatsAppSupportOurHum: PropTypes.string,
  hereNoBotsJustGenuineAssi: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propFlex1: PropTypes.any,
};

export default SupportInfo;
