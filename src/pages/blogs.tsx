import React from "react";
import Navbar from "../../components/Navbar";
import { BlogList } from "../../components";
import { getPosts } from "../../services";
import SearchInput from "../../components/SearchInput";

const Blogs = ({ posts }) => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <SearchInput />
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
