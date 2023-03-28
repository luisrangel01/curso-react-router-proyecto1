import React from "react";
import { useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

const BlogPost = () => {
  const { slug } = useParams();
  const blogpost = blogdata.find((post) => post.slug === slug);

  return (
    <>
      <h2>Blog Post</h2>
      <h3>{slug}</h3>
      <h3>{blogpost && blogpost.title}</h3>
      <p>{blogpost && blogpost.content}</p>
    </>
  );
};

export { BlogPost };
