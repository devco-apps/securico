import { motion } from "framer-motion";

import type { CurrentSlideData, Data } from '@/types/slide'

type Props = {
    transitionData: Data
    currentSlideData: CurrentSlideData
}

const BackgroundImage = ({ transitionData, currentSlideData }: Props) => {
    return (
        <>
            {/* Background Transition Animation */}

            {transitionData && (
                <motion.img
                    key={transitionData.id}
                    layoutId={transitionData.id}
                    src={transitionData.image}
                    alt="Transition Image"
                    transition={{
                        opacity: {
                            ease: "linear",
                        },
                        layout: {
                            duration: 0.6,
                        }
                    }}
                    className="absolute left-0 top-0 z-10 w-full h-full object-cover brightness-50"
                />
            )}

            {/* Background Image */}

            <motion.img
                alt="Current Image"
                key={currentSlideData.data.id + 'transition'}
                src={currentSlideData.data.image}
                className="absolute left-0 top-0 w-full h-full object-cover brightness-50"
            />
        </>
    )
}

export default BackgroundImage