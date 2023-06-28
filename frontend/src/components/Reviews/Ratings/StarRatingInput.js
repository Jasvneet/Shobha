
import { useEffect, useState } from 'react';
import {FaStar, FaRegStar} from "react-icons/fa";
import './StarRating.css'

const StarRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

  useEffect(() => {
    setActiveRating(rating);
  }, [rating]);
  // NOTE: This useEffect isn't necessary to have for this scenario, but if you
  // have a scenario which requires this input to be re-rendered with an updated
  // rating prop instead of unmounted and remounted with an updated rating, then
  // this useEffect is necessary.

  const starIcon = (number) => {
    const props = {};
    if (!disabled) {
      props.onMouseEnter = () => setActiveRating(number);
      props.onMouseLeave = () => setActiveRating(rating);
      props.onClick = () => onChange(number);
    }
    return (
      <div key={number} className={activeRating >= number ? "filled" : "empty"} {...props}>
        <FaStar />
      </div>
    );
  };

  return (
    <div className="rating-input">
      {[1, 2, 3, 4, 5].map(number => starIcon(number))}
    </div>
  );
};

export default StarRatingInput;