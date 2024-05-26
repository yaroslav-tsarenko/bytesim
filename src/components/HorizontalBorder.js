import { useMemo } from "react";
import "./HorizontalBorder.css";

const HorizontalBorder = ({
  className = "",
  link,
  linkAppStore1svg,
  linkSVG,
  linkSVG1,
  linkSVG2,
  horizontalBorderHeight,
  linkIconDebugCommit,
  linkGooglePlay3svgDebugCommit,
}) => {
  const horizontalBorderStyle = useMemo(() => {
    return {
      height: horizontalBorderHeight,
    };
  }, [horizontalBorderHeight]);

  const linkIconStyle = useMemo(() => {
    return {
      debugCommit: linkIconDebugCommit,
    };
  }, [linkIconDebugCommit]);

  const linkGooglePlay3svgStyle = useMemo(() => {
    return {
      debugCommit: linkGooglePlay3svgDebugCommit,
    };
  }, [linkGooglePlay3svgDebugCommit]);

  return (
    <footer
      className={`horizontalborder6 ${className}`}
      style={horizontalBorderStyle}
    >
      <div className="footer-links">
        <div className="app-social">
          <div className="app-downloads">
            <img
              className="link-icon"
              alt=""
              src={link}
              style={linkIconStyle}
            />
            <img
              className="link-app-store-1svg"
              alt=""
              src={linkAppStore1svg}
            />
          </div>
          <div
            className="link-google-play-3svg"
            style={linkGooglePlay3svgStyle}
          >
            <div className="group">
              <img className="social-icon" alt="" src="/vector-7.svg" />
              <img className="group-icon" alt="" src="/group.svg" />
              <img className="group-icon1" alt="" src="/group-1.svg" />
            </div>
          </div>
        </div>
        <div className="destinations">
          <b className="top-destinations">TOP DESTINATIONS</b>
          <div className="item-link">USA eSIM</div>
          <div className="item-link1">Japan eSIM</div>
          <div className="item-link2">Indonesia eSIM</div>
          <div className="item-link3">India eSIM</div>
          <div className="item-link4">South Korea eSIM</div>
          <div className="item-link5">China eSIM</div>
          <div className="item-link6">Europe eSIM</div>
        </div>
        <div className="about-us-parent">
          <b className="about-us">ABOUT US</b>
          <a className="item-link7">About Us</a>
          <div className="item-link8">Contact Us</div>
          <div className="item-link9">Terms of Use</div>
          <div className="item-link10">Affiliate Partners</div>
        </div>
        <div className="support-policy-parent">
          <div className="support-policy">{`SUPPORT & POLICY`}</div>
          <div className="item-link11">Payment Methods</div>
          <a className="item-link12">Privacy Policy</a>
          <div className="item-link13">Refunds Policy</div>
          <div className="item-link14">FAQs</div>
        </div>
        <div className="learn-more-parent">
          <a className="learn-more">LEARN MORE</a>
          <a className="item-link15">Blog</a>
          <div className="item-link16">Shipping Policy</div>
          <div className="item-link17">eSIM compatible devices</div>
          <div className="item-link18">How to set up your eSIM</div>
        </div>
      </div>
      <div className="social-media">
        <img className="link-svg9" alt="" src={linkSVG} />
        <img className="link-svg10" alt="" src={linkSVG1} />
        <img className="link-svg11" alt="" src={linkSVG2} />
      </div>
    </footer>
  );
};

HorizontalBorder.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  linkAppStore1svg: PropTypes.string,
  linkSVG: PropTypes.string,
  linkSVG1: PropTypes.string,
  linkSVG2: PropTypes.string,

  /** Style props */
  horizontalBorderHeight: PropTypes.any,
  linkIconDebugCommit: PropTypes.any,
  linkGooglePlay3svgDebugCommit: PropTypes.any,
};

export default HorizontalBorder;
