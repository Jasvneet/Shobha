import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import './Navbar2.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchProducts } from "../../store/products";


export default function NavBar2() {
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const categories = [];
    products.forEach((product) => {
        if (!categories.includes(product.category)) {
        categories.push(product.category);
        }
    });

    return (
        <div className="nav2">
            <ul className='nav2-links'>
                <li>
                    <a className='nav2-link' href='#'>New</a>
                </li>
                <li>
                    <NavLink to={'/brands'} className='nav2-link'>
                        Brands
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/products'} className='nav2-link'>
                     Makeup
                    </NavLink>
                </li>

                {categories.map(category => (
                    <li>
                        <NavLink to={`/categories/${category}`} className='nav2-link'>
                            {category}
                        </NavLink>
                    </li>
                ))}
                {/* <li>
                    <a className='nav2-link' href='#'>Skincare</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Hair</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Fragrance</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Tools & Brushes</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Bath & Body</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Mini Size</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Gifts</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Beauty Under $20</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Sale & Offers</a>
                </li>
                <li>
                    <a className='nav2-link' href='#'>Clean Beauty</a>
                </li> */}
            </ul>
        </div>
        )
}
