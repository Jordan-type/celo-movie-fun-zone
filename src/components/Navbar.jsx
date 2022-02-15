import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar'>
      {/* <Link to="/" className="logo">
        <img src={logo} alt='' />
      </Link> */}

      <ul className='navbar__list'>
        <li className='navbar__item'>
          <Link to="/" className='navbar__link'>Home</Link>
        </li>
        <li>
          <Link to="/movies" className='navbar__link'>Movies</Link>
        </li>
        <li className='navbar__item'>
          <Link to="/tv-shows" className='navbar__link'>Tv Shows</Link>
        </li>
      </ul>
    </nav>
  );
}
