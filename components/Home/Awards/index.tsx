"use client"

import Section from "@components/Common/Section"

import SingleAward from "./SingleAward"
import awardData from "./awardData"

const Awards = () => {
  return (
    <Section variant="wide" className="bg-secondary py-11 dark:bg-primary">
      <div className="text-center text-gray-400">
        <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
          Our Achievements & Awards
        </h2>

        <p className="text-3xl mx-auto leading-relaxed text-body-color dark:text-body-color-dark">
          Recognized for excellence and innovation in our field
        </p>
      </div>

      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-1.5 xl:gap-6">
          {awardData.map((award, key) => (
            <SingleAward award={award} key={key} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Awards
