import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="background83">
        <b className="link-whatsapp4">
          📣WhatsApp 24/7: +852 9290 0577 or +852 9243 7776
        </b>
      </div>
      <div className="background84">
        <div className="logo-container1">
          <img
            className="link-logo-100xpng2"
            loading="lazy"
            alt=""
            src="/heading-1--link--logo-100xpng@2x.png"
          />
        </div>
        <div className="navigation1">
          <div className="navigation-links1">
            <a className="link-destinations3">Destinations</a>
            <div className="language-dropdown">
              <img className="svg-icon29" alt="" src="/svg.svg" />
            </div>
            <a className="link-support3">Support</a>
          </div>
        </div>
        <div className="about-us-container-wrapper">
          <div className="about-us-container">
            <div className="about-us-icon-container">
              <img className="svg-icon30" alt="" src="/svg-1.svg" />
            </div>
            <a className="link-about3">About us</a>
          </div>
        </div>
        <div className="social-media-icons-wrapper">
          <div className="social-media-icons">
            <img
              className="link-svg14"
              loading="lazy"
              alt=""
              src="/link--svg1.svg"
            />
            <img className="link-svg15" alt="" src="/link--svg-11.svg" />
            <img className="svg-icon31" alt="" src="/svg-21.svg" />
          </div>
        </div>
        <div className="announcement-list">
          <div className="list3" />
        </div>
        <div className="help-container-wrapper">
          <TextField
            className="help-container"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginRight: "4.5px" }}
                >
                  <img width="20px" height="20px" src="/languagesvg.svg" />
                </InputAdornment>
              ),
              endAdornment: <img width="10px" height="6px" src="/svg-10.svg" />,
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
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
