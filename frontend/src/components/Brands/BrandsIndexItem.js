import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const BrandsIndexItem = ({brand}) => {


    return (
        <>
            <li>
            <NavLink to={`/brands/${brand}`}>
                        {brand}
            </NavLink>
            </li>
        </>
    )
};

export default BrandsIndexItem;