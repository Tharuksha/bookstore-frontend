import React from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import "./Header.css";
import Navbar from "../NavBar/Navbar.jsx";
const Headser = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Books are more than just words on a page; they're portals to new
            worlds, adventures waiting to be embarked upon, and companions for
            the soul. Welcome to our e-bookstore, where every click opens the
            door to endless possibilities.
          </p>
        </div>
      </header>
    </div>
  );
};

export default Headser;
