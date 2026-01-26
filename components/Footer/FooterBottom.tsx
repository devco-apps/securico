import { motion } from "framer-motion";

const FooterBottom = () => {

    return (
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <p>
                    &copy; {new Date().getFullYear()} Devco. All rights reserved
                </p>
            </motion.div>

            <motion.div
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <ul className="flex items-center gap-8">
                    <li>
                        <a href="#" className="hover:text-primary">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-primary">
                            Support
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-primary">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}

export default FooterBottom;