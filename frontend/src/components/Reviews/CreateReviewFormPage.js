import { createReview } from "../../store/reviews"
import { fetchProduct } from "../../store/products";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
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
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (productId){

            dispatch(fetchProduct(productId))
        }
    }, [productId]);

    if (product === undefined) {
        return null 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!currentUser){
            setShowModal(true);
            return;
        }

        const newReview = {
            title: title,
            body: body,
            rating: rating,
            product_id: productId
        };
        dispatch(createReview(newReview));
   
        setTitle("");
        setBody("");
        setRating(0);

        history.push(`/products/${productId}`);
      };



    return (
        <>  
            <div className="create-review-form-wrapper">
                <h1>Rate & Review</h1>
                <div className="divider"></div>
                <div className="product-review-info-container">
                    <img src={product.photoUrl}/>
                    <div className="product-review-info">
                        <NavLink to={`/brands/${product.brand}`} className='brand-review-form-link'>
                                {product.brand}
                        </NavLink>
                        <p>{product.name}</p>
                        <form className='create-review-form' onSubmit={handleSubmit}>
                            <label className="create-review-label">Rate This Product 
                                <input 
                                type="number"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={e => setRating(e.currentTarget.value)}
                                />
                            </label>
                            <label className="create-review-label">Review
                                <textarea
                                value={body}
                                onChange={e => setBody(e.currentTarget.value)}
                                />
                            </label>
                            <label className="create-review-label">Headline
                                <input 
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.currentTarget.value)}
                                />
                            </label>



                        <button type="submit">Submit</button>
                        {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                <LoginForm closeLogin={setShowModal}/>
                                </Modal>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}