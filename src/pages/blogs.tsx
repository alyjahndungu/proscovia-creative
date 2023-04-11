import React from "react";
import { BlogList } from "../../components";
import { getPosts } from "../../services";

const Blogs = ({ posts }) => {
  return (
    <div className="bg-gray-900">
      <BlogList posts={posts} />
    </div>
  );
};

export default Blogs;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
