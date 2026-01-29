"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NewsItem from "./NewsItem";
import NewsData from "./newsData";

const NewsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<"Trending" | "Latest" | null>(null);

  // Categories derived from data to ensure validity
  const categories = Array.from(new Set(NewsData.map((news) => news.category).filter(Boolean)));

  const filteredNews = NewsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.metadata?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? news.category === selectedCategory
      : true;

    const matchesFilter = activeFilter === "Trending"
      ? news.trending
      : true; // "Latest" is handled by sorting

    return matchesSearch && matchesCategory && matchesFilter;
  }).sort((a, b) => {
    if (activeFilter === "Latest") {
      return new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime();
    }
    return 0; // Default order
  });

  const handleFilterToggle = (filter: "Trending" | "Latest") => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

  return (
    <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
      {/* Search and Filters Section */}
      <div className="flex flex-col items-center justify-center text-center mb-10 mt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          {/* Search Bar */}
          <div className="relative mb-8 w-full">
            <div className="relative mx-auto max-w-lg">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body-color">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.7031 13.7031L17.5 17.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-white py-3 pl-12 pr-6 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-strokedark dark:bg-black"
              />
            </div>
          </div>

          {/* Special Filters (Trending / Latest) */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
             <button
              onClick={() => handleFilterToggle("Trending")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === "Trending"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-strokedark dark:text-white dark:hover:bg-gray-700"
              }`}
            >
              <span>🔥</span> Trending
            </button>
            <button
              onClick={() => handleFilterToggle("Latest")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === "Latest"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-strokedark dark:text-white dark:hover:bg-gray-700"
              }`}
            >
              <span>🆕</span> Latest
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-strokedark dark:text-white dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as string)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-strokedark dark:text-white dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* News Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
      >
        {filteredNews.length > 0 ? (
          filteredNews.map((post) => (
            <NewsItem key={post._id} news={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-lg text-black dark:text-white mb-4">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
                setActiveFilter(null);
              }}
              className="text-primary hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NewsList;
