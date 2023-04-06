import React, { useEffect, useState } from "react";

import { useAuth } from "./Context/auth";
import { useParams, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { slug } = useParams();

  const [user, setUser] = useState(auth.user ?? {});

  useEffect(() => {
    let redirectToLogin = false;
    if (slug) {
      redirectToLogin = !auth.existsUser(slug);
    } else if (!auth.user) {
      redirectToLogin = true;
    }
    if (redirectToLogin) {
      navigate("/login");
      return;
    } else {
      setUser(auth.user ?? auth.getPublicData(slug));
    }
  }, []);

  return (
    <>
      <h1>Profile Page</h1>
      <h2>{`Welcome, ${user.username}!!!`}</h2>
      <h3>{`Name: ${user.name}`}</h3>
      {auth.user && <h3>{`Rol: ${user.rol?.type}`}</h3>}
      {auth.user && <h3>{`Is Admin: ${user.isAdmin}`}</h3>}
    </>
  );
};

export { ProfilePage };
