import { ReactNode } from "react";

import { motion } from "framer-motion";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoXing, IoLogoYoutube } from "react-icons/io";

import Heading from "./Heading";

export interface Link {
    path: string
    label: string
    icon?: ReactNode
}

const usefulLinks1: Link[] = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Services",
        path: "/services",
    },
    {
        label: "Locations",
        path: "/locations",
    },
    {
        label: "FAQs",
        path: "/faqs",
    },
    {
        label: "News & Updates",
        path: "/news",
    },
    {
        label: "Contact",
        path: "/contact",
    }
]

const usefulLinks2: Link[] = [
    {
        label: "Verification",
        path: "/resources/verification",
    },
    {
        label: "Downloads",
        path: "/resources/downloads",
    },
    {
        label: "Tenders",
        path: "/resources/tenders",
    },
    {
        label: "Supplier Registration",
        path: "/resources/supplier-registration",
    },
    {
        label: "Careers",
        path: "/resources/careers",
    }
]

export const socialLinks: Link[] = [
    {
        label: "Facebook",
        path: 'https://www.facebook.com/securicozim',
        icon: <IoLogoFacebook />
    },
    {
        label: "Instagram",
        path: 'https://www.instagram.com/securicozim/',
        icon: <IoLogoInstagram />
    },
    {
        label: "Linkedin",
        path: 'https://www.linkedin.com/company/5025642/',
        icon: <IoLogoLinkedin />
    },
    {
        label: "X - Tweeter",
        path: 'https://twitter.com/SecuricoZ',
        icon: <IoLogoXing />
    },
    {
        label: "Youtube",
        path: 'https://www.youtube.com/@securicozim4554',
        icon: <IoLogoYoutube />
    },
]

const FooterLinks = () => {
    return (
        <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="animate_top w-60"
                >
                    <Heading text="About Company" className="mb-9" />

                    <div className="flex flex-col gap-3">
                        <p className="text-sm">
                            Your trusted partner in security solutions, offering advanced protection for people and assets with reliable, 24/7 services
                        </p>

                        <p className="mb-1.5 text-3xl text-accent font-bold">
                            Since 1999
                        </p>

                        <div>
                            <p className="mb-1.5 text-xl font-bold">
                                We are available
                            </p>

                            <p className="mb-1.5 text-sm font-bold">
                                Mon - Fri: 08:00 to 17:00 hrs
                            </p>
                            <p className="mb-1.5 text-sm font-bold">
                                Saturday: 08:00 to 14:00 hrs
                            </p>
                        </div>
                    </div>


                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_top"
                >
                    <Heading text="Useful Links" className="mb-9" />

                    <div className="flex gap-18">
                        <ul>
                            {usefulLinks1.map((link, i) => (
                                <li key={`${link.label} ${i}`}>
                                    <a
                                        href={link.path}
                                        className="mb-3 inline-block hover:text-primary text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            {usefulLinks2.map((link, i) => (
                                <li key={`${link.label} ${i}`}>
                                    <a
                                        href={link.path}
                                        className="mb-3 inline-block hover:text-primary text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_top"
                >
                    <Heading text="Head Office Address" className="mb-9" />

                    <div className="text-sm">
                        <p>Ebenezer House 10 Millwood Road</p>
                        <p>Harare</p>
                        <p>Zimbabwe</p>
                    </div>

                    <Heading text="Email Address" className="pt-10 pb-5" />

                    <div className="flex flex-col gap-1 text-sm">
                        <p>info@securico.co.zw</p>
                        <p>sales@securico.co.zw</p>
                        <p>support@securico.co.zw</p>
                        <p>emergency@securico.co.zw</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_top w-60"
                >
                    <Heading text="Phone Number" className="mb-9" />

                    <p className="mb-4 text-sm">+263 242 621 956/7</p>
                    <p className="mb-4 text-sm">+263 78 649 1684</p>
                    <p className="mb-4 text-sm">+263 242 621 956/7</p>
                    <p className="mb-4 text-sm">+263 78 649 1684</p>

                    <Heading text="Follow Us" className="mb-5 mt-10" />

                    <div className="flex items-center gap-2 cursor-pointer">
                        {socialLinks.map(({ icon, path, label }, i) => (
                            <a
                                key={i}
                                href={path}
                                className="mb-3 inline-block hover:text-primary text-2xl"
                                target="_blank"
                                title={label}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default FooterLinks;