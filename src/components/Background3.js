import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./Background3.css";

const Background3 = ({
  className = "",
  backgroundFlex,
  backgroundAlignSelf,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      flex: backgroundFlex,
      alignSelf: backgroundAlignSelf,
    };
  }, [backgroundFlex, backgroundAlignSelf]);

  return (
    <header className={`background66 ${className}`} style={backgroundStyle}>
      <div className="link-logo-100xpng-container">
        <img
          className="link-logo-100xpng1"
          loading="lazy"
          alt=""
          src="/heading-1--link--logo-100xpng@2x.png"
        />
      </div>
      <div className="header-links-wrapper">
        <div className="header-links">
          <a className="link-destinations2">Destinations</a>
          <div className="svg-wrapper2">
            <img className="svg-icon24" loading="lazy" alt="" src="/svg.svg" />
          </div>
          <a className="link-support2">Support</a>
        </div>
      </div>
      <div className="background-inner28">
        <div className="about-us-content-parent">
          <div className="about-us-content">
            <img className="svg-icon25" alt="" src="/svg-1.svg" />
          </div>
          <a className="link-about2">About us</a>
        </div>
      </div>
      <div className="social-media-links-wrapper">
        <div className="social-media-links">
          <img
            className="link-svg12"
            loading="lazy"
            alt=""
            src="/link--svg1.svg"
          />
          <img className="link-svg13" alt="" src="/link--svg-11.svg" />
          <img className="svg-icon26" alt="" src="/svg-21.svg" />
        </div>
      </div>
      <div className="list-wrapper5">
        <div className="list2" />
      </div>
      <div className="language-selector-container">
        <TextField
          className="language-selector2"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" style={{ marginRight: "4.5px" }}>
                <img width="20px" height="20px" src="/languagesvg.svg" />
              </InputAdornment>
            ),
            endAdornment: <img width="10px" height="6px" src="/svg-3.svg" />,
          }}
          SelectProps={{ IconComponent: () => null }}
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "82.1px",
            height: "20px",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-root": { height: "100%" },
            "& .MuiInputBase-input": {
              color: "#fff",
              fontSize: 11.4,
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <MenuItem value={1}>English</MenuItem>
        </TextField>
      </div>
    </header>
  );
};

Background3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  backgroundFlex: PropTypes.any,
  backgroundAlignSelf: PropTypes.any,
};

export default Background3;
