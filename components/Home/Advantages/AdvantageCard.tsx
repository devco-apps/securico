import { IAdvantage } from "@/types/advantages"

const AdvantageCard = ({
    title,
    description,
    icon
}: IAdvantage) => {
    return (
        <div className="flex justify-start items-start">
            <div className="text-primary text-4xl mr-3">
                {icon}
            </div>
            <div className="flex flex-col text-black">
                <p className="text-2xl font-bold leading-tight">{title}</p>
                <p className="text-sm text-neutral-600">{description}</p>
            </div>
        </div>
    )
}

export default AdvantageCard