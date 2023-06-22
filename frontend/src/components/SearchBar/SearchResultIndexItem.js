import "./SearchBar.css";
import '../Product/Product.css'

const SearchResultIndexItem = ({product}) => {
    
    return (
        <> 
           <div className='result-item'>
                <div className='results-img'>
                    <img src={product.photoUrl} />
                </div>
                <div className="result-details">
                    <span className="brand-index">{product.brand}</span>
                    <span key={product.id}>{product.name}</span>
                    <span className="price-index">${product.price}0</span>

                </div>
           </div>
        </>
    )
}

export default SearchResultIndexItem;