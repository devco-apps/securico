import React from "react";
import { Tender } from "@/types/tender";
import TenderCard from "./TenderCard";

interface TenderListProps {
  tenders: Tender[];
  isLoading: boolean;
}

const TenderList = ({ tenders, isLoading }: TenderListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse bg-white dark:bg-black p-6 rounded-lg border border-stroke dark:border-strokedark"
          >
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (tenders.length === 0) {
    return (
      <div className="text-center py-12 bg-white dark:bg-black rounded-lg border border-stroke dark:border-strokedark">
        <h3 className="text-lg font-bold text-black dark:text-white mb-2">
          No tenders found
        </h3>
        <p className="text-gray-500">
          Try adjusting your search or filters to find what you&apos;re looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {tenders.map((tender) => (
        <TenderCard key={tender.id} tender={tender} />
      ))}
    </div>
  );
};

export default TenderList;
