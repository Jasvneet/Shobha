import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Footer(){
    return (
        <>
            <div className='footer-container'>
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
                        <Link to={'/products'}>Makeup</Link>
                        <Link to={'/brands'}>Brands</Link>
                    </ul>
                </div>
                <div className='footer-section'>

                </div>
                <div className='footer-section'>

                </div>
                <div className='footer-section'>

                </div>
            </div>
        </>
    )
}