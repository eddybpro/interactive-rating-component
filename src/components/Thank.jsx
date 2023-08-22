import ThankImg from "../assets/illustration-thank-you.svg";
import propTypes from "prop-types";

function Thank({ starsNum }) {
  return (
    <div className="thank-container">
      <div className="img-box">
        <img src={ThankImg} alt="thank you" />
      </div>
      <div className="review-txt-box">
        <p className="review">
          You selected <span className="review-val">{starsNum}</span> out of 5
        </p>
      </div>
      <h2 className="thank-title">Thank you!</h2>
      <p className="thank-para">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
}

Thank.propTypes = {
  starsNum: propTypes.number,
};
export default Thank;
