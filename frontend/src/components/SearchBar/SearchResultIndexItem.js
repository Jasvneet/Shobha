import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./SearchBar.css";
import '../Products/Product.css'

const SearchResultIndexItem = ({product}) => {
    
    return (
        <> 
           <div className='result-item'>
                <div className='results-img'>
                    <img src={product.photoUrl} />
                </div>
                <div className="result-details">
                    <span className="brand-index">{product.brand}</span>
                    <NavLink to={`/products/${product.id}`} className="show-link">{product.name}</NavLink>
                    <span className="price-index">${product.price}0</span>

                </div>
           </div>
        </>
    )
}

export default SearchResultIndexItem;