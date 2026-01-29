import React, { useRef, useEffect } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import { Award } from "@/types/award";

const SingleAward = ({ award }: { award: Award }) => {
  const { image, href, name, imageLight, id } = award;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top relative block h-40 w-full max-w-full"
      >
        <Image
          className="object-contain transition-all duration-300"
          src={image}
          alt={name}
          fill
        />
        {/* <Image
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          fill
        /> */}
      </motion.a>
    </>
  );
};

export default SingleAward;
