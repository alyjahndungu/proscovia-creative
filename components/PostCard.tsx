import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { graphCMSImageLoader } from "../utils/util";

const PostCard = ({ post }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-blue-100 shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
          <Image
            unoptimized
            loader={graphCMSImageLoader}
            alt={post.title}
            className="rounded-t-lg lg:rounded-lg"
            src={post.featuredImage.url}
            width={400}
            height={200}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 cursor-pointer hover:text-blue-700">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h5>
          </a>
          <div className="flex items-center space-x-5">
            <div className="font-light text-gray-600">
              <span className="align-start">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <p className="font-normal text-gray-700 mb-4 mt-6">{post.excerpt}</p>

          <div className="flex items-center justify-between mt-5">
            <a
              className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              <Link href={`/post/${post.slug}`}>Read more</Link>
            </a>
            <div>
              <a href="#" className="flex items-center">
                <img
                  src={post.author.avatar.url}
                  alt={post.author.name}
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                />
                <h1 className="font-semibold text-sm text-gray-700 hover:underline">
                  {post.author.name}
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
