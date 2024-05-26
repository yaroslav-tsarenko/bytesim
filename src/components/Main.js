import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <header className={`main ${className}`}>
      <div className="background55">
        <b className="link-whatsapp3">
          📣WhatsApp 24/7: +852 9290 0577 or +852 9243 7776
        </b>
      </div>
      <div className="background56">
        <div className="logo-container">
          <img
            className="heading-1-link-logo-100x"
            loading="lazy"
            alt=""
            src="/heading-1--link--logo-100xpng@2x.png"
          />
          <div className="navigation">
            <div className="link-destinations-parent">
              <a className="link-destinations1">Destinations</a>
              <div className="nav-link-list">
                <img
                  className="svg-icon13"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <a className="link-support1">Support</a>
              <div className="nav-link-list1">
                <img
                  className="svg-icon14"
                  loading="lazy"
                  alt=""
                  src="/svg-1.svg"
                />
              </div>
              <a className="link-about1">About us</a>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-images">
            <div className="link-svg-parent">
              <img
                className="link-svg7"
                loading="lazy"
                alt=""
                src="/link--svg.svg"
              />
              <img
                className="link-svg8"
                loading="lazy"
                alt=""
                src="/link--svg-1.svg"
              />
              <img
                className="svg-icon15"
                loading="lazy"
                alt=""
                src="/svg-2.svg"
              />
            </div>
            <div className="testimonial-list">
              <div className="list1" />
            </div>
            <div className="language">
              <TextField
                className="language-selector1"
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
                  endAdornment: (
                    <img width="10px" height="6px" src="/svg-3.svg" />
                  ),
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
        </div>
      </div>
    </header>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
