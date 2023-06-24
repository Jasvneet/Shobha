import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import './Navbar2.css';


export default function NavBar2() {

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
                <li>
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
                </li>
            </ul>
        </div>
        )
}
