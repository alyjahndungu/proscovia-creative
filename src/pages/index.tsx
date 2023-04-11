import { getPosts } from "../../services";
import LandingPage from "../../components/LandingPage";
import Navbar from "../../components/Navbar";
import { BlogList } from "../../components";

export default function Home({ posts }) {
  return (
    <>
      <Navbar />
      <LandingPage />
      <div className="bg-gray-900">
        <h2 className="ms-14 p-4 text-3xl item-center text-white font-bold">
          Blogs
        </h2>
        <BlogList posts={posts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
