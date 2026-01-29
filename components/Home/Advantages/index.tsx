import Image from "next/image"

import Section from "@components/Common/Section"
import advantages from "@data/advantages"

import AdvantageCard from "./AdvantageCard"

const Advantages = () => {
    return (
        <Section className="px-4 py-10 md:px-8 lg:py-0">
            <div className="mb-10 flex justify-center">
                <p className='text-3xl font-bold text-center text-primary md:text-4xl lg:text-6xl'>Our Advantage</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className="flex flex-col justify-center group relative transition-all duration-300 text-secondary text-2xl px-2 md:px-0">
                    <p className="font-bold text-center">
                        We&apos;re your partners in safety. Our approach involves customizing solutions, blending on-site guards with cutting-edge technology, striking the perfect balance for enhanced security.
                    </p>
                </div>

                <div className="group relative transition-all duration-300">
                    <Image
                        src="/images/home/guard-salute.webp"
                        alt="Guard Salute"
                        width={512}
                        height={512}
                        className="w-full h-auto"
                    />
                </div>

                <div className="flex flex-col justify-center gap-4 group transition-all duration-300">
                    {advantages.map(i =>
                        <AdvantageCard
                            key={i.id}
                            id={i.id}
                            title={i.title}
                            description={i.description}
                            icon={i.icon}
                        />
                    )}
                </div>
            </div>
        </Section>
    )
}

export default Advantages