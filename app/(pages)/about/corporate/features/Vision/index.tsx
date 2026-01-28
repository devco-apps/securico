"use client";

import Section from '@/components/Common/Section';
import { motion } from 'framer-motion';
import { IoIosArrowForward, IoMdTrophy } from 'react-icons/io';

// import { services } from "@data/services";

import {
    MdSecurity,
    MdSettingsRemote,
    MdLocalShipping,
    MdFlashOn,
    MdAssignmentTurnedIn
} from 'react-icons/md';

const data = [
    {
        id: "01",
        title: "Vision",
        description: "To be the world class market leader in the provision of professional security solutions in order to satisfy our internal and external clients.",
        icon: <MdSecurity className="w-10 h-10" />,
    },
    {
        id: "02",
        title: "Mission",
        description: "To provide superior, innovative and professional security solutions to acceptable standards and to maintain a reputation of dependability. Honesty and friendliness using modern management concepts.",
        icon: <IoMdTrophy className="w-10 h-10" />,
    }
];

export default function Vision() {
    return (
        <Section variant='wide' className="py-20 bg-gray-100 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <div
                        className="group relative bg-primary text-white p-10 border border-gray-100 transition-all duration-300 h-[400px]"
                    >
                        <div className="mb-16 max-w-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-orange-500 rotate-45" />
                                <span className="text-xs font-bold uppercase tracking-widest">Our Vision</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-6 leading-tight">
                                A Customer-Centric Future
                            </h2>

                            <p>To be the most trusted partner for businesses in the digital age, empowering their sustainable growth by delivering professional security services that ensure their success and peace of mind.</p>
                        </div>
                    </div>
                    {data.map(({ id, icon, title, description }) => (
                        <div
                            key={id}
                            className="group relative bg-white p-10 border border-gray-100 transition-all duration-300 hover:border-orange-500 hover:z-10 h-[400px] flex flex-col hover:shadow-2xl"
                        >
                            {/* Vertical ID Text */}
                            <span className="absolute left-9 bottom-[17%] -rotate-90 origin-left text-gray-200 font-bold tracking-tighter text-4xl uppercase opacity-50 group-hover:text-orange-100">
                                Strategic
                            </span>

                            <div className="pl-8 flex flex-col h-full">
                                {/* Icon with Circle Background */}
                                <div className="relative w-16 h-16 flex items-center justify-center mb-8 shrink-0">
                                    <div className="absolute inset-0 bg-orange-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                                    <div className="relative text-primary">
                                        {icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 shrink-0">{title}</h3>

                                <div className="flex-grow">
                                    <p className="text-gray-500 mb-8 line-clamp-none transition-all">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}