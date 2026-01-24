"use client"

import { useState, useEffect, useCallback } from 'react'

import { Squada_One } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

import type { CurrentSlideData, Data } from '@/types/slide'

import Controls from './Controls'
import Slides from './Slides'
import SlideInfo from './SlideInfo'
import sliderData from './sliderData'
import BackgroundImage from './BackgroundImage'

const initData = sliderData[0]

const inter = Squada_One({ subsets: ['latin'], weight: ["400"] })

const MainSlider = () => {
    const [data, setData] = useState<Data[]>(sliderData.slice(1))
    const [transitionData, setTransitionData] = useState<Data>(sliderData[0])
    const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
        data: initData,
        index: 0
    })

    const handleSlideChange = useCallback((index: number) => {
        if (index < 0 || index >= sliderData.length) return;

        setCurrentSlideData({
            data: sliderData[index],
            index: index,
        });

        setTransitionData(sliderData[index]);
        setData(sliderData.filter((_, i) => i !== index));
    }, []);

    const handleNext = useCallback(() => {
        const nextIndex = (currentSlideData.index + 1) % sliderData.length;
        handleSlideChange(nextIndex);
    }, [currentSlideData.index, handleSlideChange]);

    const handlePrev = useCallback(() => {
        const prevIndex = (currentSlideData.index - 1 + sliderData.length) % sliderData.length;
        handleSlideChange(prevIndex);
    }, [currentSlideData.index, handleSlideChange]);

    useEffect(() => {
        const interval = setInterval(handleNext, 8000);

        return () => clearInterval(interval);
    }, [handleNext]);


    return (
        <section
            className={`${inter.className} relative min-h-screen select-none overflow-hidden text-white antialiased`}
        >
            <AnimatePresence>
                <BackgroundImage
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}
                />

                <div className="absolute z-20 h-full w-full" key={2}>
                    {/* <Header /> */}

                    <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
                        {/* Slider Left Section Content */}
                        <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10 sm:pt-60">
                            <SlideInfo
                                transitionData={transitionData}
                                currentSlideData={currentSlideData}
                            />
                        </div>

                        {/* Slider Right Section Content */}
                        <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10 md:pt-60">
                            <Slides
                                data={data}
                            />

                            <Controls
                                currentSlideData={currentSlideData}
                                sliderData={sliderData}
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </section>
    )
}

export default MainSlider