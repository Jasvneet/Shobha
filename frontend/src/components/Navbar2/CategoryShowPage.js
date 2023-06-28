import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchProductsByCategory, clearProducts } from '../../store/products';
import './Navbar2.css'

export default function CategoryShowPage() {
    const {category} = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.products));

    useEffect(() => {
        dispatch(clearProducts()); 
        dispatch(fetchProductsByCategory(category))
    }, [dispatch, category])

    return (
        <>
            <div className='category-show-wrapper'>
                <div className='category-show-container'>
                    <div className='category-heading'>
                        <h3>{category}</h3>
                    </div>
                    <div className="brand-show-items">
                        {products &&
                            Object.values(products).map((product) => (
                            <div key={product.id} className='brand-show-container'>
                                <li className='brand-show-item'>
                                    <div>
                                        <img src={product.photoUrl} />
                                    </div>
                                    <span className='brand-index'>{product.brand}</span>
                                    <NavLink to={`/products/${product.id}`} className="show-link">{product.name}</NavLink>
                                    <b className='price-index'>${product.price}0</b>
                                </li>
                            
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )

}