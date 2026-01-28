import { Tender, TenderFilterOptions, TenderStatus } from "@/types/tender";

// Mock Data
const MOCK_TENDERS: Tender[] = [
  {
    id: "1",
    title: "Security Surveillance System Upgrade",
    deadline: new Date(Date.now() + 86400000 * 5).toISOString(), // 5 days from now
    description: "Supply and installation of advanced CCTV cameras for Head Office.",
    fullDescription: "We are seeking a qualified vendor to upgrade our existing security surveillance system at the Head Office. The project involves the supply, installation, and configuration of high-definition IP cameras, NVRs, and associated networking equipment.",
    status: "Open",
    datePosted: new Date(Date.now() - 86400000 * 2).toISOString(),
    eligibilityCriteria: [
      "Must be a registered security equipment provider.",
      "Minimum 5 years of experience in similar projects.",
      "Valid tax clearance certificate.",
    ],
    requiredDocuments: ["Company Profile", "Financial Statements", "Technical Proposal"],
    contactInfo: {
      name: "John Doe",
      email: "procurement@securico.com",
      phone: "+263 123 456 789",
    },
    category: "Equipment",
    attachments: [
      { name: "RFP Document.pdf", url: "#", type: "application/pdf" },
      { name: "Site Layout.jpg", url: "#", type: "image/jpeg" },
    ],
  },
  {
    id: "2",
    title: "Uniform Supply Contract 2024",
    deadline: new Date(Date.now() + 86400000 * 15).toISOString(), // 15 days from now
    description: "Annual contract for the supply of security guard uniforms and safety gear.",
    fullDescription: "Securico invites bids for the supply of security uniforms, including shirts, trousers, jackets, boots, and caps. The contract will be for a period of one year.",
    status: "Open",
    datePosted: new Date(Date.now() - 86400000 * 5).toISOString(),
    eligibilityCriteria: ["Textile manufacturing license", "Sample submission required"],
    requiredDocuments: ["Price Schedule", "Fabric Samples"],
    contactInfo: {
      name: "Jane Smith",
      email: "supply@securico.com",
    },
    category: "Supply",
  },
  {
    id: "3",
    title: "Fleet Maintenance Services",
    deadline: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
    description: "Provision of maintenance and repair services for the company vehicle fleet.",
    status: "Closed",
    datePosted: new Date(Date.now() - 86400000 * 20).toISOString(),
    category: "Services",
  },
  {
    id: "4",
    title: "IT Infrastructure Audit",
    deadline: new Date(Date.now() - 86400000 * 10).toISOString(),
    description: "Comprehensive audit of internal IT systems and security protocols.",
    status: "Awarded",
    datePosted: new Date(Date.now() - 86400000 * 30).toISOString(),
    category: "Consultancy",
  },
];

// Helper to simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTenders = async (
  options?: TenderFilterOptions
): Promise<Tender[]> => {
  await delay(800); // Simulate network latency

  // In a real app, this filtering would happen on the backend
  let tenders = [...MOCK_TENDERS];

  if (options) {
    if (options.status && options.status !== "All") {
      tenders = tenders.filter((t) => t.status === options.status);
    }

    if (options.searchQuery) {
      const query = options.searchQuery.toLowerCase();
      tenders = tenders.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query)
      );
    }

    if (options.deadline && options.deadline !== "All") {
      const now = new Date();
      tenders = tenders.filter((t) => {
        const deadlineDate = new Date(t.deadline);
        const diffTime = deadlineDate.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (options.deadline === "Next 7 days") {
          return diffDays >= 0 && diffDays <= 7;
        }
        if (options.deadline === "Next 30 days") {
          return diffDays >= 0 && diffDays <= 30;
        }
        return true;
      });
    }
  }
  
  // Sort by date posted desc
  tenders.sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime());

  return tenders;
};

export const getTenderById = async (id: string): Promise<Tender | null> => {
  await delay(500);
  const tender = MOCK_TENDERS.find((t) => t.id === id);
  return tender || null;
};
