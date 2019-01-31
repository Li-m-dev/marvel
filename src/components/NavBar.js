import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>  
        </ul>
      </nav>
    ); 
}

export default NavBar;