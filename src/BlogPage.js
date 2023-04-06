import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "./Context/DataContext";

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};

const BlogPage = () => {
  const { blogData } = useContext(DataContext);

  return (
    <>
      <h1>Blog Page</h1>

      <Outlet />

      <ul>
        {blogData.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
};

export { BlogPage };
