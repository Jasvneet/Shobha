import "./Review.css"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import {FaStar, FaRegStar} from "react-icons/fa";

export default function ReviewIndexItem({review}) {
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const renderStarRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<FaStar key={i} className="star" />);
          } else {
            stars.push(<FaRegStar key={i} className="star" />);
          }
        }
    
        return stars;
      };

    return (
        <>

            <div className="review-wrapper">

                <div className="star-rating">
                    {renderStarRating(review.rating)}
                </div>

                <div className="review-details">
                    <h3>{review.title}</h3>
                    <p>{review.body}</p>
                </div>

                <div className="review-user">
                   
                </div>

            </div>
        </>
    )
}