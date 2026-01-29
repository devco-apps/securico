"use client";

import Section from '@/components/Common/Section';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';

// import { services } from "@data/services";

import {
    MdSecurity,
    MdSettingsRemote,
    MdLocalShipping,
    MdFlashOn,
    MdAssignmentTurnedIn
} from 'react-icons/md';

const services = [
    {
        id: "01",
        title: "Static Guarding",
        description: "Professional onsite physical security and canine units for 24/7 asset protection.",
        icon: <MdSecurity className="w-10 h-10" />,
    },
    {
        id: "02",
        title: "Electronic Security",
        description: "Advanced CCTV, biometrics, and remote monitoring powered by AI detection.",
        icon: <MdSettingsRemote className="w-10 h-10" />,
    },
    {
        id: "03",
        title: "Cash Management",
        description: "Armored transit and secure vaulting solutions for high-value logistics.",
        icon: <MdLocalShipping className="w-10 h-10" />,
    },
    {
        id: "04",
        title: "Rapid Response",
        description: "Immediate tactical deployment and emergency medical support at the touch of a button.",
        icon: <MdFlashOn className="w-10 h-10" />,
    },
    {
        id: "05",
        title: "Risk Consulting",
        description: "Comprehensive security audits and strategic safety frameworks for corporate clients.",
        icon: <MdAssignmentTurnedIn className="w-10 h-10" />,
    },
];

export default function Services() {
    return (
        <Section variant='wide' className="py-20 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <div
                        className="group relative bg-primary text-white p-10 border border-gray-100 transition-all duration-300 min-h-[400px] h-auto"
                    >
                        <div className="mb-16 max-w-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-orange-500 rotate-45" />
                                <span className="text-xs font-bold uppercase tracking-widest">What We Do</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-6 leading-tight">
                                Our services that we provide
                            </h2>
                            <p>
                                We provide integrated security solutions backed by over 25 years of expertise
                                and triple ISO certifications.
                            </p>
                        </div>
                    </div>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative bg-white p-10 border border-gray-100 transition-all duration-300 hover:border-orange-500 hover:z-10 min-h-[400px] h-auto flex flex-col hover:shadow-2xl"
                        >
                            {/* Vertical ID Text */}
                            <span className="absolute left-9 bottom-[10%] -rotate-90 origin-left text-gray-200 font-bold tracking-tighter text-4xl uppercase opacity-50 group-hover:text-orange-100">
                                Services - {service.id}
                            </span>

                            <div className="pl-8 flex flex-col h-full">
                                {/* Icon with Circle Background */}
                                <div className="relative w-16 h-16 flex items-center justify-center mb-8 shrink-0">
                                    <div className="absolute inset-0 bg-orange-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                                    <div className="relative text-primary">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 shrink-0">{service.title}</h3>

                                <div className="flex-grow">
                                    <p className="text-gray-500 mb-8 line-clamp-2 group-hover:line-clamp-none transition-all">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Hover Reveal Button - Positioned at bottom via flex-grow container */}
                                <div className="h-12 shrink-0">
                                    <motion.button
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ scaleX: 1.05 }}
                                        className="opacity-0 group-hover:opacity-100 flex items-center gap-3 bg-primary text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 w-fit"
                                    >
                                        {/* <span>Explore</span> */}
                                        <IoIosArrowForward className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}