import { useMemo } from "react";
import "./SetUpInstructions.css";

const SetUpInstructions = ({
  className = "",
  link7375xpng,
  check,
  makeSureYourMobilePhoneIs,
  compatibleWithESIM,
  propWidth,
  propPadding,
  propDisplay,
  propMinWidth,
  propWidth1,
}) => {
  const setUpInstructionsStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const checkStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propDisplay, propMinWidth, propWidth1]);

  return (
    <div
      className={`set-up-instructions ${className}`}
      style={setUpInstructionsStyle}
    >
      <div className="set-up-icons">
        <img className="link-7-375xpng" alt="" src={link7375xpng} />
      </div>
      <div className="set-up-explanations">
        <div className="set-up-explanation-elements">
          <b className="check" style={checkStyle}>
            {check}
          </b>
        </div>
        <p className="make-sure-your-container">
          <span className="make-sure-your1">{makeSureYourMobilePhoneIs}</span>
          <span className="compatible-with-esim">{compatibleWithESIM}</span>
        </p>
      </div>
    </div>
  );
};

SetUpInstructions.propTypes = {
  className: PropTypes.string,
  link7375xpng: PropTypes.string,
  check: PropTypes.string,
  makeSureYourMobilePhoneIs: PropTypes.string,
  compatibleWithESIM: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default SetUpInstructions;
