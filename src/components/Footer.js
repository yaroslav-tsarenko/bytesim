import HorizontalBorder from "./HorizontalBorder";
import Copyright from "./Copyright";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      <HorizontalBorder
        link="/link@2x.png"
        linkAppStore1svg="/link--appstore1svg.svg"
        linkSVG="/link--svg-4.svg"
        linkSVG1="/link--svg-5.svg"
        linkSVG2="/link--svg-6.svg"
      />
      <Copyright />
      <img className="background-icon45" alt="" src="/background-1.svg" />
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
