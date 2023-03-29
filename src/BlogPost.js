import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { blogdata } from "./blogdata";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const returnToBlog = () => {
    navigate("/blog");
    // navigate(-1);
  };
  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user.username;

  return (
    <>
      <h2>Blog Post</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <h3>{slug}</h3>
      <h3>{blogpost && blogpost.title}</h3>
      <p>{blogpost && blogpost.content}</p>

      {canDelete && <button>Eliminar blogpost</button>}
    </>
  );
};

export { BlogPost };
