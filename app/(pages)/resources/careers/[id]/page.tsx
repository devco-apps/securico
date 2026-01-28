'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { jobs } from '@/data/jobs';
import ApplicationForm from '@/components/Careers/ApplicationForm';
import { IoIosArrowBack, IoIosBriefcase, IoIosPin, IoIosCalendar } from 'react-icons/io';

const JobDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
        <div className="pt-40 text-center">
            <h2 className="text-2xl font-bold">Job not found</h2>
            <button onClick={() => router.back()} className="mt-4 text-primary hover:underline">
                Go back to careers
            </button>
        </div>
    );
  }

  return (
    <>
      <Breadcrumb title={job.title} />
      
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto px-4 md:px-8 2xl:px-0">
            <button 
                onClick={() => router.back()} 
                className="mb-8 flex items-center gap-2 text-sm font-medium text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
                <IoIosArrowBack /> Back to Careers
            </button>

            <div className="flex flex-col gap-10 lg:flex-row">
                {/* Job Details */}
                <div className="w-full lg:w-2/3">
                    <div className="mb-10 rounded-lg border border-stroke bg-white p-8 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                        <div className="mb-6 flex flex-wrap gap-4 text-sm text-body-color dark:text-body-color-dark">
                             <div className="flex items-center gap-1">
                                <IoIosBriefcase className="text-primary" />
                                <span>{job.department}</span>
                            </div>
                             <div className="flex items-center gap-1">
                                <IoIosPin className="text-primary" />
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <IoIosCalendar className="text-primary" />
                                <span>Posted: {job.postedDate}</span>
                            </div>
                             <div className="rounded bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                {job.type}
                            </div>
                        </div>

                        <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">Job Description</h2>
                        <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                            {job.description}
                        </p>

                         <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Responsibilities</h3>
                        <ul className="mb-6 list-disc pl-6 text-body-color dark:text-body-color-dark">
                            {job.responsibilities.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>

                        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Qualifications</h3>
                        <ul className="mb-6 list-disc pl-6 text-body-color dark:text-body-color-dark">
                            {job.qualifications.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>

                        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Benefits</h3>
                        <ul className="mb-6 list-disc pl-6 text-body-color dark:text-body-color-dark">
                            {job.benefits.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Application Form */}
                <div className="w-full lg:w-1/3">
                    <div className="sticky top-24">
                        <ApplicationForm jobId={job.id} />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default JobDetailsPage;
