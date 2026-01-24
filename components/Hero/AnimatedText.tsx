import { motion } from 'framer-motion'

type Props = {
    className?: string
    data?: string
}

const item = {
    hidden: {
        y: "100%",
        transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.85
        }
    },
    visible: {
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
}

const AnimatedText = ({ className, data }: Props) => {
    return (
        <span style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.p className={`${className}`} variants={item} key={data}>
                {data}
            </motion.p>
        </span>
    )
}

export default AnimatedText