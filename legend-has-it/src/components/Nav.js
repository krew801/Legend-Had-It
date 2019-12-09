import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  }
  return (
    <div className="Nav">
       <nav>
           <h3>Logo</h3>
           <ul className="nav-links">
             <Link style={navStyle} to="/post">
               <li>Post</li>
               </Link>
               <Link style={navStyle} to="/search">
               <li>Search</li>
               </Link>
               <Link style={navStyle} to="/cheats">
               <li>Cheats</li>
               </Link>
           </ul>
       </nav>
    </div>
  );
}

export default Nav;
