import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Background2 from "./Background2";
import USACardContent1 from "./USACardContent1";
import USACardContent from "./USACardContent";
import PropTypes from "prop-types";
import "./USACard.css";

const USACard = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/productpage");
  }, [navigate]);

  return (
    <div className={`u-s-a-card ${className}`}>
      <div className="u-s-a-card-content2">
        <div className="background72">
          <div className="overlayshadow95" />
          <div className="link6" onClick={onLinkContainerClick}>
            <img
              className="background-icon51"
              loading="lazy"
              alt=""
              src="/background@2x.png"
            />
            <div className="rectangle32" />
            <div className="rectangle33" />
            <div className="rectangle34" />
            <div className="rectangle35" />
            <div className="rectangle36" />
            <div className="rectangle37" />
            <img
              className="b5e0681fcd324b9882f20ddfb770de-icon4"
              alt=""
              src="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
            />
            <div className="rectangle38" />
            <div className="rectangle39" />
            <div className="u-s-a-card-destination-content">
              <div className="u-s-a-card-destination">
                <div className="heading-350">
                  <div className="usa1">USA</div>
                </div>
                <div className="from-390-usd2">From $3.90 USD</div>
              </div>
            </div>
          </div>
        </div>
        <Background2
          background="/background-11@2x.png"
          b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
          eSIMIndia="eSIM India"
          from590USD="From $5.90 USD"
        />
      </div>
      <div className="u-s-a-card-content3">
        <div className="background73">
          <div className="overlayshadow96" />
          <img
            className="background-icon52"
            alt=""
            src="/background-2@2x.png"
          />
          <div className="asia-cards">
            <div className="asia-card-items">
              <div className="heading-351">
                <div className="japan-esim1">Japan eSIM</div>
              </div>
              <div className="from-290-usd9">From $2.90 USD</div>
            </div>
          </div>
        </div>
        <div className="background74">
          <div className="overlayshadow97" />
          <img
            className="background-icon53"
            alt=""
            src="/background-3@2x.png"
          />
          <div className="background-inner33">
            <div className="heading-3-parent31">
              <div className="heading-352">
                <div className="thailand">Thailand</div>
              </div>
              <div className="from-290-usd10">From $2.90 USD</div>
            </div>
          </div>
        </div>
      </div>
      <USACardContent1
        background="/background-4@2x.png"
        b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
        indonesiaESIM="Indonesia eSIM"
        from290USD="From $2.90 USD"
        background1="/background-5@2x.png"
        southKoreaESIM="South Korea eSIM"
        from390USD="From $3.90 USD"
      />
      <USACardContent
        background="/background-6@2x.png"
        eSIMMalaysia="eSIM Malaysia"
        from290USD="From $2.90 USD"
        background1="/background-7@2x.png"
        b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
        newZealand="New Zealand"
        from290USD1="From $2.90 USD"
      />
      <div className="u-s-a-card-content4">
        <div className="background75">
          <div className="overlayshadow98" />
          <img
            className="background-icon54"
            alt=""
            src="/background-8@2x.png"
          />
          <div className="background-inner34">
            <div className="heading-3-parent32">
              <div className="heading-353">
                <div className="vietnam-esim">Vietnam eSIM</div>
              </div>
              <div className="from-290-usd11">From $2.90 USD</div>
            </div>
          </div>
        </div>
        <div className="background76">
          <div className="overlayshadow99" />
          <img
            className="background-icon55"
            alt=""
            src="/background-9@2x.png"
          />
          <div className="background-inner35">
            <div className="heading-3-parent33">
              <div className="heading-354">
                <div className="australia">Australia</div>
              </div>
              <div className="from-290-usd12">From $2.90 USD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

USACard.propTypes = {
  className: PropTypes.string,
};

export default USACard;
