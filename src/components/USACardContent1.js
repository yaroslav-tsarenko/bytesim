import { useMemo } from "react";
import "./USACardContent1.css";

const USACardContent1 = ({
  className = "",
  background,
  b5e0681fcd324b9882f20ddfb,
  indonesiaESIM,
  from290USD,
  background1,
  southKoreaESIM,
  from390USD,
  propMinWidth,
  propDebugCommit,
  propPadding,
  propDebugCommit1,
  propHeight,
  propMinWidth1,
  propDebugCommit2,
  propDebugCommit3,
  propPadding1,
  propHeight1,
  propDebugCommit4,
  propMinWidth2,
  propMinWidth3,
  propDebugCommit5,
}) => {
  const uSACardContentStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const background2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const heading31Style = useMemo(() => {
    return {
      padding: propPadding,
      debugCommit: propDebugCommit1,
      height: propHeight,
    };
  }, [propPadding, propDebugCommit1, propHeight]);

  const indonesiaESIMStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const from290USDStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const background3Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  const heading32Style = useMemo(() => {
    return {
      padding: propPadding1,
      height: propHeight1,
      debugCommit: propDebugCommit4,
    };
  }, [propPadding1, propHeight1, propDebugCommit4]);

  const southKoreaESIMStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const from390USDStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
      debugCommit: propDebugCommit5,
    };
  }, [propMinWidth3, propDebugCommit5]);

  return (
    <div
      className={`u-s-a-card-content ${className}`}
      style={uSACardContentStyle}
    >
      <div className="background68" style={background2Style}>
        <div className="overlayshadow91" />
        <img className="background-icon47" alt="" src={background} />
        <div className="rectangle16" />
        <div className="rectangle17" />
        <div className="rectangle18" />
        <div className="rectangle19" />
        <div className="rectangle20" />
        <div className="rectangle21" />
        <img
          className="b5e0681fcd324b9882f20ddfb770de-icon2"
          alt=""
          src={b5e0681fcd324b9882f20ddfb}
        />
        <div className="rectangle22" />
        <div className="rectangle23" />
        <div className="background-inner29">
          <div className="heading-3-parent27">
            <div className="heading-346" style={heading31Style}>
              <div className="indonesia-esim" style={indonesiaESIMStyle}>
                {indonesiaESIM}
              </div>
            </div>
            <div className="from-290-usd6" style={from290USDStyle}>
              {from290USD}
            </div>
          </div>
        </div>
      </div>
      <div className="background69" style={background3Style}>
        <div className="overlayshadow92" />
        <img className="background-icon48" alt="" src={background1} />
        <div className="background-inner30">
          <div className="heading-3-parent28">
            <div className="heading-347" style={heading32Style}>
              <div className="south-korea-esim" style={southKoreaESIMStyle}>
                {southKoreaESIM}
              </div>
            </div>
            <div className="from-390-usd1" style={from390USDStyle}>
              {from390USD}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

USACardContent1.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  b5e0681fcd324b9882f20ddfb: PropTypes.string,
  indonesiaESIM: PropTypes.string,
  from290USD: PropTypes.string,
  background1: PropTypes.string,
  southKoreaESIM: PropTypes.string,
  from390USD: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propPadding: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
  propDebugCommit3: PropTypes.any,
  propPadding1: PropTypes.any,
  propHeight1: PropTypes.any,
  propDebugCommit4: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propDebugCommit5: PropTypes.any,
};

export default USACardContent1;
