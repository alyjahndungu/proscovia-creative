import Image from "next/image";
import { Inter } from "next/font/google";
import { getPosts } from "../../services";
import PostCard from "../../components/PostCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
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
