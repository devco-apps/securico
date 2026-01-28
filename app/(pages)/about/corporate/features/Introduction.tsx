'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { IoIosArrowForward, IoIosPin } from 'react-icons/io';

import Section from '@components/Common/Section'
import Button from '@/components/Buttons/Button';

const values: string[] = [
    'Customer Focus',
    'Integrity',
    'Team Work',
    'Reliability',
    'Openness',
    'Equal Opportunity',
    'Recognition',
    'Social Responsibility',
]

const Introduction = () => {
    return (
        <Section variant="contained" className="overflow-hidden" p="xl">
            <div className="grid items-center gap-8 lg:grid-cols-2">
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
                    className="animate_right relative flex flex-col gap-5"
                >
                    <p className='text-4xl font-bold text-primary'>Your Strategic Security Ally</p>

                    <p className='text-black'>
                        At Securico, we transcend the traditional client-vendor relationship to become a seamless extension of your team. Our corporate philosophy is built on the belief that true partnership is the cornerstone of effective security. With decades of accumulated experience and a deep understanding of diverse economic sectors, we deliver not just services, but bespoke security solutions. Our proficiency in navigating complex security challenges allows us to provide outstanding, customized strategies that protect your assets, people and reputation.
                    </p>

                    <p className='text-black font-bold'>Our Core Values</p>

                    <div className="flex flex-col gap-2">
                        {values.map((item, i) => (
                            <div className="flex items-center gap-3" key={i}>
                                <IoIosArrowForward className='text-primary inline-block text-xl' />
                                <p className="text-black">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
                        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-blacksection">
                            <div className="flex flex-col gap-2 justify-start">
                                <h3 className="text-lg p-0 m-0 font-semibold text-black dark:text-white">
                                    Leadership
                                </h3>
                                <p className="text-xs text-black dark:text-white">
                                    The board directing the company.
                                </p>
                                <Link href="/about/leadership" className="text-primary hover:text-secondary text-xs">Read More</Link>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-blacksection">
                            <div className="flex flex-col gap-2 justify-start">
                                <h3 className="text-lg p-0 m-0 font-semibold text-black dark:text-white">
                                    Locations
                                </h3>
                                <p className="text-xs text-black dark:text-white">
                                    Our branches across the Zimbabwe.
                                </p>
                                <Link href="/locations" className="text-primary hover:text-secondary text-xs">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <Button text="View our SHEQ Policy" className='w-fit' />
                </motion.div>

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
                        <div className="mb-2 h-[180px] w-4 bg-primary" />

                        <div className="aspect-[550/720]">
                            <Image
                                src="/images/home/about-us.webp"
                                alt="About Us"
                                width={550}
                                height={720}
                            />
                        </div>
                    </div>
                </motion.div>


            </div>
        </Section>
    );
};

export default Introduction;
