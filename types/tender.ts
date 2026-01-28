export type TenderStatus = "Open" | "Closed" | "Awarded";

export interface Tender {
    id: string;
    title: string;
    deadline: string; // ISO Date string
    description: string; // Brief description
    fullDescription?: string; // Detailed description
    status: TenderStatus;
    datePosted: string; // ISO Date string
    eligibilityCriteria?: string[];
    requiredDocuments?: string[];
    contactInfo?: {
        name: string;
        email: string;
        phone?: string;
    };
    attachments?: {
        name: string;
        url: string;
        type: string;
    }[];
    category?: string;
}

export interface TenderFilterOptions {
    status?: TenderStatus | "All";
    deadline?: "Next 7 days" | "Next 30 days" | "All";
    searchQuery?: string;
    category?: string;
}
