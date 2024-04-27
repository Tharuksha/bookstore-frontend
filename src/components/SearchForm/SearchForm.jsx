// SearchForm.jsx
import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      setSearchTerm(searchValue.trim());
      navigate("/book"); // Navigate to the book list page
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-form">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form-elem flex flex-sb bg-white">
          <input
            type="text"
            className="form-control black-text"
            placeholder="Search"
            ref={searchInputRef}
            value={searchValue}
            onChange={handleChange}
          />
          <button type="submit" className="flex flex-c">
            <FaSearch className="text-purple" size={32} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
