import Breadcrumb from "@/components/Breadcrumb";
import JobListing from "@/components/Careers/JobListing";
import { jobs } from "@/data/jobs";
import Section from "@/components/Common/Section";

const CareersPage = () => {
  return (
    <>
      <Breadcrumb title="Careers" />
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto px-4 md:px-8 2xl:px-0">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Join Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-body-color dark:text-body-color-dark">
              Explore exciting career opportunities at Securico. We are always looking for talented and passionate individuals to join our growing team.
            </p>
          </div>

          <JobListing jobs={jobs} />
        </div>
      </section>
    </>
  );
};

export default CareersPage;
