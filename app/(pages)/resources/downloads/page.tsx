"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

import Breadcrumb from "@/components/Breadcrumb";

import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaDownload,
  FaSearch,
  FaFilter
} from "react-icons/fa";

// Types
type FileType = 'PDF' | 'DOCX' | 'XLSX' | 'PPTX';
type Category = 'Report' | 'Policy' | 'Form' | 'Presentation' | 'Brochure';

interface Document {
  id: string;
  title: string;
  description: string;
  fileType: FileType;
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
  category: Category;
}

// Mock Data
const documentsData: Document[] = [
  {
    id: "1",
    title: "Annual Security Report 2024",
    description: "Comprehensive overview of security operations and statistics for the year 2024.",
    fileType: "PDF",
    fileSize: "2.4 MB",
    uploadDate: "2025-01-15",
    downloadUrl: "#",
    category: "Report"
  },
  {
    id: "2",
    title: "Employee Code of Conduct",
    description: "Standard operating procedures and ethical guidelines for all security personnel.",
    fileType: "PDF",
    fileSize: "1.1 MB",
    uploadDate: "2024-11-20",
    downloadUrl: "#",
    category: "Policy"
  },
  {
    id: "3",
    title: "Incident Report Form",
    description: "Standard template for reporting security incidents and breaches.",
    fileType: "DOCX",
    fileSize: "450 KB",
    uploadDate: "2024-10-05",
    downloadUrl: "#",
    category: "Form"
  },
  {
    id: "4",
    title: "Q4 Financial Overview",
    description: "Financial performance summary for the fourth quarter of 2024.",
    fileType: "XLSX",
    fileSize: "850 KB",
    uploadDate: "2025-01-10",
    downloadUrl: "#",
    category: "Report"
  },
  {
    id: "5",
    title: "Security Training Presentation",
    description: "Training materials for new security staff induction.",
    fileType: "PPTX",
    fileSize: "5.2 MB",
    uploadDate: "2024-12-01",
    downloadUrl: "#",
    category: "Presentation"
  },
  {
    id: "6",
    title: "Client Service Agreement",
    description: "Standard terms and conditions for security services.",
    fileType: "PDF",
    fileSize: "1.5 MB",
    uploadDate: "2024-09-15",
    downloadUrl: "#",
    category: "Policy"
  },
  {
    id: "7",
    title: "Corporate Brochure 2025",
    description: "Overview of Securico's services, vision, and capabilities.",
    fileType: "PDF",
    fileSize: "3.8 MB",
    uploadDate: "2025-01-05",
    downloadUrl: "#",
    category: "Brochure"
  },
  {
    id: "8",
    title: "Visitor Log Sheet",
    description: "Printable template for tracking visitor entry and exit.",
    fileType: "DOCX",
    fileSize: "200 KB",
    uploadDate: "2024-08-30",
    downloadUrl: "#",
    category: "Form"
  }
];

const DownloadsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<FileType | "All">("All");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedYear, setSelectedYear] = useState<string | "All">("All");

  // Get unique years from data
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(documentsData.map(doc => doc.uploadDate.split('-')[0])));
    return uniqueYears.sort((a, b) => b.localeCompare(a));
  }, []);

  // Filter Logic
  const filteredDocuments = useMemo(() => {
    return documentsData.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "All" || doc.fileType === selectedType;
      const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
      const matchesYear = selectedYear === "All" || doc.uploadDate.startsWith(selectedYear);

      return matchesSearch && matchesType && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedType, selectedCategory, selectedYear]);

  // Helper to get icon based on file type
  const getFileIcon = (type: FileType) => {
    switch (type) {
      case "PDF": return <FaFilePdf className="text-red-500 w-8 h-8" />;
      case "DOCX": return <FaFileWord className="text-blue-500 w-8 h-8" />;
      case "XLSX": return <FaFileExcel className="text-green-500 w-8 h-8" />;
      case "PPTX": return <FaFilePowerpoint className="text-orange-500 w-8 h-8" />;
      default: return <FaFilePdf className="text-gray-500 w-8 h-8" />;
    }
  };

  return (
    <>
      <Breadcrumb title="Downloads Center" />

      <section className="pb-12.5 pt-10 lg:pb-25 lg:pt-15 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          {/* Controls Section */}
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between rounded-lg bg-white p-6 shadow-solid-8 dark:bg-blacksection">

            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-12 pr-6 outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-black dark:focus:border-primary"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-body-color" />
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-4 sm:flex-row w-full md:w-auto">
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as FileType | "All")}
                  className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 px-5 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-black dark:focus:border-primary cursor-pointer"
                >
                  <option value="All">All File Types</option>
                  <option value="PDF">PDF</option>
                  <option value="DOCX">Word (DOCX)</option>
                  <option value="XLSX">Excel (XLSX)</option>
                  <option value="PPTX">PowerPoint (PPTX)</option>
                </select>
                <FaFilter className="absolute right-4 top-1/2 -translate-y-1/2 text-body-color pointer-events-none text-sm" />
              </div>

              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as Category | "All")}
                  className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 px-5 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-black dark:focus:border-primary cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  <option value="Report">Reports</option>
                  <option value="Policy">Policies</option>
                  <option value="Form">Forms</option>
                  <option value="Presentation">Presentations</option>
                  <option value="Brochure">Brochures</option>
                </select>
                <FaFilter className="absolute right-4 top-1/2 -translate-y-1/2 text-body-color pointer-events-none text-sm" />
              </div>

              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 px-5 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-black dark:focus:border-primary cursor-pointer"
                >
                  <option value="All">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <FaFilter className="absolute right-4 top-1/2 -translate-y-1/2 text-body-color pointer-events-none text-sm" />
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-solid-8 dark:bg-blacksection hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-strokedark">
                      {getFileIcon(doc.fileType)}
                    </div>
                    <span className="inline-block rounded bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {doc.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                  <p className="mb-6 text-sm text-body-color line-clamp-2">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-stroke pt-4 dark:border-strokedark mt-auto">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-body-color">Size: {doc.fileSize}</span>
                      <span className="text-xs text-body-color">Date: {doc.uploadDate}</span>
                    </div>

                    <a
                      href={doc.downloadUrl}
                      className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary/90"
                    >
                      <FaDownload className="text-xs" />
                      Download
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 rounded-full bg-gray-100 p-6 dark:bg-strokedark">
                  <FaSearch className="h-10 w-10 text-body-color" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                  No documents found
                </h3>
                <p className="text-body-color">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadsPage;
