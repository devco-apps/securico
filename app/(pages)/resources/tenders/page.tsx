"use client";

import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Section from "@/components/Common/Section";
import SearchFilter from "@/components/Tenders/SearchFilter";
import TenderList from "@/components/Tenders/TenderList";
import Pagination from "@/components/Tenders/Pagination";
import { getTenders } from "@/services/tenderService";
import { Tender, TenderStatus, TenderFilterOptions } from "@/types/tender";

const ITEMS_PER_PAGE = 5;

const TendersPage = () => {
  const [tenders, setTenders] = useState<Tender[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<TenderStatus | "All">("All");
  const [deadlineFilter, setDeadlineFilter] = useState<
    "Next 7 days" | "Next 30 days" | "All"
  >("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTenders = async () => {
      setIsLoading(true);
      try {
        const filters: TenderFilterOptions = {
          searchQuery,
          status: statusFilter,
          deadline: deadlineFilter,
        };
        const data = await getTenders(filters);
        setTenders(data);
        setCurrentPage(1); // Reset to first page on filter change
      } catch (error) {
        console.error("Failed to fetch tenders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTenders();
  }, [searchQuery, statusFilter, deadlineFilter]);

  // Pagination Logic
  const totalPages = Math.ceil(tenders.length / ITEMS_PER_PAGE);
  const paginatedTenders = tenders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Breadcrumb title="Tenders" />

      <Section className="pb-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="my-10 text-center">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                Current Tender Opportunities
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our latest procurement opportunities. Browse through the list below to find active tenders, requests for proposals and contract awards.
              </p>
            </div>

            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              deadlineFilter={deadlineFilter}
              onDeadlineChange={setDeadlineFilter}
            />

            <TenderList tenders={paginatedTenders} isLoading={isLoading} />

            {!isLoading && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default TendersPage;
