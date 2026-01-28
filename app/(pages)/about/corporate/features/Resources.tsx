import Section from "@/components/Common/Section";
import Link from "next/link";

interface Resource {
    id: number;
    title: string;
    path: string;
    description: string;
}

const resources: Resource[] = [
    {
        id: 1,
        title: "Verification",
        path: "/resources/verification",
        description: "Verify the authenticity of our documents and employee credentials instantly.",
    },
    {
        id: 2,
        title: "Downloads",
        path: "/resources/downloads",
        description: "Access and download official company documents, brochures, and forms.",
    },
    {
        id: 3,
        title: "Tenders",
        path: "/resources/tenders",
        description: "Browse current tender opportunities and submit your proposals online.",
    },
    {
        id: 4,
        title: "Supplier Registration",
        path: "/resources/supplier-registration",
        description: "Register as a supplier to do business with us and manage your profile.",
    },
    {
        id: 5,
        title: "Careers",
        path: "/resources/careers",
        description: "Explore job openings and join our dynamic team of professionals.",
    },
]
const Resources = () => {


    return (
        <Section variant="contained">
            <div className="flex justify-center">
                <div className="max-w-2xl p-10">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Company Resources
                    </h2>
                    <p className="my-4 text-sm text-gray-600 text-justify">
                        Explore our comprehensive suite of tools &amp; portals designed to support our partners,
                        prospective employees &amp; stakeholders. Whether you are looking for career opportunities,
                        tenders, or official documentation, you can find everything you need right here.
                    </p>

                    <div className="flex flex-wrap gap-8 justify-center">
                        {resources.map(({ id, title, path, description }) => (
                            <div key={id} className="w-fit rounded-lg bg-white p-6 shadow-md dark:bg-blacksection">
                                <div className="flex flex-col gap-2 justify-start">
                                    <h3 className="text-lg p-0 m-0 font-semibold text-black dark:text-white">
                                        {title}
                                    </h3>
                                    <p className="text-xs text-black dark:text-white max-w-[230px]">
                                        {description}
                                    </p>
                                    <Link href={path} className="text-primary hover:text-secondary text-xs">Visit Page</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </Section>
    )
}

export default Resources;