"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "./FAQItem";
import defaultFaqData from "./faqData";
import { FAQ as FAQType } from "@/types/faq";

const FAQ = ({ faqData = defaultFaqData }: { faqData?: FAQType[] }) => {
  const [activeFaq, setActiveFaq] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"Electronics" | "Guarding" | "General" | null>(null);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  const filteredFaqs = faqData.filter((faq) => {
    const matchesSearch =
      faq.quest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.ans.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? faq.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 pt-10">
        <div className="relative mx-auto max-w-4xl px-4 md:px-8">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>

          <div className="flex flex-col items-center justify-center text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl"
            >
              {/* <span className="mb-2 block text-sm font-semibold uppercase text-primary">
                FAQs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-primary dark:text-white md:text-4xl">
                Frequently asked questions
              </h2> */}
              <p className="mb-8 text-base text-primary">
                Have questions? We're here to help.
              </p>

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
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-lg border border-stroke bg-white py-3 pl-12 pr-6 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-strokedark dark:bg-black"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${selectedCategory === null
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-strokedark dark:text-white dark:hover:bg-gray-700"
                    }`}
                  aria-pressed={selectedCategory === null}
                >
                  All FAQs
                </button>
                <button
                  onClick={() => setSelectedCategory("Electronics")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${selectedCategory === "Electronics"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-strokedark dark:text-white dark:hover:bg-gray-700"
                    }`}
                  aria-pressed={selectedCategory === "Electronics"}
                >
                  Electronics
                </button>
                <button
                  onClick={() => setSelectedCategory("Guarding")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${selectedCategory === "Guarding"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-strokedark dark:text-white dark:hover:bg-gray-700"
                    }`}
                  aria-pressed={selectedCategory === "Guarding"}
                >
                  Guarding
                </button>
                <button
                  onClick={() => setSelectedCategory("General")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${selectedCategory === "General"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-strokedark dark:text-white dark:hover:bg-gray-700"
                    }`}
                  aria-pressed={selectedCategory === "General"}
                >
                  Other
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-secondary"
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, key) => (
                <FAQItem
                  key={key}
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              ))
            ) : (
              <div className="p-8 text-center text-black dark:text-white">
                <p>No FAQs found matching your criteria.</p>
                <button
                  onClick={() => { setSearchTerm(""); setSelectedCategory(null); }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
