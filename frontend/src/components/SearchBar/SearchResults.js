import React from 'react';
import { useSelector } from 'react-redux';
import SearchResultIndexItem from './SearchResultIndexItem';
import "./SearchBar.css";


const SearchResults = () => {
  const searchResults = useSelector((state) => Object.values(state.products));

  return (
    <>
        <div className='results-container'>
            <h1 className='search-heading'> Search Results</h1>
            <div className='search-results'>
            {searchResults.map(product => (
                <SearchResultIndexItem product={product}/>
            ))}
            </div>
        </div>
    </>
  );
};

export default SearchResults;