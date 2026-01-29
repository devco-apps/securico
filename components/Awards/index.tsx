"use client"

import Section from "@components/Common/Section"

import SingleAward from "./SingleAward"
import awardData from "./awardData"

type BackgroundColor = "white" | "primary" | "secondary" | "accent";

interface AwardsProps {
  backgroundColor?: BackgroundColor;
}

const Awards = ({ backgroundColor = "white" }: AwardsProps) => {
  // Runtime validation for development
  if (process.env.NODE_ENV !== 'production') {
    const allowed = ["white", "primary", "secondary", "accent"];

    if (!allowed.includes(backgroundColor)) {
      console.warn(`[Awards Component]: Invalid backgroundColor "${backgroundColor}". Allowed values are: ${allowed.join(", ")}.`);
    }
  }

  // Map colors to classes
  const colorClasses: Record<BackgroundColor, string> = {
    white: "bg-white",
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  const bgClass = colorClasses[backgroundColor] || "bg-white";

  return (
    <Section variant="wide" className={`${bgClass} py-11`}>
      <div className="text-center text-gray-400">
        <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
          Our Achievements & Awards
        </h2>

        <p className="text-3xl mx-auto leading-relaxed text-body-color dark:text-body-color-dark">
          Recognized for excellence and innovation in our field
        </p>
      </div>

      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid grid-cols-2 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-1.5 xl:gap-6">
          {awardData.map((award, key) => (
            <SingleAward award={award} key={key} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Awards
