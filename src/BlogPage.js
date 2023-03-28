import React from "react";
import { Link } from "react-router-dom";
import { blogdata } from "./blogdata";

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};

const BlogPage = () => {
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {blogdata.map((post) => (
          <BlogLink post={post} />
        ))}
      </ul>
    </>
  );
};

export { BlogPage };
