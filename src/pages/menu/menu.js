import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="Menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          {/* 
          <NavLink to="/contact">Contact</NavLink> */}
       </div>
    );
}
 
export default Navigation;