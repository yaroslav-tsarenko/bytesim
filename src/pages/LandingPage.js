import { useCallback } from "react";
import Main from "../components/Main";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import OverlayShadow from "../components/OverlayShadow";
import CardImage from "../components/CardImage";
import Container1 from "../components/Container1";
import Background1 from "../components/Background1";
import Container from "../components/Container";
import Background from "../components/Background";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/productpage");
  }, [navigate]);

  const onLinkContainer2Click = useCallback(() => {
    navigate("/collections");
  }, [navigate]);

  return (
    <div className="landingpage">
      <Main />
      <Banner />
      <div className="product-grid">
        <div className="product-row">
          <div className="product-card">
            <div className="overlayshadow">
              <div className="link" onClick={onLinkContainerClick}>
                <img
                  className="imagename1684140246097-375xjp-icon"
                  loading="lazy"
                  alt=""
                  src="/imagename1684140246097-375xjpeg@2x.png"
                />
                <div className="card-footer">
                  <div className="usa-parent">
                    <div className="usa">USA</div>
                    <div className="usd">$3.90 USD</div>
                  </div>
                </div>
              </div>
            </div>
            <OverlayShadow
              f0961f86c894ba7b89fe6d4fc="/7f0961f86c894ba7b89fe6d4fc9f10dc-375xjpeg@2x.png"
              eSIMIndia="eSIM India"
              uSD="$5.90 USD"
            />
          </div>
          <div className="product-card1">
            <div className="card-image">
              <div className="overlayshadow1">
                <img
                  className="e67cbd94711e4435bf17b864b4dc78-icon"
                  loading="lazy"
                  alt=""
                  src="/e67cbd94711e4435bf17b864b4dc78c6-375xjpeg@2x.png"
                />
                <div className="card-footer1">
                  <div className="japan-esim-parent">
                    <div className="japan-esim">Japan eSIM</div>
                    <div className="usd1">$2.90 USD</div>
                  </div>
                </div>
              </div>
              <div className="card-image1">
                <OverlayShadow
                  f0961f86c894ba7b89fe6d4fc="/7071d054bc94408f8ba9dc7f86f2406a-375xpng@2x.png"
                  eSIMIndia="Indonesia eSIM"
                  uSD="$2.90 USD"
                  propDebugCommit="unset"
                  propMinWidth="120.2px"
                  propDisplay="inline-block"
                />
                <OverlayShadow
                  f0961f86c894ba7b89fe6d4fc="/52657d559c894b4eb7554108f94654f1-375xjpg@2x.png"
                  eSIMIndia="eSIM Malaysia"
                  uSD="$2.90 USD"
                  propDebugCommit="unset"
                  propMinWidth="113.1px"
                  propDisplay="inline-block"
                />
                <OverlayShadow
                  f0961f86c894ba7b89fe6d4fc="/15e38a27d1d34142a6d1176cd4753d66-375xjpeg@2x.png"
                  eSIMIndia="Vietnam eSIM"
                  uSD="$2.90 USD"
                  propDebugCommit="unset"
                  propMinWidth="110px"
                  propDisplay="inline-block"
                />
              </div>
            </div>
            <div className="card-image2">
              <OverlayShadow
                f0961f86c894ba7b89fe6d4fc="/f5b5c0c069254c5293fd69025ea3c38b-375xjpeg@2x.png"
                eSIMIndia="Thailand"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propMinWidth="70px"
                propDisplay="inline-block"
              />
              <div className="overlayshadow-parent">
                <OverlayShadow
                  f0961f86c894ba7b89fe6d4fc="/4c812d45a1b7456695c833b05522dc20-375xjpeg@2x.png"
                  eSIMIndia="South Korea eSIM"
                  uSD="$3.90 USD"
                  propDebugCommit="unset"
                  propMinWidth="unset"
                  propDisplay="unset"
                />
                <OverlayShadow
                  f0961f86c894ba7b89fe6d4fc="/imagename1709895537576-375xjpeg@2x.png"
                  eSIMIndia="New Zealand"
                  uSD="$2.90 USD"
                  propDebugCommit="unset"
                  propMinWidth="104.1px"
                  propDisplay="inline-block"
                />
                <OverlayShadow
                  f0961f86c894ba7b89fe6d4fc="/e5b07808ceef419d9b250624de63e081-375xjpeg@2x.png"
                  eSIMIndia="Australia"
                  uSD="$2.90 USD"
                  propDebugCommit="unset"
                  propMinWidth="71px"
                  propDisplay="inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-row1">
        <div className="product-card2">
          <CardImage />
          <div className="destinations-link-wrapper">
            <div className="link1" onClick={onLinkContainer2Click}>
              <div className="overlayshadow2">
                <div className="more-destinations">More destinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background" />
      <Container1 />
      <Background1 />
      <main className="background-parent">
        <section className="background1">
          <div className="why-byte-s-i-m-title">
            <h1 className="heading-2">Why ByteSIM?</h1>
          </div>
          <div className="byte-s-i-m-features">
            <div className="feature-container-parent">
              <div className="feature-container">
                <div className="feature-element">
                  <img
                    className="link-1-1-375xpng"
                    alt=""
                    src="/link--1-1-375xpng@2x.png"
                  />
                </div>
                <div className="unlimited-data-description">
                  <div className="unlimited-data-title">
                    <b className="unlimited-data">Unlimited Data</b>
                  </div>
                  <p className="stay-connected-without">
                    Stay connected without worrying about data limits.
                  </p>
                </div>
              </div>
              <div className="support-feature">
                <div className="support-feature-element">
                  <img
                    className="link-2-1-375xpng"
                    alt=""
                    src="/link--2-1-375xpng@2x.png"
                  />
                </div>
                <div className="support-description">
                  <div className="support-title">
                    <div className="support">24/7/365 Support</div>
                  </div>
                  <div className="guidance-from-engineers">
                    Guidance from engineers by email or whatsup.
                  </div>
                </div>
              </div>
            </div>
            <div className="price-feature">
              <div className="price-feature-container">
                <div className="price-feature-element">
                  <img
                    className="link-3-1-375xpng"
                    alt=""
                    src="/link--3-1-375xpng@2x.png"
                  />
                  <div className="price-description">
                    <div className="price-title">
                      <h3 className="competing-price">Competing Price</h3>
                      <div className="price-explanation">
                        <div className="forget-about-roaming">
                          Forget about roaming.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="keep-s-i-m-feature">
                  <div className="keep-s-i-m-container">
                    <img
                      className="link-4-sinm-2-375xpng"
                      alt=""
                      src="/link--4sinm-2-375xpng@2x.png"
                    />
                  </div>
                  <div className="keep-s-i-m-description">
                    <div className="keep-s-i-m-title">
                      <h3 className="keep-sim-card">Keep SIM Card</h3>
                    </div>
                    <p className="keep-your-primary">{`Keep your primary SlM to receive call & text.`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h2 className="heading-21">They already tried</h2>
      </main>
      <div className="testimonials-wrapper">
        <div className="testimonials">
          <Container />
          <div className="container">
            <img className="link-svg" alt="" src="/link--svg-2.svg" />
            <div className="div">{`1/2 `}</div>
            <img className="link-svg1" alt="" src="/link--svg-3.svg" />
          </div>
        </div>
      </div>
      <Background />
      <Footer />
    </div>
  );
};

export default LandingPage;
