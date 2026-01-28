
'use client'
import Section from "@/components/Common/Section";
import Image from "next/image";
import Link from "next/link";

const History = () => {
    return (
        <Section variant="wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-145">
                    <Image
                        src="/images/about/history.webp"
                        alt="Our History"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-10">
                    <h2 className="text-3xl font-bold mb-4">Our History</h2>

                    <div className="flex flex-col gap-4 text-lg">
                        <p>
                            It all began in 1998 when <Link href="/about/leadership#divine-simbi-ndhlukula" className="text-secondary underline hover:no-underline">Dr. Divine Simbi Ndhlukula</Link>, Managing Director of SECURICO, transformed her cottage into an office. Starting with just four employees, she boldly entered the male-dominated and often prejudiced security industry.
                        </p>
                        <p>
                            With a modest budget, limited prior knowledge of the security sector, and an unwavering belief in the power of quality service, professionalism and exceptional organizational skills, SECURICO steadily gained traction.
                        </p>
                        <p>
                            In 2002, SECURICO achieved a significant milestone by becoming the first indigenous security firm to offer asset/cash-in-transit services. This was followed in 2005 by the establishment of its subsidiary, CANINE Dog Services. A remarkable display of entrepreneurial acumen in 2008, amidst Zimbabwe's economic crisis, led to the acquisition of Multi-Link (Pvt) Ltd, an established electronic security systems company.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default History;
