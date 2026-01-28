import React from 'react';
import Link from 'next/link';
import { Job } from '@/types/job';
import { motion } from 'framer-motion';
import { IoIosPin, IoIosBriefcase } from 'react-icons/io';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-solid-10 transition-all hover:shadow-solid-4 border-transparent hover:border-primary/20 border  dark:bg-blacksection dark:hover:shadow-none"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {job.title}
        </h3>
        <div className="flex flex-wrap gap-4 text-sm text-body-color dark:text-body-color-dark">
          <div className="flex items-center gap-1">
            <IoIosBriefcase className="text-primary" />
            <span>{job.department}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosPin className="text-primary" />
            <span>{job.location}</span>
          </div>
        </div>
        <p className="line-clamp-3 text-base">
          {job.description}
        </p>
        <Link
          href={`/resources/careers/${job.id}`}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-white duration-300 hover:bg-primary/90"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default JobCard;
