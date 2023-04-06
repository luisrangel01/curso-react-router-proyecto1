import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/auth";
import { DataContext } from "./Context/DataContext";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();
  const { createPost, readPost, updatePost, deletePost } =
    useContext(DataContext);

  const blogPost = readPost(slug);

  const returnToBlog = () => {
    navigate("/blog");
    // navigate(-1);
  };
  const canCreate = auth.user;

  const canUpdate =
    auth.user?.isAdmin || blogPost.author === auth.user?.username;

  const canDelete =
    auth.user?.isAdmin || blogPost.author === auth.user?.username;

  const addNewPost = () => {
    createPost({
      title: "korn",
      slug: "korn",
      content: "cool",
      author: auth.user?.username ?? "unknow",
    });
  };

  const updateCurrentPost = () => {
    updatePost({
      slug,
      title: "Korn Rocks!!!",
      updatedBy: auth.user?.username ?? "unknow",
    });
  };

  const deleteCurrentPost = () => {
    deletePost(slug);
    returnToBlog();
  };

  return (
    <>
      <h2>Blog Post</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <h3>{slug}</h3>
      <h3>{blogPost && blogPost.title}</h3>
      <p>{blogPost && blogPost.content}</p>

      {canCreate && <button onClick={addNewPost}>Agregar blogpost</button>}
      {canUpdate && (
        <button onClick={updateCurrentPost}>Actualizar blogpost</button>
      )}
      {canDelete && (
        <button onClick={deleteCurrentPost}>Eliminar blogpost</button>
      )}
    </>
  );
};

export { BlogPost };
