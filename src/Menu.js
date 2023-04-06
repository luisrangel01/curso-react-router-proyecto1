import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Context/auth";

const Menu = () => {
  const auth = useAuth();

  const textColor = ({ isActive }) => {
    return { color: isActive ? "red" : "green" };
  };

  return (
    <nav>
      Menu
      <ul>
        {routes.map((route) => {
          if ((route.publicOnly && auth.user) || (route.private && !auth.user))
            return null;
          // if (route.publicOnly && auth.user) return null;
          // if (route.private && !auth.user) return null;
          return (
            <li key={route.to}>
              <NavLink to={route.to} style={textColor}>
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const routes = [];

routes.push({ to: "/", text: "Home", private: false, publicOnly: false });
routes.push({ to: "/blog", text: "Blog", private: false, publicOnly: false });
routes.push({ to: "/login", text: "Login", private: false, publicOnly: true });
routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
  publicOnly: false,
});
routes.push({
  to: "/logout",
  text: "Logout",
  private: true,
  publicOnly: false,
});

Menu.propTypes = {};

export { Menu };
