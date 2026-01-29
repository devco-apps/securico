'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// import Section from '../common/Section';
import Section from '@components/Common/Section'
import { IoIosArrowForward, IoIosCheckmarkCircle, IoIosLocate, IoIosMap, IoIosPin } from 'react-icons/io';
import Link from 'next/link';
const About = () => {
  return (
    <Section variant="contained" className="overflow-hidden" p="xl">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_left relative mx-auto lg:mr-0"
        >
          <div className="flex gap-6">
            <div className="aspect-[550/720]">
              <Image
                src="/images/home/about-us.webp"
                alt="About Us"
                width={550}
                height={720}
              // layout="fill"
              // className="object-cover"
              />

            </div>

            <div className="mb-2 h-[180px] w-4 bg-primary" />
          </div>

          <div className="absolute bottom-[-90px] right-0 z-10 p-4">
            <div className="rounded-xs bg-primary p-4 text-white shadow-md border-5 border-white">
              <div className="items-center">
                <div className="flex flex-col pb-6 gap-3">
                  <p className="font-semibold text-4xl">25+</p>
                  <p className="text-sm">Years of Quality Service</p>
                </div>

                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 20,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_right relative flex flex-col gap-8"
        >
          <p className='text-6xl font-bold text-primary'>Your Trusted Security Partner</p>

          <p className='text-black'>
            For over two decades, Securico has been Zimbabwe&apos;s leading security solutions provider, safeguarding businesses, homes and institutions.
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <IoIosArrowForward className='text-primary inline-block text-xl' />
              <p className="text-black">Cutting-edge Technology</p>
            </div>

            <div className="flex items-center gap-3">
              <IoIosArrowForward className='text-primary inline-block text-xl' />
              <p className="text-black">Highly Trained Personnel</p>
            </div>

            <div className="flex items-center gap-3">
              <IoIosArrowForward className='text-primary inline-block text-xl' />
              <p className="text-black">Reliable &amp; Proactive Protection 24/7</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-blacksection">
              <div className="flex flex-col gap-2 justify-start">
                <h3 className="text-lg p-0 m-0 font-semibold text-black dark:text-white">
                  Corporate
                </h3>
                <p className="text-xs text-black dark:text-white">
                  Learn about our company.
                </p>
                <Link href="#" className="text-primary hover:text-secondary text-xs">Read More</Link>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-blacksection">
              <div className="flex flex-col gap-2 justify-start">
                <h3 className="text-lg p-0 m-0 font-semibold text-black dark:text-white">
                  Leadership
                </h3>
                <p className="text-xs text-black dark:text-white">
                  The board directing the company.
                </p>
                <Link href="#" className="text-primary hover:text-secondary text-xs">Read More</Link>
              </div>
            </div>
          </div>

          <Link
            href="#"
            className="mt-10 flex w-fit items-center rounded-md bg-secondary px-5 py-3 text-white hover:bg-opacity-90"
          >
            <IoIosPin className='inline-block mr-2 text-xl' />
            <p>View our locations</p>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
