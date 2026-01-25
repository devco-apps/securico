"use client";

import Section from "@components/Common/Section";

import SingleAward from "./SingleAward";
import awardData from "./awardData";

const Awards = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <Section variant="wide" className="bg-secondary py-11 dark:bg-primary">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {awardData.map((award, key) => (
              <SingleAward award={award} key={key} />
            ))}
          </div>
        </div>
      </Section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Awards;
