import React from "react";
import PropTypes from "prop-types";
const Rating = ({ value, text, color }) => {
  const rating = [];
  for (let i = 0; i < 5; i++) {
    if (value >= 1 + i) {
      rating.push(<i key={i} className="fas fa-star" style={{ color }}></i>);
    } else if (value >= i + 0.5) {
      rating.push(
        <i key={i} className="fas fa-star-half-alt" style={{ color }}></i>
      );
    } else {
      rating.push(<i key={i} className="far fa-star" style={{ color }}></i>);
    }
  }
  return (
    <div className="rating">
      <span className="stars">{rating}</span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};
Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
