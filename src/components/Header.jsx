import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Coffee House</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4">
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/addcoffee">Add Coffee</Link>
          </li>
          <li>
            <Link to="/">CoffeeCard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn">Profile</button>
      </div>
    </div>
  );
};

export default Header;
