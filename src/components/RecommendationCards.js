import "./RecommendationCards.css";

const RecommendationCards = ({ className = "" }) => {
  return (
    <div className={`recommendation-cards ${className}`}>
      <div className="container29">
        <div className="background79">
          <div className="overlayshadow100" />
          <img className="background-icon57" alt="" src="/background@2x.png" />
          <div className="card-details">
            <div className="heading-3-parent34">
              <div className="heading-356">
                <div className="europe-unlimited-data">
                  Europe Unlimited Data (39 Countries) Lite
                </div>
              </div>
              <div className="from-390-usd3">From $3.90 USD</div>
            </div>
          </div>
        </div>
        <div className="background80">
          <div className="overlayshadow101" />
          <img
            className="background-icon58"
            alt=""
            src="/background-110@2x.png"
          />
          <div className="background-inner36">
            <div className="heading-3-parent35">
              <div className="heading-357">
                <div className="chile">Chile</div>
              </div>
              <div className="from-700-usd">From $7.00 USD</div>
            </div>
          </div>
        </div>
        <div className="background81">
          <div className="overlayshadow102" />
          <img
            className="background-icon59"
            alt=""
            src="/background-210@2x.png"
          />
          <div className="background-inner37">
            <div className="heading-3-parent36">
              <div className="heading-358">
                <div className="global-86-countries">Global (86 Countries)</div>
              </div>
              <div className="from-1890-usd">From $18.90 USD</div>
            </div>
          </div>
        </div>
        <div className="background82">
          <div className="overlayshadow103" />
          <img
            className="background-icon60"
            alt=""
            src="/background-310@2x.png"
          />
          <div className="background-inner38">
            <div className="heading-3-parent37">
              <div className="heading-359">
                <div className="saudi-arabia">Saudi Arabia</div>
              </div>
              <div className="from-700-usd1">From $7.00 USD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecommendationCards.propTypes = {
  className: PropTypes.string,
};

export default RecommendationCards;
