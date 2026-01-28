import React from "react";
import { IoIosSearch } from "react-icons/io";
import { TenderStatus } from "@/types/tender";

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: TenderStatus | "All";
  onStatusChange: (status: TenderStatus | "All") => void;
  deadlineFilter: "Next 7 days" | "Next 30 days" | "All";
  onDeadlineChange: (deadline: "Next 7 days" | "Next 30 days" | "All") => void;
}

const SearchFilter = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  deadlineFilter,
  onDeadlineChange,
}: SearchFilterProps) => {
  return (
    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-solid-4 border border-stroke dark:border-strokedark mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search tenders by title or keyword..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-transparent pl-12 pr-4 py-3 rounded-lg border border-stroke dark:border-strokedark focus:border-primary focus-visible:outline-none dark:bg-secondary"
          />
          <IoIosSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value as any)}
            className="px-4 py-3 rounded-lg border border-stroke dark:border-strokedark bg-transparent focus:border-primary focus-visible:outline-none dark:bg-secondary"
          >
            <option value="All">All Statuses</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="Awarded">Awarded</option>
          </select>

          <select
            value={deadlineFilter}
            onChange={(e) => onDeadlineChange(e.target.value as any)}
            className="px-4 py-3 rounded-lg border border-stroke dark:border-strokedark bg-transparent focus:border-primary focus-visible:outline-none dark:bg-secondary"
          >
            <option value="All">All Deadlines</option>
            <option value="Next 7 days">Next 7 days</option>
            <option value="Next 30 days">Next 30 days</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
