import { useState } from "react";
import './SearchBar.modules.css';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {

   const [id, setID] = useState('');

   const handleChange = (event) => {
      setID(event.target.value)
   }

   return (
      <div className="search-component">
         <div className="search-bar">
            <input type='search' value={id} onChange={handleChange} pattern=".*\S.*" required />
            <button className="search-btn" onClick={() => onSearch(id)}>
               <span>Search</span>
            </button>
         </div>
      </div>
   );
}

export default SearchBar