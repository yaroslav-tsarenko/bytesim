import { useMemo } from "react";
import "./USACardContent.css";

const USACardContent = ({
  className = "",
  background,
  eSIMMalaysia,
  from290USD,
  background1,
  b5e0681fcd324b9882f20ddfb,
  newZealand,
  from290USD1,
  propMinWidth,
  propPadding,
  propDebugCommit,
  propHeight,
  propMinWidth1,
  propDebugCommit1,
  propMinWidth2,
  propPadding1,
  propHeight1,
  propMinWidth3,
}) => {
  const uSACardContent1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const heading33Style = useMemo(() => {
    return {
      padding: propPadding,
      debugCommit: propDebugCommit,
      height: propHeight,
    };
  }, [propPadding, propDebugCommit, propHeight]);

  const eSIMMalaysiaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const from290USD1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
      minWidth: propMinWidth2,
    };
  }, [propDebugCommit1, propMinWidth2]);

  const heading34Style = useMemo(() => {
    return {
      padding: propPadding1,
      height: propHeight1,
    };
  }, [propPadding1, propHeight1]);

  const newZealandStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div
      className={`u-s-a-card-content1 ${className}`}
      style={uSACardContent1Style}
    >
      <div className="background70">
        <div className="overlayshadow93" />
        <img className="background-icon49" alt="" src={background} />
        <div className="background-inner31">
          <div className="heading-3-parent29">
            <div className="heading-348" style={heading33Style}>
              <div className="esim-malaysia" style={eSIMMalaysiaStyle}>
                {eSIMMalaysia}
              </div>
            </div>
            <div className="from-290-usd7" style={from290USD1Style}>
              {from290USD}
            </div>
          </div>
        </div>
      </div>
      <div className="background71">
        <div className="overlayshadow94" />
        <img className="background-icon50" alt="" src={background1} />
        <div className="rectangle24" />
        <div className="rectangle25" />
        <div className="rectangle26" />
        <div className="rectangle27" />
        <div className="rectangle28" />
        <div className="rectangle29" />
        <img
          className="b5e0681fcd324b9882f20ddfb770de-icon3"
          alt=""
          src={b5e0681fcd324b9882f20ddfb}
        />
        <div className="rectangle30" />
        <div className="rectangle31" />
        <div className="background-inner32">
          <div className="heading-3-parent30">
            <div className="heading-349" style={heading34Style}>
              <div className="new-zealand" style={newZealandStyle}>
                {newZealand}
              </div>
            </div>
            <div className="from-290-usd8">{from290USD1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

USACardContent.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  eSIMMalaysia: PropTypes.string,
  from290USD: PropTypes.string,
  background1: PropTypes.string,
  b5e0681fcd324b9882f20ddfb: PropTypes.string,
  newZealand: PropTypes.string,
  from290USD1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propPadding1: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth3: PropTypes.any,
};

export default USACardContent;
