import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { fetchProductsByBrand } from '../../store/products';
import ProductIndexItem from '../Products/ProductIndexItem';
import './brands.css'


function BrandShow() {
    const {brand} = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.products));

    useEffect(() => {
        dispatch(fetchProductsByBrand(brand));
    }, [dispatch, brand]);

    return (
        <div className='brand-show-wrapper'>
            <div className='brand-heading'>
                {brand}
            </div>
            <div className="brand-show-items">
                {products &&
                    Object.values(products).map((product) => (
                    <div key={product.id} className='brand-show-container'>
                        <li className='brand-show-item'>
                            <div>
                                <NavLink to={`/products/${product.id}`} className="show-link">
                                    <img src={product.photoUrl} />
                                </NavLink>
                            </div>
                            <span className='brand-index'>{product.brand}</span>
                            <NavLink to={`/products/${product.id}`} className="show-link">{product.name}</NavLink>
                            <b className='price-index'>${product.price}0</b>
                        </li>
                    
                    </div>
                    ))}
            </div>
        </div>
    );
}

export default BrandShow;