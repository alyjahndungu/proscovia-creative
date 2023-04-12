import React from "react";
import PostCard from "./PostCard";
import { Posts } from "../utils/types";

interface BlogListProps {
  posts: Posts;
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <section
      id="stories"
      className="grid lg:grid-cols-4 gap-x-7 gap-y-5 ml-6 mr-6 items-center"
    >
      {posts.map((post: { node: any }, index: React.Key | null | undefined) => (
        <PostCard key={index} post={post.node} />
      ))}
    </section>
  );
};

export default BlogList;
