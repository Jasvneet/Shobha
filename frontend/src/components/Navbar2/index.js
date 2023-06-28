import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import './Navbar2.css';

export default function NavBar2() {

    return (
        <div className="nav2">
            <ul className='nav2-links'>
                <li>
                    <NavLink to={`/categories/New`} className='nav2-link'>
                        New
                    </NavLink>
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
                    <NavLink to={`/categories/Skincare`} className='nav2-link'>
                        Skincare
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`/categories/Fragrance`} className='nav2-link'>
                        Fragrance
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`/categories/Body`} className='nav2-link'>
                        Bath & Body
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`/categories/Mini Size`} className='nav2-link'>
                        Mini Size
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`/categories/Hair`} className='nav2-link'>
                        Hair
                    </NavLink>
                </li>
              
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
