import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "./Context/auth";

const LoginPage = () => {
  const auth = useAuth();
  const { state } = useLocation();
  const [username, setUsername] = React.useState("");

  const login = (event) => {
    event.preventDefault();
    auth.login({ username, state });
  };

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export { LoginPage };
