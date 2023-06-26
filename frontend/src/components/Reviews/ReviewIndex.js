import { useSelector, useDispatch } from "react-redux"
import "./Review.css"
import ReviewIndexItem from "./ReviewIndexItem"

export default function ReviewIndex({currentUser}) {
    const reviews = useSelector((state) => Object.values(state.reviews))



    return (
        <>
          {reviews.map(review => (
            <>

          <p className="review-index-container">
            <ReviewIndexItem review={review} currentUser={currentUser}/>
          </p>
          <div className="divider"></div>
          </>
          ))}
        </>
    )
};
