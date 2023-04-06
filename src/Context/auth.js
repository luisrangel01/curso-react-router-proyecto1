import React from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

import { users, roles } from "../blogdata";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ username, state }) => {
    const isAdmin = users.find(
      (user) => user.username === username && user.rol === roles.admin
    )
      ? true
      : false;

    setUser({ username, isAdmin });

    if (state) {
      navigate(state.prevPath);
      delete state.prevPath;
      return;
    }
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();
  const location = useLocation();
  console.log("location", location);

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
