import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import Footer4 from "../components/Footer4";
import "./ContactUS.css";

const ContactUS = () => {
  return (
    <div className="contact-us">
      <div className="background53">
        <b className="link-whatsapp2">
          📣WhatsApp 24/7: +852 9290 0577 or +852 9243 7776
        </b>
      </div>
      <div className="background-frame">
        <header className="background54">
          <div className="link-logo-100xpng-wrapper">
            <img
              className="link-logo-100xpng"
              loading="lazy"
              alt=""
              src="/heading-1--link--logo-100xpng@2x.png"
            />
          </div>
          <div className="navigation-links-wrapper">
            <div className="navigation-links">
              <a className="link-destinations">Destinations</a>
              <div className="svg-frame">
                <img
                  className="svg-icon10"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <a className="link-support">Support</a>
            </div>
          </div>
          <div className="background-inner27">
            <div className="frame-parent9">
              <div className="svg-wrapper1">
                <img className="svg-icon11" alt="" src="/svg-1.svg" />
              </div>
              <a className="link-about">About us</a>
            </div>
          </div>
          <div className="social-links-wrapper">
            <div className="social-links">
              <img
                className="link-svg5"
                loading="lazy"
                alt=""
                src="/link--svg1.svg"
              />
              <img className="link-svg6" alt="" src="/link--svg-11.svg" />
              <img className="svg-icon12" alt="" src="/svg-21.svg" />
            </div>
          </div>
          <div className="list-wrapper1">
            <div className="list" />
          </div>
          <div className="language-selector-wrapper">
            <TextField
              className="language-selector"
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
        </header>
      </div>
      <div className="section" />
      <main className="shenzhen-r07-13f-building-19-parent">
        <p className="shenzhen-r07-13f">
          ShenZhen: R07 13/f Building 19, Zhonghaixin Innovation Industrial
          Park, Ganli Road, Longgang District
        </p>
        <p className="you-can-also-container">
          <span>{`You can also call our number: `}</span>
          <span className="span4">+86- 0755-28913350</span>
          <span>
            {" "}
            from 9:00 a.m. to 6:00 p.m. (Hong Kong Time), Monday through Friday.
          </span>
        </p>
        <div className="for-business-cooperation-container">
          <span>{`For business cooperation, `}</span>
          <b className="servicebytesimcom">service@bytesim.com</b>
        </div>
        <h1 className="contact-us1">Contact us</h1>
        <div className="name">Name</div>
        <div className="overlayshadow84" />
        <a className="email">* Email</a>
        <div className="overlayshadow85" />
        <div className="phone">Phone</div>
        <div className="overlayshadow86" />
        <div className="your-message">Your message</div>
        <section className="overlayshadow87" />
        <section className="frame-section">
          <div className="frame-parent10">
            <div className="navigation-container-parent">
              <div className="navigation-container">
                <div className="frame-parent11">
                  <div className="home-contact-links-wrapper">
                    <div className="home-contact-links">
                      <a className="link-home2">Home</a>
                      <div className="div4">/</div>
                      <a className="contact-us2">Contact Us</a>
                    </div>
                  </div>
                  <h1 className="heading-12">Contact Us</h1>
                </div>
              </div>
              <div className="bb0d8bb4c41f4a24a0468eab481ecb-parent">
                <img
                  className="bb0d8bb4c41f4a24a0468eab481ecb-icon"
                  loading="lazy"
                  alt=""
                  src="/bb0d8bb4c41f4a24a0468eab481ecb3fjpeg@2x.png"
                />
                <p className="at-bytesim-we">
                  At Bytesim we offer customer support 24 hours a day, 7 days a
                  week , so you'll be covered wherever you are.
                </p>
              </div>
              <div className="you-can-contact-us-at-parent">
                <div className="you-can-contact">You can contact us at:</div>
                <div className="email-servicebytesimcom">
                  <span>{`Email: `}</span>
                  <b className="servicebytesimcom1">service@bytesim.com</b>
                </div>
                <div className="whatsapp-parent">
                  <div className="whatsapp">WhatsApp:</div>
                  <u className="link-852">+852 9290 0577</u>
                </div>
              </div>
              <div className="strong-address-parent">
                <b className="strong-address">Address:</b>
                <div className="hong-kong1">Hong Kong:</div>
                <div className="company-name-bytesim">
                  Company Name: ByteSim Limited
                </div>
                <div className="registration-number-74790360">
                  Registration Number: 74790360
                </div>
                <p className="company-address-flatrm">
                  Company Address: FLAT/RM 2705, 27/F, China Resources Building,
                  26 Harbour Road, Wan Chai (this is not returning address)
                </p>
                <b className="strong-branch">Branch Office Address:</b>
                <div className="italy-agrate-brianza">
                  Italy: AGRATE BRIANZA (MB) VIA INDUSTRIE 86 CAP 20864
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <div className="button1">
                <div className="overlayshadow88">
                  <b className="send">Send</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer4 />
      <div className="horizontalborder4" />
    </div>
  );
};

export default ContactUS;
