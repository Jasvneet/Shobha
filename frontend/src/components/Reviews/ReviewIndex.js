import { useSelector, useDispatch } from "react-redux"
import "./Review.css"
import ReviewIndexItem from "./ReviewIndexItem"

export default function ReviewIndex() {
    const reviews = useSelector((state) => Object.values(state.reviews))



    return (
        <>
          {reviews.map(review => (
            <>

          <p className="review-index-container">
            <ReviewIndexItem review={review}/>
          </p>
          <div className="divider"></div>
          </>
          ))}
        </>
    )
};
