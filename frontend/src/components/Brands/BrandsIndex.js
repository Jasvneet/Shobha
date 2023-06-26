import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import BrandsIndexItem from "./BrandsIndexItem";
import './brands.css'

export default function BrandsIndex(){
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.products))

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch ]);

    const uniqueBrands = [];

    const getUniqueBrands = () => {
      products.forEach((product) => {
        if (!uniqueBrands.includes(product.brand)) {
          uniqueBrands.push(product.brand);
        }
      });
    };
  
    getUniqueBrands();
  
  

    return (
        <>
     
        <div className="brands-container">
          {uniqueBrands.map(brand => (
            <BrandsIndexItem brand={brand}/>
        ))}
        </div>
        </>
    )

}
