import React from "react";
import Image from "next/image";

import { graphCMSImageLoader } from "../utils/util";

const Author = ({ author }) => (
  <div className="text-left overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:align-middle">
    <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
      <div className="grid grid-cols-1">
        <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
          <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
            <Image
              unoptimized
              loader={graphCMSImageLoader}
              src={author.avatar.url}
              alt={author.name}
              className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
              width={0}
              height={0}
            />
            <p className="mt-9 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
              {author.name}
            </p>
            <p className="mt-3 text-base leading-relaxed text-center text-gray-200">
              {author.about}
            </p>
            <div className="w-full mt-6">
              <a
                className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
                    font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform
                    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Author;
