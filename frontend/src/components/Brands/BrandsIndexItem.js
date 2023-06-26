import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './brands.css'

const BrandsIndexItem = ({brand}) => {


    return (
        <>
            <div className="brand-name">
                <NavLink to={`/brands/${brand}`} className='brand-show-link'>
                            {brand}
                </NavLink>
            </div>
        </>
    )
};

export default BrandsIndexItem;