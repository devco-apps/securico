import type { Data } from "@/types/slide"

import { SliderCard } from "./SliderCard"

type Props = {
    data: Data[]
}

const Slides = ({ data }: Props) => {
    return (
        <div className="flex w-full gap-6 overflow-x-auto no-scrollbar pb-4">
            {data.map((item) => (
                <SliderCard key={item.id} data={item} />
            ))}
        </div>
    )
}


export default Slides
