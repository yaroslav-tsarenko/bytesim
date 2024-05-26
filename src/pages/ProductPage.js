import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Background3 from "../components/Background3";
import SupportInfo from "../components/SupportInfo";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import Background4 from "../components/Background4";
import DeviceCompatibility from "../components/DeviceCompatibility";
import RecommendationCards from "../components/RecommendationCards";
import Footer2 from "../components/Footer2";
import "./ProductPage.css";

const ProductPage = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  return (
    <div className="productpage">
      <div className="background48">
        <b className="link-whatsapp1">
          📣WhatsApp 24/7: +852 9290 0577 or +852 9243 7776
        </b>
      </div>
      <main className="frame-main">
        <Background3 backgroundFlex="unset" backgroundAlignSelf="stretch" />
        <section className="frame-wrapper">
          <div className="gradient-parent">
            <div className="gradient1" />
            <div className="frame-parent">
              <div className="container-group">
                <div className="container2">
                  <div className="container3">
                    <div className="rectangle-parent">
                      <div className="rectangle" />
                      <div className="rectangle-wrapper">
                        <div className="rectangle1" />
                      </div>
                      <img
                        className="b5e0681fcd324b9882f20ddfb770de-icon"
                        loading="lazy"
                        alt=""
                        src="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                      />
                    </div>
                    <div className="rectangle-group">
                      <div className="rectangle2" />
                      <div className="rectangle-container">
                        <div className="rectangle3" />
                        <div className="rectangle4" />
                      </div>
                    </div>
                    <div className="rectangle-parent1">
                      <div className="rectangle5" />
                      <div className="rectangle-parent2">
                        <div className="rectangle6" />
                        <div className="rectangle7" />
                      </div>
                    </div>
                    <img
                      className="container-icon"
                      alt=""
                      src="/container@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-group">
                  <div className="link-home-wrapper">
                    <div className="link-home1">Home / Local eSIMs / USA</div>
                  </div>
                  <div className="heading-1-usa-wrapper">
                    <b className="heading-11">USA</b>
                  </div>
                  <div className="excellent-parent">
                    <b className="excellent">Excellent</b>
                    <div className="link-img-wrapper">
                      <img
                        className="link-img"
                        loading="lazy"
                        alt=""
                        src="/link--img.svg"
                      />
                    </div>
                    <div className="strong-48-wrapper">
                      <div className="strong-48-container">
                        <b>4.8</b>
                        <span>/5</span>
                      </div>
                    </div>
                    <div className="link-img-container">
                      <img
                        className="link-img1"
                        alt=""
                        src="/link--img-1.svg"
                      />
                    </div>
                  </div>
                  <div className="strong-network-parent">
                    <div className="strong-container">
                      <b>{`•  Network: `}</b>
                      <span>{`T-Mobile/AT&T/Verizon`}</span>
                    </div>
                    <div className="strong-container1">
                      <span>
                        <b>•  Speed:</b>
                        <span className="span">{` `}</span>
                      </span>
                      <b className="g">5G</b>
                      <span> / 4G / LTE</span>
                    </div>
                    <div className="strong-container2">
                      <span>
                        <b>•  Tethering / Hotspot:</b>
                        <span className="span1">{` `}</span>
                      </span>
                      <span className="yes">
                        <span>Yes</span>
                      </span>
                    </div>
                  </div>
                  <div className="strong-plan-type-parent">
                    <div className="strong-container3">
                      <b>{`•  Plan Type: `}</b>
                      <span>Data Only</span>
                    </div>
                    <div className="strong-container4">
                      <b>•  Phone number:</b>
                      <span> No</span>
                    </div>
                    <p className="strong-container5">
                      <span className="data-package-500mbday50gb-h">
                        <b className="data-package">{`•  Data Package: `}</b>
                        <span>
                          500MB/Day~50GB high speed data, Unlimited 128kbps
                        </span>
                      </span>
                      <span className="afterward-also-unlimited-hig">
                        <span>{`afterward. Also, `}</span>
                        <span className="unlimited-high-speed-data">
                          <b className="unlimited">unlimited</b>
                          <span className="span2"> </span>
                          <b className="high-speed-data">high-speed data</b>
                        </span>
                        <span className="available"> available.</span>
                      </span>
                    </p>
                    <p className="strong-container6">
                      <b>{`•  Activation Policy: `}</b>
                      <span>
                        Automatic, activates when connected to a mobile network.
                      </span>
                    </p>
                    <div className="strong-container7">
                      <b>{`•  Shipping: `}</b>
                      <span>Via email.</span>
                    </div>
                    <p className="strong-container8">
                      <b>{`•  Delivery time: `}</b>
                      <span>
                        A few minutes via email after purchase, 24/7 Support.
                      </span>
                    </p>
                    <div className="ekyc-parent">
                      <b className="ekyc">•  eKYC</b>
                      <div className="frame-container">
                        <div className="identity-verification-wrapper">
                          <b className="identity-verification">
                            {" "}
                            (IDENTITY VERIFICATION)
                          </b>
                        </div>
                        <b className="user-userdomainin">{`: `}</b>
                      </div>
                      <div className="not-required">Not Required.</div>
                    </div>
                    <p className="strong-container9">
                      <span className="coverage-you-will-enjoy-a-sta">
                        <b className="coverage">{`•  Coverage: `}</b>
                        <span>
                          You will enjoy a stable and fast Internet connection
                          in U.S. cities such
                        </span>
                      </span>
                      <span className="as-new-york-los-angeles-chic">
                        <span>
                          as New York, Los Angeles, Chicago, Houston, Las Vegas,
                          Hawaii, etc.
                        </span>
                      </span>
                    </p>
                    <p className="tips-experience-unmatched-container">
                      <span>
                        <span className="tips-experience-unmatched-5g">
                          <span className="span3">•  </span>
                          <b className="tips">Tips:</b>
                          <span>
                            <span className="experience-unmatched-5g">{` Experience Unmatched 5G Signal Coverage in the USA! `}</span>
                            <span>Seamlessly Switch</span>
                          </span>
                        </span>
                        <span className="networks-among-the-big-three-c">
                          <span>
                            <span>{`Networks among the Big `}</span>
                          </span>
                          <span>
                            <b className="three">Three</b>
                          </span>
                          <span>
                            <span> Carriers</span>
                            <span>. Say Goodbye to Signal Woes and</span>
                          </span>
                        </span>
                        <span className="embrace-the-power-of-connectiv">
                          <span>
                            <span>Embrace the Power of Connectivity!</span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="usd-parent">
                    <b className="usd14">$3.90 USD</b>
                    <div className="background49">
                      <div className="frame-parent1">
                        <div className="svg-wrapper">
                          <img className="svg-icon" alt="" src="/svg-42.svg" />
                        </div>
                        <div className="summer-sale-5-off-on-500-u-parent">
                          <div className="summer-sale-5">
                            Summer Sale: 5% OFF on $5.00 USD+ purchases
                          </div>
                          <div className="discount-applied-in">
                            Discount applied in cart
                          </div>
                        </div>
                      </div>
                      <div className="link-svg-wrapper">
                        <img
                          className="link-svg2"
                          alt=""
                          src="/link--svg-21.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="overlay-wrapper">
                    <div className="overlay">
                      <div className="product-models-wrapper">
                        <b className="product-models">Product Models</b>
                      </div>
                      <TextField
                        className="border"
                        placeholder={`T-Mobile & AT&T (Immediate Delivery)`}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <img
                              width="52px"
                              height="52px"
                              src="/imagename1684140246097-76xjpeg.png"
                            />
                          ),
                        }}
                        sx={{
                          "& fieldset": { borderColor: "#29252c" },
                          "& .MuiInputBase-root": {
                            height: "60px",
                            paddingLeft: "4px",
                            borderRadius: "0px 0px 0px 0px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            paddingLeft: "6px",
                            color: "#29252c",
                          },
                        }}
                      />
                      <div className="border1">
                        <img
                          className="bb8a5b73a0554f0c9cb740706e05b0-icon"
                          alt=""
                          src="/bb8a5b73a0554f0c9cb740706e05b097-76xjpg@2x.png"
                        />
                        <div className="t-mobile-unlimited-5g-data-wrapper">
                          <div className="t-mobile-unlimited-5g">{`T-mobile, Unlimited 5G Data & Calling &SMS (24-hour Delivery)`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="data-parent">
                    <b className="data">Data</b>
                    <div className="frame-parent2">
                      <div className="container-container">
                        <div className="container4">
                          <div className="overlayshadow47" />
                          <div className="backgroundshadow">
                            <div className="mbday">500MB/Day</div>
                          </div>
                        </div>
                        <div className="container5">
                          <div className="overlayshadow48" />
                          <div className="overlayshadow49">
                            <div className="total-10gb">Total 10GB</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent3">
                        <div className="container-wrapper">
                          <div className="container6">
                            <div className="overlayshadow50" />
                            <div className="overlayshadow51">
                              <div className="gbday">1GB/Day</div>
                            </div>
                          </div>
                        </div>
                        <div className="container7">
                          <div className="overlayshadow52" />
                          <div className="overlayshadow53">
                            <div className="total-20gb">Total 20GB</div>
                          </div>
                        </div>
                      </div>
                      <div className="data-container">
                        <div className="data-values">
                          <div className="container8">
                            <div className="overlayshadow54" />
                            <div className="overlayshadow55">
                              <div className="gbday1">2GB/Day</div>
                            </div>
                          </div>
                          <div className="container9">
                            <div className="overlayshadow56" />
                            <div className="overlayshadow57">
                              <div className="gbday2">3GB/Day</div>
                            </div>
                          </div>
                          <div className="container10">
                            <div className="overlayshadow58" />
                            <div className="overlayshadow59">
                              <div className="total-3gb">Total 3GB</div>
                            </div>
                          </div>
                        </div>
                        <div className="data-container1">
                          <div className="data-values1">
                            <div className="container11">
                              <div className="overlayshadow60" />
                              <div className="overlayshadow61">
                                <div className="total-30gb">Total 30GB</div>
                              </div>
                            </div>
                            <div className="container12">
                              <div className="overlayshadow62" />
                              <div className="overlayshadow63">
                                <div className="total-50gb">Total 50GB</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container13">
                        <div className="overlayshadow64" />
                        <div className="overlayshadow65">
                          <div className="total-5gb">Total 5GB</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-details">
                <b className="service-days">Service Days</b>
                <b className="quantity">Quantity</b>
                <img className="svg-icon1" alt="" src="/svg-5.svg" />
                <img className="svg-icon2" alt="" src="/svg-6.svg" />
                <div className="overlayshadow66" />
                <div className="container-parent1">
                  <div className="container14">
                    <div className="overlayshadow67" />
                    <div className="overlayshadow68">
                      <div className="unlimited-data-5g">
                        Unlimited Data (*5G Network)
                      </div>
                    </div>
                  </div>
                  <div className="data-options">
                    <div className="container15">
                      <div className="overlayshadow69" />
                      <div className="backgroundshadow1">
                        <div className="sep">3</div>
                      </div>
                    </div>
                    <div className="container16">
                      <div className="overlayshadow70" />
                      <div className="overlayshadow71">
                        <div className="wonjala-joshi">5</div>
                      </div>
                    </div>
                    <div className="container17">
                      <div className="overlayshadow72" />
                      <div className="overlayshadow73">
                        <div className="div1">7</div>
                      </div>
                    </div>
                    <div className="container18">
                      <div className="overlayshadow74" />
                      <div className="overlayshadow75">
                        <div className="content">10</div>
                      </div>
                    </div>
                    <div className="container19">
                      <div className="overlayshadow76" />
                      <div className="overlayshadow77">
                        <div className="numa-limbu">15</div>
                      </div>
                    </div>
                    <div className="container20">
                      <div className="overlayshadow78" />
                      <div className="overlayshadow79">
                        <div className="rs">20</div>
                      </div>
                    </div>
                    <div className="container21">
                      <div className="overlayshadow80" />
                      <div className="overlayshadow81">
                        <div className="div2">30</div>
                      </div>
                    </div>
                  </div>
                  <div className="quantity-selector">
                    <div className="input-wrapper">
                      <div className="input">
                        <div className="input-placeholder">1</div>
                      </div>
                    </div>
                    <div className="button">
                      <div className="overlayshadow82">
                        <b className="add-to-cart">Add to cart</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="horizontalborder1">
                <div className="checkout-securely-with">
                  Checkout Securely with
                </div>
                <div className="payment-methods">
                  <div className="c05bf5aae2f4c7fb179a1b097e9a55-parent">
                    <img
                      className="c05bf5aae2f4c7fb179a1b097e9a55-icon"
                      alt=""
                      src="/1c05bf5aae2f4c7fb179a1b097e9a559svg@2x.png"
                    />
                    <img
                      className="e9e3a1ec63f34b81b7bf73ce83124b-icon"
                      alt=""
                      src="/e9e3a1ec63f34b81b7bf73ce83124bc9svg@2x.png"
                    />
                  </div>
                  <div className="card-icons">
                    <div className="mastercardsvg-parent">
                      <img
                        className="mastercardsvg-icon"
                        alt=""
                        src="/mastercardsvg.svg"
                      />
                      <img
                        className="d9187c94816a418af9eabf5eba4sv-icon"
                        alt=""
                        src="/13304d9187c94816a418af9eabf5eba4svg.svg"
                      />
                    </div>
                    <div className="ecea774df4abaa58c9047b420bf7b-wrapper">
                      <img
                        className="ecea774df4abaa58c9047b420bf7b-icon"
                        alt=""
                        src="/107ecea774df4abaa58c9047b420bf7bsvg.svg"
                      />
                    </div>
                  </div>
                  <div className="card-icons1">
                    <div className="card-icons-inner">
                      <div className="db139ae3d9347288599d26937f0372-parent">
                        <img
                          className="db139ae3d9347288599d26937f0372-icon"
                          alt=""
                          src="/7db139ae3d9347288599d26937f03721svg2.svg"
                        />
                        <img
                          className="jcbsvg-icon"
                          alt=""
                          src="/jcbsvg2.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="c9e8379f1e45ada0b7b3ce5e9ad4b2-icon"
                      alt=""
                      src="/97c9e8379f1e45ada0b7b3ce5e9ad4b2svg@2x.png"
                    />
                  </div>
                  <div className="card-icons2">
                    <div className="acbbe09a46424ee3bc84ec5ad6d662-parent">
                      <img
                        className="acbbe09a46424ee3bc84ec5ad6d662-icon"
                        alt=""
                        src="/acbbe09a46424ee3bc84ec5ad6d6626dsvg.svg"
                      />
                      <img
                        className="ac3a642a0a44ff989c06fed88ef216-icon"
                        alt=""
                        src="/1ac3a642a0a44ff989c06fed88ef2169svg@2x.png"
                      />
                    </div>
                    <div className="fcfbcc3b99428fb4035bea13627095-wrapper">
                      <img
                        className="fcfbcc3b99428fb4035bea13627095-icon"
                        alt=""
                        src="/13fcfbcc3b99428fb4035bea13627095svg.svg"
                      />
                    </div>
                  </div>
                  <div className="card-icons3">
                    <img
                      className="e7d522becf5d4c7cac78e85d9df864-icon"
                      alt=""
                      src="/e7d522becf5d4c7cac78e85d9df86450svg@2x.png"
                    />
                  </div>
                  <div className="card-icons4">
                    <img
                      className="discoversvg-icon"
                      alt=""
                      src="/discoversvg@2x.png"
                    />
                  </div>
                  <div className="card-icons5">
                    <img
                      className="ee3f6b789ab748f6b263e69d477efd-icon"
                      alt=""
                      src="/ee3f6b789ab748f6b263e69d477efd1dsvg.svg"
                    />
                  </div>
                  <div className="card-icons6">
                    <img
                      className="b950bc02880e48ca80960f61f96c67-icon"
                      alt=""
                      src="/b950bc02880e48ca80960f61f96c6700svg.svg"
                    />
                  </div>
                  <img
                    className="a5469a0d360044bab0b14834a5f8db-icon"
                    alt=""
                    src="/a5469a0d360044bab0b14834a5f8dbd4svg.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="delivery-info">
        <div className="stay-tuned">Stay tuned!</div>
        <h1 className="heading-22">What we’ll send you</h1>
        <div className="well-send-you">We’ll send you an email with:</div>
        <p className="item-a">
          A QR code: This code contains the eSIM USA data plan.
        </p>
        <p className="simple-instructions-to-container">
          <span className="simple-instructions-to">
            Simple instructions: To download and activate your eSIM card for
            staying connected and receiving
          </span>
          <span className="calls-seamlessly">calls seamlessly.</span>
        </p>
        <h2 className="heading-23">They already tried</h2>
        <div className="review-parent">
          <div className="review">
            <div className="background50">
              <div className="review-content">
                <div className="support-info-wrapper">
                  <SupportInfo
                    link4d5c9eaa28f3485eaa5bc="/link--4d5c9eaa28f3485eaa5bc14b530b77c5-540xgif@2x.png"
                    customerSupport="24/7 Customer Support"
                    needHelpContactUsAnytimeV="Need help? Contact us anytime via email or our 24-"
                    hourWhatsAppSupportOurHum="hour WhatsApp support. Our human team is always"
                    hereNoBotsJustGenuineAssi="here, no bots, just genuine assistance."
                  />
                </div>
                <div className="benefit-parent">
                  <div className="benefit">
                    <b className="heading-24">Advantages</b>
                  </div>
                  <FrameComponent
                    linkFafdd228776e4aaeb3f15="/link--fafdd228776e4aaeb3f1532d879b500f-375xgif@2x.png"
                    immediateDelivery="Immediate delivery"
                    ifYoureInARushOrYoureAlre="If you’re in a rush or you’re already traveling in USA,"
                    dontWorryAboutWaitingForD="don’t worry about waiting for delivery. We send the"
                    prepaidESIMCardImmediatel="prepaid eSIM card immediately to your email, so you"
                    canConnectInSecondsThroug="can connect in seconds  through compatible devices"
                    suchAsIPhoneXRAndAndroidP="such as iPhone XR and Android phones."
                  />
                </div>
              </div>
              <div className="benefit-wrapper">
                <div className="benefit1">
                  <div className="link-25f64d155931460f96d5791-wrapper">
                    <img
                      className="link-25f64d155931460f96d5791"
                      alt=""
                      src="/link--25f64d155931460f96d57914a5a59015-375xgif@2x.png"
                    />
                  </div>
                  <div className="data-message">
                    <div className="unlimited-data-plans-wrapper">
                      <h3 className="unlimited-data-plans">
                        Unlimited data plans
                      </h3>
                    </div>
                    <p className="high-speed-5glte-container">
                      <span className="high-speed-5glte">
                        High speed (5G/LTE) eSIM data plan,
                      </span>
                      <span className="unlimited-128kbps-afterward">
                        Unlimited 128kbps afterward.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="background51">
              <div className="esim-info-content">
                <div className="esim-info">
                  <div className="how-does-parent">
                    <div className="how-does">How does</div>
                    <h1 className="heading-25">USA eSIM work?</h1>
                    <p className="the-easiest-way">
                      The easiest way to get connected. Simple, Online. No
                      Retail Stores, No Inflated Prices.
                    </p>
                    <div className="compatibility-note">
                      <p className="item-make-container">
                        <span className="make-sure-your">
                          Make sure your mobile phone is compatible with eSIM
                          for USA.
                        </span>
                        <span className="buy-unlimited-esim">
                          Buy unlimited eSIM data plans that fit your USA travel
                          needs.
                        </span>
                        <span className="activate-your-mobile">
                          Activate your mobile plan using the QR code from
                          email.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="link2" onClick={onLinkContainerClick}>
                    <div className="wait-i-have">
                      Wait, I have more questions
                    </div>
                    <img className="icon" alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
              <img className="xpng-icon1" alt="" src="/11-2-540xpng@2x.png" />
            </div>
          </div>
          <div className="scan-instructions-parent">
            <div className="scan-instructions">
              <img className="xpng-icon2" alt="" src="/11-1-540xpng@2x.png" />
              <div className="background52">
                <div className="scan-title">
                  <h1 className="heading-26">Scan a QR code</h1>
                </div>
                <div className="instruction-steps">
                  <div className="step-images">
                    <img
                      className="link-1b3640b9636f43449ad4731"
                      alt=""
                      src="/link--1b3640b9636f43449ad47313dffc0b3c-540xpng@2x.png"
                    />
                    <div className="step-descriptions">
                      <div className="go-to-settings">{`1. Go to Settings > Cellular.`}</div>
                    </div>
                  </div>
                  <div className="step-images1">
                    <img
                      className="link-6b573894e70b42a49c10c6c"
                      alt=""
                      src="/link--6b573894e70b42a49c10c6cb1381388d-540xpng@2x.png"
                    />
                    <div className="tap-add-cellular-plan-wrapper">
                      <div className="tap-add-cellular">
                        2. Tap Add Cellular Plan
                      </div>
                    </div>
                  </div>
                  <div className="step-images2">
                    <img
                      className="link-3aeb567fa1544a9786d85e7"
                      alt=""
                      src="/link--3aeb567fa1544a9786d85e7e12610370-540xpng@2x.png"
                    />
                    <div className="use-your-iphone-to-scan-the-pu-wrapper">
                      <div className="use-your-iphone">
                        3. Use your iPhone to scan the purchased eSIM QR code.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-container-wrapper">
              <div className="testimonial-container">
                <div className="container22">
                  <div className="item">
                    <div className="testimonial-layout">
                      <div className="user-review">
                        <img
                          className="container-icon1"
                          alt=""
                          src="/container-11@2x.png"
                        />
                      </div>
                      <div className="list-wrapper">
                        <img className="list-icon" alt="" src="/list.svg" />
                      </div>
                      <p className="bytesimcom-provides-high-qual-container">
                        <span className="bytesimcom-provides-high-qual">
                          ByteSim.com provides high-quality connection support
                        </span>
                        <span className="for-my-europe">
                          for my europe travel. Obviously, it is cost-effective.
                        </span>
                      </p>
                    </div>
                    <div className="user-names">
                      <div className="kerry-jp">2022-11-02 Kerry 🇯🇵 JP</div>
                    </div>
                  </div>
                  <div className="item1">
                    <div className="frame-parent4">
                      <div className="container-frame">
                        <img
                          className="container-icon2"
                          alt=""
                          src="/container-21@2x.png"
                        />
                      </div>
                      <div className="list-container">
                        <img className="list-icon1" alt="" src="/list-1.svg" />
                      </div>
                      <p className="i-have-used-container">
                        <span>
                          <span className="i-have-used">
                            I have used bytesim card for four or five years. I
                            feel very
                          </span>
                          <span className="good-and-the">
                            good and the service is very good. I have
                            recommended
                          </span>
                          <span className="many-friends-i">
                            many friends. I like this conscientious boss. I hope
                            the
                          </span>
                          <span className="conscientious-boss-will">
                            conscientious boss will make a fortune.
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="lagana-martin-us-wrapper">
                      <div className="lagana-martin">
                        2022-11-08 Lagana Martin 🇺🇸 US
                      </div>
                    </div>
                  </div>
                  <div className="item2">
                    <div className="frame-parent5">
                      <div className="container-wrapper1">
                        <img
                          className="container-icon3"
                          alt=""
                          src="/container-3@2x.png"
                        />
                      </div>
                      <div className="list-frame">
                        <img className="list-icon2" alt="" src="/list-2.svg" />
                      </div>
                      <p className="i-have-done-container">
                        <span className="i-have-done">
                          I have done a lot of guides online, the softbank card
                          is
                        </span>
                        <span className="very-good-much">
                          very good, much better than docomo in japan, besides
                        </span>
                        <span className="esim-is-also">
                          eSIM is also very good, the delivery is very fast and
                          timely
                        </span>
                      </p>
                    </div>
                    <div className="hyena-kims-jp-wrapper">
                      <div className="hyena-kims">
                        2022-11-11 Hyena Kim's 🇯🇵 JP
                      </div>
                    </div>
                  </div>
                  <div className="item3" />
                  <div className="item4" />
                </div>
                <div className="container23">
                  <img className="link-svg3" alt="" src="/link--svg-2.svg" />
                  <div className="div3">{`1/2 `}</div>
                  <img className="link-svg4" alt="" src="/link--svg-3.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Background4 />
      <DeviceCompatibility />
      <h1 className="heading-344">GETTING HELP</h1>
      <div className="more-information-visit">{`More information visit `}</div>
      <u className="link-easy-installation-guide">Easy-Installation-Guide</u>
      <p className="bytesim-call-center">
        ByteSIM call center: WhatsApp : +852 9243 7776.
      </p>
      <div className="help-link">
        <div className="link3">
          <div className="overlayshadow83">
            <b className="lets-talk">Let's talk</b>
          </div>
        </div>
        <h3 className="you-may-also">You May Also Like</h3>
      </div>
      <div className="recommendation-container">
        <RecommendationCards />
        <Footer2 />
      </div>
      <div className="horizontalborder2" />
    </div>
  );
};

export default ProductPage;
