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
                    <div className='categories-items'>

                        <div className="category-links">
                            <ul>
                                <li>
                                    <NavLink to={'/categories/Foundation'} className="prod-show-link">
                                        Foundation
                                    </NavLink>
                                    <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png?imwidth=48" />
                                </li>
                                <li>
                                    <NavLink to={'/categories/Mini Size'} className="prod-show-link">
                                        Mini size
                                    </NavLink>
                                    <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_minis_us_ca_rwd_slice.png?imwidth=48" />
                                </li>
                                <li>
                                    <NavLink to={'/categories/Hair Treatments'} className="prod-show-link">
                                       Hair Treatments
                                    </NavLink>
                                    <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/healthy_scalp_guide.svg" />
                                </li>
                                <li>
                                    <NavLink to={'/categories/Clean Beauty'} className="prod-show-link">
                                        Clean
                                    </NavLink>
                                    <img src='https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_guide.svg' />
                                </li>
                                <li>
                                    <NavLink to={'/categories/Moisturizers'} className="prod-show-link">
                                        Moisturizers
                                    </NavLink>
                                    <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=48" />
                                </li>
                                <li>
                                    <NavLink to={'/categories/Perfume'} className="prod-show-link">
                                       Perfume
                                    </NavLink>
                                    <img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=48" />
                                </li>
                                <li>
                                    <NavLink to={'/categories/Sunscreen'} className="prod-show-link">
                                       Sunscreen
                                    </NavLink>
                                    <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/guide_foundations.svg"/>
                                </li>
                                <li>
                                    <NavLink to={'/categories/Scrubs & Exfoliants'} className="prod-show-link">
                                       Scrubs & Exfoliants
                                    </NavLink>
                                    <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_age.svg"/>
                                </li>

                            </ul>
                        </div>
                    <div className="brand-show-items">
                        {products &&
                            Object.values(products).map((product) => (
                            <div key={product.id} className='brand-show-container'>
                                <li className='brand-show-item'>
                                    <div>
                                    <NavLink to={`/products/${product.id}`}>
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
                </div>
            </div>
        </>
    )

}