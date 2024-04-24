import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
// import logoImg from "../../images/image.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);

    return(
        <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            {/* {<img src = {logoImg} alt = "site logo" />} */}
            <div className='text-uppercase font-bold'>E Book Store</div>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/About" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to = "https://login.tharuksha.com/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar