import "./Banner.css";

const Banner = ({ className = "" }) => {
  return (
    <div className={`banner ${className}`}>
      <div className="container24">
        <div className="background57" />
        <div className="background58">
          <div className="hero-image">
            <img
              className="d1ba02bf4282845e8299a17005cf-1-icon"
              loading="lazy"
              alt=""
              src="/6745d1ba02bf4282845e8299a17005cf-1920xjpeg@2x.png"
            />
            <div className="background59" />
          </div>
          <div className="main-heading-parent">
            <div className="main-heading">
              <div className="stay-connected-while-container">
                <p className="stay-connected-while">Stay Connected While</p>
                <p className="traveling-the-world">Traveling the World</p>
              </div>
            </div>
            <p className="best-local-container">
              <span className="best-local">{`Best Local & Travel eSIMs Worldwide. ByteSIM offers eSIMs with global data packages in 200+ countries, and avoid expensive phone`}</span>
              <span className="bills-stay-connected">
                bills, Stay connected anywhere, anytime.
              </span>
            </p>
          </div>
          <div className="button-container">
            <div className="container-parent2">
              <div className="container25">
                <div className="background60" />
              </div>
              <div className="container26">
                <div className="background61" />
                <div className="background62" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-header-wrapper">
        <div className="product-header">
          <div className="product-title">
            <h2 className="heading-28">Local eSlMs</h2>
            <div className="horizontalborder5" />
          </div>
          <h2 className="item-heading">Regional eSlMs</h2>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
