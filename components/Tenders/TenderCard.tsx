import React from "react";
import Link from "next/link";
import { Tender } from "@/types/tender";
import { IoIosCalendar, IoIosTime, IoIosArrowForward } from "react-icons/io";

interface TenderCardProps {
  tender: Tender;
}

const TenderCard = ({ tender }: TenderCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Closed":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "Awarded":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div className="group rounded-lg bg-white p-6 shadow-solid-4 dark:bg-black border border-stroke dark:border-strokedark transition-all hover:shadow-solid-5">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getStatusColor(
              tender.status
            )}`}
          >
            {tender.status}
          </span>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors">
            <Link href={`/resources/tenders/${tender.id}`}>{tender.title}</Link>
          </h3>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
                <IoIosCalendar className="text-lg" />
                <span>Posted: {new Date(tender.datePosted).toLocaleDateString()}</span>
            </div>
             <div className="flex items-center gap-2 text-red-500 dark:text-red-400">
                <IoIosTime className="text-lg" />
                <span>Deadline: {new Date(tender.deadline).toLocaleDateString()}</span>
            </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
        {tender.description}
      </p>

      <div className="flex justify-between items-center border-t border-stroke dark:border-strokedark pt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          Category: {tender.category || "General"}
        </span>
        <Link
          href={`/resources/tenders/${tender.id}`}
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          View Details <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default TenderCard;
