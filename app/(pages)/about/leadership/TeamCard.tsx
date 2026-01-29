"use client"

import { motion } from 'framer-motion'
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'
import Image from 'next/image'
// import { Linkedin, Twitter } from 'lucide-react'

interface TeamMemberProps {
    name: string
    role: string
    image: string
    description: string
}

const TeamCard = ({ name, role, image, description }: TeamMemberProps) => {
    return (
        <motion.div
            className="relative group w-full max-w-sm overflow-hidden rounded-xl bg-slate-900"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* Profile Image */}
            <div className="w-full h-[400px] relative">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content Container */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                variants={{
                    rest: { y: 60 },
                    hover: { y: 0 }
                }}
                transition={{ duration: 0.4, ease: "circOut" }}
            >
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
                    <p className="text-blue-400 font-medium text-sm uppercase tracking-wider">{role}</p>
                </div>

                {/* Animated Reveal Section */}
                <motion.div
                    className="mt-4"
                    variants={{
                        rest: { opacity: 0, height: 0 },
                        hover: { opacity: 1, height: "auto" }
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {description}
                    </p>

                    <div className="flex gap-4">
                        <IoLogoLinkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
                        <IoLogoTwitter className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default TeamCard