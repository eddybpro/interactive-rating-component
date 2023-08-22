import Thank from "./Thank";
import Star from "../assets/icon-star.svg";
import { useState } from "react";

function Review() {
  const [selected, setSelected] = useState(false);
  const [review, setReview] = useState(false);
  const [num, setNum] = useState(1);

  const setStars = (n) => {
    setNum(n);
  };

  return (
    <main>
      {(!review || (review && !selected)) && (
        <div className="review-container">
          <div className="stars-container">
            {[...Array(num).keys()].map((_, i) => (
              <div className="star-box" key={i}>
                <img src={Star} alt="star" className="star" />
              </div>
            ))}
          </div>
          <h2 className="title">How did we do?</h2>
          <p className="para">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="btns-container">
            <button
              className="btn"
              onClick={() => {
                setStars(1);
                setSelected(true);
              }}
            >
              1
            </button>
            <button
              className="btn"
              onClick={() => {
                setStars(2);
                setSelected(true);
              }}
            >
              2
            </button>
            <button
              className="btn"
              onClick={() => {
                setStars(3);
                setSelected(true);
              }}
            >
              3
            </button>
            <button
              className="btn"
              onClick={() => {
                setStars(4);
                setSelected(true);
              }}
            >
              4
            </button>
            <button
              className="btn"
              onClick={() => {
                setStars(5);
                setSelected(true);
              }}
            >
              5
            </button>
          </div>
          <button
            className="submit-btn"
            onClick={() => setReview((review) => !review)}
          >
            submit
          </button>
        </div>
      )}
      {review && selected && <Thank starsNum={num} />}
    </main>
  );
}
export default Review;
