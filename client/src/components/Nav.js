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
           <h3>Home</h3>
           <ul className="nav-links">
               <Link style={navStyle} to="/FrontPage">
               <li>Front Page</li>
               </Link>
             <Link style={navStyle} to="/post">
               <li>Post Your Path</li>
               </Link>
               <Link style={navStyle} to="/search">
               <li>Find Your Path</li>
               </Link>
               <Link style={navStyle} to="/login">
               <li>Login</li>
               </Link>
           </ul>
       </nav>
    </div>
  );
}

export default Nav;
