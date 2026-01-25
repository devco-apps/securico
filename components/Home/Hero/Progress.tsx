import { motion } from 'framer-motion'

type Props = {
    curIndex: number
    length: number
}

const Progress = ({ curIndex, length }: Props) => {
    return (
        <>
            <div className="flex h-[1px] flex-1 items-center rounded-full bg-white bg-opacity-50">
                <div
                    className="h-[1px] rounded-full bg-yellow-400 bg-opacity-50"
                    style={{ width: `${(((curIndex + 1) / length) * 100).toString()}%` }}
                ></div>
            </div>

            <span
                key={curIndex}
                style={{
                    overflow: "hidden",
                    display: "inline-block"
                }}
            >
                <motion.div
                    key={curIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-center text-4xl font-medium"
                >
                    0{curIndex + 1}
                </motion.div>
            </span>
        </>
    )
}

export default Progress
