"use client";

import { News } from "@/types/news"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { IoIosArrowForward } from 'react-icons/io';


const NewsItem = ({ news }: { news: News }) => {
  const { mainImage, title, metadata } = news;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top relative rounded-lg bg-white text-black p-4 pb-9 shadow-solid-8 dark:bg-secondary"
    >
      <div className="absolute left-4 top-4 z-10 bg-primary text-white uppercase">
        <div className="w-14" style={{ textAlign: "center" }}>
          <div className="p-1">
            <p className="text-3xl font-bold">09</p>
            <p className="text-xs">Jan</p>
          </div>
          <div className="bg-black p-1">
            <p className="text-xs">2026</p>
          </div>
        </div>
      </div>

      <Link href={`/news/articles`} className="relative block aspect-368/239">
        <Image src={mainImage} alt={title} fill />
      </Link>

      <div className="flex flex-col gap-5">
        <h3 className="mt-5 line-clamp-2 inline-block font-bold text-xl text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href={`/news/articles`}>
            {`${title.slice(0, 40)}...`}
          </Link>
        </h3>

        <p className="line-clamp-3">{metadata}</p>

        <div className="h-12 shrink-0 pt-4">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scaleX: 1.05 }}
            className="opacity-0 group-hover:opacity-100 flex items-center gap-3 bg-primary text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 w-fit"
          >
            <span>Read More</span>
            <IoIosArrowForward className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsItem;
