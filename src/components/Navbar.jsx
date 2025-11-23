import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold hover:text-gray-300 transition-colors duration-200">
          W.Bookshelf
        </NavLink>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-gray-300 hover:text-white transition-colors duration-200'
            }
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;