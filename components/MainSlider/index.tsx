"use client"

import { useState } from 'react'

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

    return (
        <section className={`${inter.className} relative min-h-screen select-none overflow-hidden text-white antialiased`}>
            <AnimatePresence>
                <BackgroundImage
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}
                />

                <div className="absolute z-20 h-full w-full" key={2}>
                    {/* <Header /> */}

                    <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
                        {/* Slider Left Section Content */}
                        <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10 sm:pt-36">
                            <SlideInfo
                                transitionData={transitionData}
                                currentSlideData={currentSlideData}
                            />
                        </div>

                        {/* Slider Right Section Content */}
                        <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10 md:pt-36">
                            <Slides
                                data={data}
                            />

                            <Controls
                                currentSlideData={currentSlideData}
                                data={data}
                                transitionData={transitionData}
                                initData={initData}
                                handleData={setData}
                                handleTransitionData={setTransitionData}
                                handleCurrentSlideData={setCurrentSlideData}
                                sliderData={sliderData}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </section>
    )
}

export default MainSlider