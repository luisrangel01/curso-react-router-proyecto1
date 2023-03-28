import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  const textColor = ({ isActive }) => {
    return { color: isActive ? "red" : "green" };
  };

  return (
    <nav>
      Menu
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}
        {/* <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" style={textColor}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" style={textColor}>
            Profile
          </NavLink>
        </li> */}
        {routes.map((route) => (
          <li key={route.to}>
            <NavLink to={route.to} style={textColor}>
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const routes = [];
routes.push({ to: "/", text: "Home" });
routes.push({ to: "/blog", text: "Blog" });
routes.push({ to: "/profile", text: "Profile" });

Menu.propTypes = {};

export { Menu };
