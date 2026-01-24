import { Dispatch, SetStateAction } from 'react'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import SliderButton from './SliderButton'
import Progress from './Progress'

import type { CurrentSlideData, Data } from "@/types/slide"

type Props = {
    initData: Data
    currentSlideData: CurrentSlideData
    sliderData: Data[]
    data: Data[]
    transitionData: Data
    handleData: Dispatch<SetStateAction<Data[]>>
    handleTransitionData: Dispatch<SetStateAction<Data>>
    handleCurrentSlideData: Dispatch<SetStateAction<CurrentSlideData>>
}

const Controls = ({
    initData,
    currentSlideData,
    sliderData,
    data,
    transitionData,
    handleData,
    handleTransitionData,
    handleCurrentSlideData,
}: Props) => {

    const handlePrev = () => {
        handleData((prevData) => [
            transitionData ? transitionData : initData,
            ...prevData.slice(0, prevData.length - 1),
        ])

        handleCurrentSlideData({
            data: transitionData ? transitionData : sliderData[0],
            index: sliderData.findIndex((i) => i.id === data[data.length - 1].id),
        })

        handleTransitionData(data[data.length - 1])
    }

    const handleNext = () => {
        handleData((prev) => prev.slice(1))

        handleCurrentSlideData({
            data: transitionData ? transitionData : initData,
            index: sliderData.findIndex((i) => i.id === data[0].id),
        })

        handleTransitionData(data[0])

        setTimeout(() => {
            handleData((newData) => [
                ...newData,
                transitionData ? transitionData : initData,
            ])
        }, 500)
    }


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
