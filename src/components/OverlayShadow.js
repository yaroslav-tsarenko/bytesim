import { useMemo } from "react";
import "./OverlayShadow.css";

const OverlayShadow = ({
  className = "",
  f0961f86c894ba7b89fe6d4fc,
  eSIMIndia,
  uSD,
  propDebugCommit,
  propMinWidth,
  propDisplay,
}) => {
  const overlayShadowStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const eSIMIndiaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div className={`overlayshadow89 ${className}`} style={overlayShadowStyle}>
      <img
        className="f0961f86c894ba7b89fe6d4fc9f10d-icon"
        alt=""
        src={f0961f86c894ba7b89fe6d4fc}
      />
      <div className="overlayshadow-inner">
        <div className="esim-india-parent">
          <div className="esim-india" style={eSIMIndiaStyle}>
            {eSIMIndia}
          </div>
          <div className="usd15">{uSD}</div>
        </div>
      </div>
    </div>
  );
};

OverlayShadow.propTypes = {
  className: PropTypes.string,
  f0961f86c894ba7b89fe6d4fc: PropTypes.string,
  eSIMIndia: PropTypes.string,
  uSD: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default OverlayShadow;
