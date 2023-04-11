import Image from "next/image";
import { Inter } from "next/font/google";
import { getPosts } from "../../services";
import PostCard from "../../components/PostCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="hero">
          <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
            <h1 className=" font-bold text-3xl text-gray-900">
              Welcome to Proscovia Creative
            </h1>
            <p className=" font-base text-base text-gray-600">
              Realtime and trusted blogs, catch the latest news and trends here
            </p>
          </div>

          <div className="box pt-6">
            <div className="box-wrapper">
              <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                <button className="outline-none focus:outline-none">
                  <svg
                    className=" w-5 text-gray-600 h-5 cursor-pointer"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="search blogs"
                  x-model="q"
                  className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          <section
            id="stories"
            className="my-6 grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center"
          >
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
