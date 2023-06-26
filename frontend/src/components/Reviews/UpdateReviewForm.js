import { updateReview, deleteReview, fetchReview } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function UpdateReview(){
    const {reviewId} = useParams();
    const review = useSelector(state => state.reviews ? state.reviews[reviewId] : null)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (reviewId) {
         
          dispatch(fetchReview(reviewId));
        }
      }, [dispatch, reviewId]);
      console.log(review);
    const [title, setTitle] = useState(review.title)
    const [body, setBody] = useState(review.body)
    const [rating, setRating] = useState(review.rating)
    
    const handleEdit = (e) => {
        e.preventDefault();
        const updatedReview = {
            id: review.id,
            title: title,
            body: body,
            rating: rating,
            product_id: review.productId,
          };
  
        dispatch(updateReview(updatedReview));
        history.push(`/products/${review.productId}`);

      };

      return (
        <form className="edit-review-form">
        <h1>Edit Review</h1>
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
        <input type="number" placeholder="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
        <button type="submit" onClick={handleEdit}>Edit</button>
        </form>
      )
}