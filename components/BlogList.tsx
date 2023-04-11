import React from "react";
import PostCard from "./PostCard";

const BlogList = ({ posts }) => {
  return (
    <section
      id="stories"
      className="grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center"
    >
      {posts.map((post, index) => (
        <PostCard key={index} post={post.node} />
      ))}
    </section>
  );
};

export default BlogList;
