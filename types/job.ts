export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    description: string;
    postedDate: string;
    responsibilities: string[];
    qualifications: string[];
    benefits: string[];
}

export interface Application {
    fullName: string;
    email: string;
    phone: string;
    resume: File | null;
    coverLetter: File | null;
    experience: string;
    portfolioUrl?: string;
    jobId: string;
}
