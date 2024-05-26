import OverlayShadow from "./OverlayShadow";
import PropTypes from "prop-types";
import "./CardImage.css";

const CardImage = ({ className = "" }) => {
  return (
    <div className={`card-image3 ${className}`}>
      <div className="card-link">
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/5aa30f96aeea49c9aab43b9616e284c1-375xjpeg@2x.png"
          eSIMIndia="Singapore"
          uSD="$2.90 USD"
          propDebugCommit="unset"
          propMinWidth="83px"
          propDisplay="inline-block"
        />
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/787758472e964234bd3ff27e56f6ec4b-375xpng@2x.png"
          eSIMIndia="Mainland China eSIM"
          uSD="$2.90 USD"
          propDebugCommit="unset"
          propMinWidth="unset"
          propDisplay="unset"
        />
      </div>
      <div className="card-link1">
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/2d38359ffd2e47fdb6e6c314828c91e3-375xjpeg@2x.png"
          eSIMIndia={`Hong Kong & Macao`}
          uSD="$2.50 USD"
          propDebugCommit="unset"
          propMinWidth="unset"
          propDisplay="unset"
        />
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/0fe4685726a143d39d4f9dfbd6051060-375xjpeg@2x.png"
          eSIMIndia="United Arab Emirates"
          uSD="$2.90 USD"
          propDebugCommit="unset"
          propMinWidth="unset"
          propDisplay="unset"
        />
      </div>
      <div className="overlayshadow-group">
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/719204d61bd74403b5b2c0101ec9f685-375xjpeg@2x.png"
          eSIMIndia="Taiwan"
          uSD="$3.90 USD"
          propDebugCommit="unset"
          propMinWidth="58px"
          propDisplay="inline-block"
        />
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/92e3bc4840b54b1a9c631c234ce99180-375xjpeg@2x.png"
          eSIMIndia="Egypt"
          uSD="$2.90 USD"
          propDebugCommit="unset"
          propMinWidth="45px"
          propDisplay="inline-block"
        />
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/4b69f7e2c67e4067ba854bc2f63859a6-375xpng@2x.png"
          eSIMIndia="Turkey"
          uSD="$4.90 USD"
          propDebugCommit="unset"
          propMinWidth="53px"
          propDisplay="inline-block"
        />
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/imagename1709894105448-375xjpeg@2x.png"
          eSIMIndia="Switzerland"
          uSD="$3.90 USD"
          propDebugCommit="unset"
          propMinWidth="92px"
          propDisplay="inline-block"
        />
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/fd1f0c8f8d6e4a3fa0be4555e27b657b-375xjpeg@2x.png"
          eSIMIndia="eSIM Philippines"
          uSD="$4.20 USD"
          propDebugCommit="unset"
          propMinWidth="127.1px"
          propDisplay="inline-block"
        />
        <OverlayShadow
          f0961f86c894ba7b89fe6d4fc="/2fc7cccb96534016b5a749cb90b242bf-375xjpeg@2x.png"
          eSIMIndia="Canada"
          uSD="$5.50 USD"
          propDebugCommit="unset"
          propMinWidth="66.2px"
          propDisplay="inline-block"
        />
      </div>
    </div>
  );
};

CardImage.propTypes = {
  className: PropTypes.string,
};

export default CardImage;
