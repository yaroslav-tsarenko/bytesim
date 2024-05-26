import { useMemo } from "react";
import "./Background2.css";

const Background2 = ({
  className = "",
  background,
  b5e0681fcd324b9882f20ddfb,
  eSIMIndia,
  from590USD,
  propDebugCommit,
  propPadding,
  propHeight,
  propDebugCommit1,
  propMinWidth,
  propDebugCommit2,
}) => {
  const background1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const heading3Style = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
      debugCommit: propDebugCommit1,
    };
  }, [propPadding, propHeight, propDebugCommit1]);

  const eSIMIndia1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const from590USDStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  return (
    <div className={`background67 ${className}`} style={background1Style}>
      <div className="overlayshadow90" />
      <img className="background-icon46" alt="" src={background} />
      <div className="rectangle8" />
      <div className="rectangle9" />
      <div className="rectangle10" />
      <div className="rectangle11" />
      <div className="rectangle12" />
      <div className="rectangle13" />
      <img
        className="b5e0681fcd324b9882f20ddfb770de-icon1"
        alt=""
        src={b5e0681fcd324b9882f20ddfb}
      />
      <div className="rectangle14" />
      <div className="rectangle15" />
      <div className="asia-card-contents">
        <div className="asia-card-items-content">
          <div className="heading-345" style={heading3Style}>
            <div className="esim-india1" style={eSIMIndia1Style}>
              {eSIMIndia}
            </div>
          </div>
          <div className="from-590-usd2" style={from590USDStyle}>
            {from590USD}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Background2;
