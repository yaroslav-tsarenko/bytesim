import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background64 ${className}`}>
      <h2 className="frequently-asked-questions">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="f-a-q-container1">
        <div className="f-a-q-items1">
          <div className="f-a-q-element">
            <img className="svg-icon16" alt="" src="/svg-4.svg" />
            <div className="f-a-q-question">
              <p className="how-does-bytesim">
                How does Bytesim eSIM help me save on roaming charges?
              </p>
            </div>
          </div>
          <div className="f-a-q-expansion">
            <div className="f-a-q-explanations">
              <img className="svg-icon17" alt="" src="/svg-4.svg" />
              <img className="svg-icon18" alt="" src="/svg-4.svg" />
              <img className="svg-icon19" alt="" src="/svg-4.svg" />
              <img className="svg-icon20" alt="" src="/svg-4.svg" />
              <img className="svg-icon21" alt="" src="/svg-4.svg" />
              <img className="svg-icon22" alt="" src="/svg-4.svg" />
            </div>
            <div className="f-a-q-question-set-wrapper">
              <div className="f-a-q-question-set">
                <p className="how-fast-and">
                  How fast and easy is the connectivity with Bytesim eSIM?
                </p>
                <p className="do-i-need">
                  Do I need to submit passport or ID information for Bytesim
                  eSIM activation?
                </p>
                <div className="which-devices-are">
                  Which devices are compatible with eSIM card?
                </div>
                <div className="when-should-i">
                  When should I set up my eSIM?
                </div>
                <div className="can-i-make">
                  Can I make phone calls and send SMS with eSIM?
                </div>
                <div className="how-can-i">
                  How can I check my data balance?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Background;
