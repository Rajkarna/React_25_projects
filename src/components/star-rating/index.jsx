import { FaStar } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseClick = (id) => {
    setRating(id);
  };

  const handleMouseMove = (id) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            size={40}
            onClick={() => handleMouseClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
