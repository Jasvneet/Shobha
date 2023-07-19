import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer(){
    return (
        <>
            <div className='footer-container'>
                <div className='about-explore-container'>
                    <div className='footer-section'>
                        <div className='divider'></div>
                        <h4>About Shobha</h4>
                        <ul className='footer-links'>
                            <a href="https://github.com/Jasvneet/Shobha/wiki" >About Shobha</a>
                            <a href="https://github.com/Jasvneet/Shobha/wiki/Feature-List">Feature List</a>
                            <a href="https://github.com/Jasvneet/Shobha/wiki/Backend-Routes">Backend Routes</a>
                            <a href="https://github.com/Jasvneet/Shobha/wiki/Frontend-Routes">Frontend Routes</a>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h4>Explore Shobha</h4>
                        <ul className='footer-links'>
                            <Link to={'/brands'}>Brands</Link>
                            <Link to={'/products'}>All Products</Link>
                            <Link to={'/categories/Makeup'}>Makeup</Link>
                            <Link to={'/categories/Foundation'}>Moisturizers</Link>
                            <Link to={'/categories/Lips'}>Lips</Link>
                            <Link to={'/categories/Sunscreen'}>Sunscreen</Link>
                        </ul>
                    </div>
                    <div className='footer-section-todo'>
                        <h4>What You Can Do Here</h4>
                        <ul className='footer-links'>
                            <li>View Beauty Products</li>
                            <li>Explore Beauty By Brand</li>
                            <li>Explore Beauty By Category</li>
                            <li>Create an Account</li>
                            <li>Add Products to Your Cart</li>
                            <li>Add Products to Your Wishlist</li>
                            <li>Locate Stores Nearby</li>
                        </ul>
                    </div>

                </div>
                <div className='connect-links-container'>
                    <h4>Connect</h4>
                    <ul className='connect-links'>
                        <li>
                        <a href='https://github.com/Jasvneet' target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30}/>
                        </a>
                        </li>
                        <li>
                        <a href='https://www.linkedin.com/in/jas-kaur-762sg1888/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        </li>

                        
                    </ul>

                </div>
            </div>
        </>
    )
}