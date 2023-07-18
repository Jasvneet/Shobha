import { createReview } from "../../store/reviews"
import StarRatingInput from "./Ratings/StarRatingInput";
import { fetchProduct } from "../../store/products";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from 'react-router-dom';
import './Review.css'

export default function CreateReview() {
    const {productId} = useParams();
    const product = useSelector(state => state.products[productId]);
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [rating, setRating] = useState(1)
    const [errors, setErrors] = useState([]);
    const [isReviewCreated, setIsReviewCreated] = useState(false);


    useEffect(() => {
        if (productId){

            dispatch(fetchProduct(productId))
        }
    }, [productId]);

    if (product === undefined) {
        return null 
    }

    const handleError = async (res) => {
        let data;
        try {
            data = await res.json();
        } catch {
            data = await res.text();
        }
        if (data) setErrors(data);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
      
        const newReview = {
            title: title,
            body: body,
            rating: rating,
            product_id: productId
        };

        dispatch(createReview(newReview))
        .then(() => {
            setIsReviewCreated(true);
          })
        .catch(handleError);
   
        // setTitle("");
        // setBody("");
        // setRating(0);


      };

      const onChange = (number) => {
        setRating(parseInt(number));
      };

      if (isReviewCreated) {
        history.push(`/products/${productId}`);
        return null;
      }
    


    return (
        <>  
            <div className="review-form-wrapper">
                <h1>Rate & Review</h1>
                <div className="divider"></div>
                <div className="review-form-container">
                    <img src={product.photoUrl}/>
                    <div className="product-review-info">
                        <NavLink to={`/brands/${product.brand}`} className='brand-review-form-link'>
                                {product.brand}
                        </NavLink>
                        <p>{product.name}</p>
                        <form className='review-form' onSubmit={handleSubmit}>
                            <label className="create-review-label">
                                <h4>Rate This Product </h4>
                                <StarRatingInput
                                    disabled={false}
                                    onChange={onChange}
                                    rating={rating}
                                />
                            </label>
                            <div className="divider"></div>
                            <label className="create-review-label"> 
                                <h4>Review</h4>
                                <textarea
                                value={body}
                                placeholder="Example: After using this product over the past few weeks, I'm loving the results! It has helped keep my dry skin hydrated, Application is easy, and the formula is... "
                                onChange={e => setBody(e.currentTarget.value)}
                                />
                            </label>
                            <div className="divider"></div>
                            <ul className="review-errors">
                                {errors.map((error, index) => <li key={`error-${index}`}>{error}</li>)}
                            </ul>
                            <label className="create-review-label">
                                <h4>Headline</h4>
                                <input 
                                type="text"
                                placeholder="Add a headline
                                Example: Daily Go to product!"
                                value={title}
                                onChange={e => setTitle(e.currentTarget.value)}
                                />
                            </label>

                            <div className="divider"></div>

                            <button type="submit" className="review-form-button">Submit</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}