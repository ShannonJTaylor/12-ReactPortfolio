import React from 'react';
import { Link, useLocation } from 'react-router-dom';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  const getLinkClass = (path) => currentPage === path ? 'nav-link active' : 'nav-link';

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={getLinkClass('/')}>
          About Me    
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" className={getLinkClass('/portfolio')}>
        Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className={getLinkClass('/contact')}>
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/resume" className={getLinkClass('/resume')}>
          Resume         
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
