import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

interface Category {
  name: string;
  slug: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8 bg-gray-900 ">
      <h3 className="text-white text-xl mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {categories.map(
        (category: Category, index: React.Key | null | undefined) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <span
              className={`cursor-pointer block ${
                index === categories.length - 1 ? "border-b-0" : "border-b"
              } pb-3 mb-3 text-white hover:text-blue-600 focus:ring-4 focus:ring-blue-300`}
            >
              {category.name}
            </span>
          </Link>
        )
      )}
    </div>
  );
};

export default Categories;
