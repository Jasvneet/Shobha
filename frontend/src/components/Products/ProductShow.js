import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';
import ReviewIndex from '../Reviews/ReviewIndex';
import { createCartItem } from '../../store/cart_items';
import { createLove, deleteLove, fetchLoves } from '../../store/loves';
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal';
import './Product.css'


const ProductShow = () => {
    const { productId } = useParams();
    const product = useSelector(state => state.products[productId]);
    const loves = useSelector(state => state.loves)
    const currentUser = useSelector(state => state.session.user)
    const [showIngredients, setShowIngredients] = useState(false);
    const [showHow, setShowHow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLoved, setIsLoved] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const dispatch = useDispatch();
    const [updated, setUpdated] = useState(false);
// console.log(productId);
    useEffect(() => {
        // console.log('productId:', productId);
    
        if (productId){
            dispatch(fetchProduct(productId))
            dispatch(fetchLoves())
        }
    }, [productId, dispatch]);
    
    useEffect(() => {

        if (currentUser && product && product.loves) {
          const userLove = product.loves.find((love) => love.user_id === currentUser.id);
        //   console.log(userLove);

          if (userLove){
              setIsLoved(true); 

          }
        } else {
          setIsLoved(false);
        }
    //  console.log(isLoved); 
      }, [currentUser, product, dispatch]);
        
      const changeUpdated = () => {
        if (updated) {
            setUpdated(false)

        } else {
            setUpdated(true)
        }
      }

    if (product === undefined) {
        return null 
    }

    const HandleOnClick = (e) => {
        if (!currentUser){
            setShowModal(true);
            return;
        } else {
            // Redirect to the create page for reviews
            window.location.href = `/reviews/new/${productId}`;
        }
    }

    const HandleAddCartItem = (e) => {
        e.preventDefault();
        if (!currentUser){
            setShowModal(true);
            return;
        } 

        const cartItem = {
            product_id: productId,
            user_id: currentUser.id,
            quantity: 1
        };
        dispatch(createCartItem(cartItem));

        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
          }, 2000);
    }

    const HandleAddLove = async (e) => {
        e.preventDefault();
        if (!currentUser){
            setShowModal(true);
            return;
        } 

        if (!product) {
            return; 
        }
        if (isLoved) {
            
            const love = await product.loves.find(
                (love) => (love.userId === currentUser.id || love.user_id === currentUser.id) && (love.productId === product.id || love.product_id === product.id)
              );
        // console.log('love:', love);
        // console.log('product:', product);
        // debugger
                dispatch(deleteLove(love.id))
                  .then(setIsLoved(false));

                  changeUpdated();
           
              return;
     
        } else {
            if (product.loves && product.loves.some(love => love.user_id === currentUser.id)) {
              
                return;
            }
            if (!isLoved) {
                const love = {
                    product_id: productId,
                    user_id: currentUser.id
                };
                dispatch(createLove(love))
                .then(setIsLoved(true));

            }
        }
    };

    const handleLoginSuccess = () => {
        setShowModal(false); 
      };
      

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients);
    };

    const toggleHow = () => {
        setShowHow(!showHow)
    }
   
    return (
        <>
        <div className='show-page'>
           <div className='prod-sec1'>
                <div className="image-container">
                    <img src={product.photoUrl} />
                </div>
                <div className='name-price-size'>
                    <NavLink to={`/brands/${product.brand}`} className='brand'>
                                    {product.brand}
                    </NavLink>
                    <div>
                        <p className='name'>{product.name}</p>
                    </div>
                    <b className='price'><strong>${product.price}0</strong> get 25% off your Shobha order when you open and use a Shobha Credit Card today. </b>
                    <p className='size'>Size: {product.size} oz</p>
                    <div className='product-show-buttons'>
                        <button onClick={HandleAddCartItem} className='cart-button tooltip' >Add to Basket
                        {showNotification && (
                            <span className="tooltip-text">Added to the basket!</span>
                        )}
                   
                        </button>
                        {isLoved ? (
                            <button onClick={HandleAddLove} className='add-love-button' id='loved-active'>
                                <svg className="nav-icon" id='original-icon'>
                                    <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>
                                </svg>
                            </button> 
                        ) :
                            <button onClick={HandleAddLove} className='add-love-button'>
                            <svg className="nav-icon" id='original-icon'>
                                <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path>
                            </svg>
                            </button> 
                        }
                                    
                    </div>
                </div>
           </div>
           <div className='divider'/>

           <div className='section'>
                <div>
                    <h2>Highlights</h2>
                </div>

                <div>
                    <ul className='highlights-container'>
                        <li>
                            <img src='https://www.sephora.com/contentimages/highlights/vegan.svg'/>
                            <p>Vegan</p>
                        </li>
                        <li>
                            <img src='https://www.sephora.com/contentimages/highlights/community-approved.svg'/>
                            <p>Community Favorite</p>
                        </li>
                        <li>
                            <img src='https://www.sephora.com/contentimages/ppagebanners/rwd/allure-best-2020.png'/>
                            <p>allure 2020 Best of Beauty Award Winner</p>
                        </li>
                        <li>
                            <img src='https://www.sephora.com/contentimages/highlights/formulated-without.svg'/>
                            <p>Without Parabens</p>
                        </li>
                        <li>
                            <img src='https://www.sephora.com/contentimages/highlights/gluten-free.svg'/>
                            <p>Gluten Free</p>
                        </li>
                       
                    </ul>
                </div>
            </div>   

            <div className='divider'/>

            <div className='section'>
                <div className='about-heading'>
                    <h2>About the Product</h2>
                </div>
                <div className='what'>
                    <p><strong>What It Is: </strong>{product.description}</p>
                    <p><strong>Ingredient Callouts:</strong> {product.callouts}</p>
                    <p><strong>What Else You Need to Know:</strong> {product.otherInfo} </p>
                    
                </div>
            </div>

            <div className='divider'/>

            <div className="section-drop">
    
                    <button onClick={toggleIngredients} className='section-button'>
                        <h2>Ingredients</h2>
                        <div>
                            {showIngredients ? '-' : '+'}
                        </div>
                    </button>

                {showIngredients && (
                    <p>{product.ingredients}</p>
                )}
            </div>

            <div className='divider'/>

            <div className='section-drop'>

            <button onClick={toggleHow} className='section-button'>
                        <h2>How to Use</h2>
                        <div>
                            {showHow ? '-' : '+'}
                        </div>
                    </button>

                {showHow && (
                    <p><strong>Suggested Usage:</strong> {product.howToUse}</p>
                )}
            </div>

            <div className='divider'/>

            {/* <div className='similar-products'>
             <h2>You may Also Like </h2>
            </div> */}

            <div className='divider'/>
            
            <div className='reviews-show'>
                <div className='reviews-header'>
                    <h2>Ratings & Reviews</h2>
                    <button onClick={HandleOnClick} className='write-review-link'>
                        Write a Review
                    </button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                        <LoginForm closeLogin={setShowModal} onLoginSuccess={handleLoginSuccess}/>
                        </Modal>
                    )}
        
                </div>

                    <ReviewIndex currentUser={currentUser} />
            </div>

        </div>
           
        </>
    )
}

export default ProductShow;