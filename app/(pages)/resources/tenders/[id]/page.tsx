"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Section from "@/components/Common/Section";
import TenderDetail from "@/components/Tenders/TenderDetail";
import { getTenderById } from "@/services/tenderService";
import { Tender } from "@/types/tender";

const TenderDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [tender, setTender] = useState<Tender | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchTender(id);
    }
  }, [id]);

  const fetchTender = async (tenderId: string) => {
    setIsLoading(true);
    try {
      const data = await getTenderById(tenderId);
      setTender(data);
    } catch (error) {
      console.error("Failed to fetch tender details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Breadcrumb title="Loading..." />
        <Section className="pb-20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse bg-white dark:bg-black p-10 rounded-lg border border-stroke dark:border-strokedark">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-10"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (!tender) {
    return (
      <>
        <Breadcrumb title="Not Found" />
        <Section className="pb-20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center py-20">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Tender Not Found
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                The tender you are looking for does not exist or has been removed.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <Breadcrumb title="Tender Details" />
      <Section className="pb-20">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <TenderDetail tender={tender} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default TenderDetailPage;
