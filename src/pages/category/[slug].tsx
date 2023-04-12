import React from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../../services";
import { Categories, BlogList, Loader } from "../../../components";
import { Posts } from "../../../utils/types";
import { GetStaticPaths, GetStaticProps } from "next";

interface CategoryPostProps {
  posts: Posts;
}

const CategoryPost: React.FC<CategoryPostProps> = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-2 lg:col-span-9">
            <BlogList posts={posts} />
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};
