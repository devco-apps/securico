import React from "react";
import Link from "next/link";
import { Tender } from "@/types/tender";
import {
  IoIosCalendar,
  IoIosTime,
  IoIosDocument,
  IoIosMail,
  IoIosCall,
  IoIosArrowBack,
} from "react-icons/io";

interface TenderDetailProps {
  tender: Tender;
}

const TenderDetail = ({ tender }: TenderDetailProps) => {
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
    <div className="bg-white dark:bg-black rounded-lg border border-stroke dark:border-strokedark p-6 md:p-10 shadow-solid-4">
      <Link
        href="/resources/tenders"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors"
      >
        <IoIosArrowBack />
        Back to Tenders
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getStatusColor(
              tender.status
            )}`}
          >
            {tender.status}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
            {tender.title}
          </h1>
          <p className="text-sm text-gray-500">Ref ID: {tender.id}</p>
        </div>
        <div className="flex flex-col items-end gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
                <IoIosCalendar className="text-lg" />
                <span>Posted: {new Date(tender.datePosted).toLocaleDateString()}</span>
            </div>
             <div className="flex items-center gap-2 text-red-500 dark:text-red-400 font-medium">
                <IoIosTime className="text-lg" />
                <span>Deadline: {new Date(tender.deadline).toLocaleDateString()}</span>
            </div>
        </div>
      </div>

      <div className="border-t border-stroke dark:border-strokedark my-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">
              Description
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {tender.fullDescription || tender.description}
            </p>
          </section>

          {tender.eligibilityCriteria && (
            <section>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Eligibility Criteria
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                {tender.eligibilityCriteria.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </section>
          )}

          {tender.requiredDocuments && (
            <section>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Required Documents
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                {tender.requiredDocuments.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="lg:col-span-1 space-y-8">
          {tender.attachments && tender.attachments.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                Downloads
              </h3>
              <div className="space-y-3">
                {tender.attachments.map((file, index) => (
                  <a
                    key={index}
                    href={file.url}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-black rounded border border-stroke dark:border-strokedark hover:border-primary transition-colors group"
                  >
                    <IoIosDocument className="text-2xl text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-black dark:text-white truncate group-hover:text-primary">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Download
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {tender.contactInfo && (
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <p className="font-medium text-black dark:text-white">
                  {tender.contactInfo.name}
                </p>
                <div className="flex items-center gap-3">
                  <IoIosMail className="text-xl text-primary" />
                  <a
                    href={`mailto:${tender.contactInfo.email}`}
                    className="hover:text-primary"
                  >
                    {tender.contactInfo.email}
                  </a>
                </div>
                {tender.contactInfo.phone && (
                  <div className="flex items-center gap-3">
                    <IoIosCall className="text-xl text-primary" />
                    <a
                      href={`tel:${tender.contactInfo.phone}`}
                      className="hover:text-primary"
                    >
                      {tender.contactInfo.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenderDetail;
