import { updateReview, deleteReview, fetchReview } from "../../store/reviews";
import StarRatingInput from "./Ratings/StarRatingInput";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function UpdateReview(){
    const {reviewId} = useParams();
    const review = useSelector(state => state.reviews ? state.reviews[reviewId] : null)
    const product = useSelector(state => state.products[review.productId]);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (reviewId) {
         
          dispatch(fetchReview(reviewId));
        }
    }, [dispatch, reviewId]);
     
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

      const onChange = (number) => {
        setRating(parseInt(number));
      };

      return (
        <>
        <div className="review-form-wrapper">
            <h1>Update Review</h1>
            <div className="divider"></div>
            <div className="review-form-container">
                <img src={product.photoUrl}/>
                <div className="product-review-info">
                    <NavLink to={`/brands/${product.brand}`} className='brand-review-form-link'>
                                {product.brand}
                    </NavLink>
                    <p>{product.name}</p>
                    <form className="review-form">
                        
                        <label className="create-review-label">
                            <h4>Headline</h4>
                            <input 
                            type="text" 
                            placeholder="headline" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            />
                        </label>
                        <div className="divider"></div>

                        <label className="create-review-label">
                            <h4>Review </h4>
                            <textarea
                            value={body}
                            onChange={e => setBody(e.currentTarget.value)}
                            />
                        </label>
                        <div className="divider"></div>
            
                        <label className="create-review-label">
                            <h4>Rate This Product </h4>
                            <StarRatingInput
                                    disabled={false}
                                    onChange={onChange}
                                    rating={rating}
                            />
                        </label>
                        <div className="divider"></div>

                        <button type="submit" onClick={handleEdit}>Update</button>
                    </form>
                </div>
            </div>
        </div>
        </>
      )
}