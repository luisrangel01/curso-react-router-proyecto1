import React from "react";
import { useAuth } from "./Context/auth";

const ProfilePage = () => {
  const auth = useAuth();

  return (
    <>
      <h1>Profile Page</h1>
      <h2>{`Welcome, ${auth.user?.username}!!!`}</h2>
    </>
  );
};

export { ProfilePage };
