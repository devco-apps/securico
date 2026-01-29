import Image from "next/image"

import Section from "@components/Common/Section"
import advantages from "@data/advantages"

import AdvantageCard from "./AdvantageCard"

const Advantages = () => {
    return (
        <Section>
            <div className="p-10 flex justify-center">
                <p className='text-6xl font-bold text-primary'>Our Advantage</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className="flex flex-col justify-center group relative transition-all duration-300 text-secondary text-2xl">
                    <p className="font-bold" style={{ textAlign: "center" }}>
                        We&apos;re your partners in safety. Our approach involves customizing solutions, blending on-site guards with cutting-edge technology, striking the perfect balance for enhanced security.
                    </p>
                </div>

                <div className="group relative transition-all duration-300">
                    <Image
                        src="/images/home/guard-salute.webp"
                        alt="Guard Salute"
                        width={512}
                        height={512}
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