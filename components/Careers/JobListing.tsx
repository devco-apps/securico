'use client';

import React, { useState } from 'react';
import { Job } from '@/types/job';
import JobCard from './JobCard';
import { motion } from 'framer-motion';

interface JobListingProps {
    jobs: Job[];
}

const JobListing: React.FC<JobListingProps> = ({ jobs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [department, setDepartment] = useState('All');
    const [location, setLocation] = useState('All');

    const departments = ['All', ...Array.from(new Set(jobs.map((job) => job.department)))];
    const locations = ['All', ...Array.from(new Set(jobs.map((job) => job.location)))];

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = department === 'All' || job.department === department;
        const matchesLocation = location === 'All' || job.location === location;

        return matchesSearch && matchesDepartment && matchesLocation;
    });

    return (
        <div className="w-full">
            {/* Filters */}
            <div className="mb-10 flex flex-col gap-4 rounded-lg border border-stroke bg-white p-6 shadow-solid-4 dark:border-strokedark dark:bg-blacksection md:flex-row md:items-center">
                <div className="w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-3 px-5 outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-blacksection dark:focus:border-primary"
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-3 px-5 outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-blacksection dark:focus:border-primary"
                    >
                        {departments.map((dept) => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full md:w-1/3">
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-3 px-5 outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-blacksection dark:focus:border-primary"
                    >
                        {locations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Job Grid */}
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-10">
                        <p className="text-lg text-body-color dark:text-body-color-dark">No jobs found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobListing;
