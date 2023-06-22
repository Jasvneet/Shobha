import { useSelector } from "react-redux";
import { useState } from "react";
import "./SearchBar.css";
import { useEffect } from "react";
import { fetchSearchResults } from "../../store/products";
import { useDispatch } from "react-redux";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => Object.values(state.products));

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(fetchSearchResults(searchTerm));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <h1>{searchResults.map(product => product.name)}</h1>
     
    </div>
  );
};

export default SearchBar;







