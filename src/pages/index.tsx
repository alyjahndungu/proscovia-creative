import { getPosts } from "../../services";
import LandingPage from "../../components/LandingPage";
import { BlogList } from "../../components";
import { GetStaticProps } from "next";
import { Posts } from "../../utils/types";
import { FeaturedPosts } from "../../sections";

interface HomeProps {
  posts: Posts;
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <LandingPage />
      <div className="bg-gray-900">
        <h2 className="ms-3 p-4 text-3xl item-center text-white font-medium">
          Featured Articles
        </h2>
        <div className="ml-3 mt-2">
          <FeaturedPosts />
        </div>
        <h2 className="ms-3 p-4 text-3xl item-center text-white font-medium">
          Articles
        </h2>
        <BlogList posts={posts} />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
};
