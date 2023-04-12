import React from "react";
import { BlogList } from "../../components";
import { getPosts } from "../../services";
import { Posts } from "../../utils/types";
import { GetStaticProps } from "next";

interface BlogsProps {
  posts: Posts;
}

const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  return (
    <div className="bg-gray-900">
      <BlogList posts={posts} />
    </div>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
};
