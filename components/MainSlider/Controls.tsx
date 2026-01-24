import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import SliderButton from './SliderButton'
import Progress from './Progress'

import type { CurrentSlideData, Data } from "@/types/slide"

type Props = {
    sliderData: Data[];
    currentSlideData: CurrentSlideData;
    handlePrev: () => void;
    handleNext: () => void;
}

const Controls = ({ sliderData, currentSlideData, handlePrev, handleNext }: Props) => {
    return (
        <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
            <SliderButton handleClick={handlePrev}>
                <IoIosArrowBack className="text-xl" />
            </SliderButton>

            <SliderButton handleClick={handleNext}>
                <IoIosArrowForward className="text-xl" />
            </SliderButton>

            <Progress curIndex={currentSlideData.index} length={sliderData.length} />
        </div>
    )
}

export default Controls
