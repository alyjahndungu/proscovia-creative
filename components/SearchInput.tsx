import React from "react";

const SearchInput = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <div className="hero">
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
      </div>
    </div>
  );
};

export default SearchInput;
