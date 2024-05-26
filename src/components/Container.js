import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <div className={`container28 ${className}`}>
      <div className="item5">
        <div className="testimonial-elements">
          <div className="testimonial-content">
            <img className="container-icon4" alt="" src="/container@2x.png" />
          </div>
          <div className="list-wrapper2">
            <img className="list-icon3" alt="" src="/list.svg" />
          </div>
          <p className="bytesimcom-provides-high-qual-container1">
            <span className="bytesimcom-provides-high-qual1">
              ByteSim.com provides high-quality connection support
            </span>
            <span className="for-my-europe1">
              for my europe travel. Obviously, it is cost-effective.
            </span>
          </p>
        </div>
        <div className="testimonial-authors">
          <div className="kerry-jp1">2022-11-02 Kerry 🇯🇵 JP</div>
        </div>
      </div>
      <div className="item6">
        <div className="frame-parent13">
          <div className="container-wrapper2">
            <img className="container-icon5" alt="" src="/container-1@2x.png" />
          </div>
          <div className="list-wrapper3">
            <img className="list-icon4" alt="" src="/list-1.svg" />
          </div>
          <p className="i-have-used-container1">
            <span>
              <span className="i-have-used1">
                I have used bytesim card for four or five years. I feel very
              </span>
              <span className="good-and-the1">
                good and the service is very good. I have recommended
              </span>
              <span className="many-friends-i1">
                many friends. I like this conscientious boss. I hope the
              </span>
              <span className="conscientious-boss-will1">
                conscientious boss will make a fortune.
              </span>
            </span>
          </p>
        </div>
        <div className="lagana-martin-us-container">
          <div className="lagana-martin1">2022-11-08 Lagana Martin 🇺🇸 US</div>
        </div>
      </div>
      <div className="item7">
        <div className="frame-parent14">
          <div className="container-wrapper3">
            <img className="container-icon6" alt="" src="/container-2@2x.png" />
          </div>
          <div className="list-wrapper4">
            <img className="list-icon5" alt="" src="/list-2.svg" />
          </div>
          <p className="i-have-been-container">
            <span className="i-have-been">
              I have been buying cards in this store, the service
            </span>
            <span className="attitude-is-very">
              attitude is very good, the network of the card is good, the
            </span>
            <span className="network-speed-is">
              network speed is fast, especially it is affordable, it is much
            </span>
            <span className="cheaper-than-my">
              cheaper than my own card, and I have bought more
            </span>
            <span className="than-100-pieces">than 100 pieces.</span>
          </p>
        </div>
        <div className="roosy-bilan-ca-wrapper">
          <div className="roosy-bilan">2022-11-10 Roosy Bilan 🇨🇦 CA</div>
        </div>
      </div>
      <div className="item8" />
      <div className="item9" />
      <div className="item10" />
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
