"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Staff {
    id: string;
    name: string;
    employeeId: string;
    role: string;
    imageUrl: string;
    department: string;
}

const staffData: Staff[] = [
    {
        id: "1",
        name: "Devid Torayi",
        employeeId: "SEC-1001",
        role: "Senior Security Officer",
        imageUrl: "/images/user/user-01.png",
        department: "Security Operations",
    },
    {
        id: "2",
        name: "Jhon Mvura",
        employeeId: "SEC-1002",
        role: "Patrol Supervisor",
        imageUrl: "/images/user/user-02.png",
        department: "Field Operations",
    },
    {
        id: "3",
        name: "Sarah Smith",
        employeeId: "SEC-1003",
        role: "Control Room Operator",
        imageUrl: "/images/user/user-01.png", // Reusing for demo
        department: "Monitoring",
    },
];

const VerificationPage = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<Staff | null>(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            setError("Please enter a name or employee ID");
            return;
        }
        setError("");
        setLoading(true);
        setResult(null);
        setHasSearched(false);

        // Simulate API call
        setTimeout(() => {
            const searchTerm = query.toLowerCase().trim();
            const found = staffData.find(
                (staff) =>
                    staff.name.toLowerCase().includes(searchTerm) ||
                    staff.employeeId.toLowerCase() === searchTerm
            );

            setResult(found || null);
            setHasSearched(true);
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Breadcrumb title="Staff Verification" />

            <section className="pb-12.5 pt-10 lg:pb-25 lg:pt-15 xl:pb-30">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection"
                    >
                        <div className="mb-8 text-center">
                            <h2 className="mb-2.5 text-3xl font-bold text-black dark:text-white">
                                Verify Our Security Staff Identity
                            </h2>
                            <p className="font-medium">
                                Enter the staff name or employee ID to verify their identity.
                            </p>
                        </div>

                        <form onSubmit={handleSearch} className="mb-8">
                            <div className="mb-5">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Staff Name or ID
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="e.g. Devid Jhon or SEC-1001"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    <span className="absolute right-4 top-4">
                                        <svg
                                            className="fill-body-color dark:fill-body-color-dark"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C12.1527 17.25 13.6685 16.6559 14.8536 15.6607L18.8964 19.7036C19.1893 19.9964 19.6642 19.9964 19.9571 19.7036C20.25 19.4107 20.25 18.9358 19.9571 18.6429L15.9143 14.6001C16.9095 13.415 17.5036 11.8992 17.5036 10.2464C17.5036 6.51854 14.4815 3.75 10.5 3.75ZM2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5C18.75 15.0563 15.0563 18.75 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5Z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary p-4 text-white transition hover:bg-opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-70"
                            >
                                {loading ? (
                                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                ) : (
                                    "Verify Staff"
                                )}
                            </button>
                        </form>

                        {/* Results Section */}
                        {loading && (
                            <div className="flex flex-col items-center justify-center py-8">
                                <p className="animate-pulse text-lg font-medium text-body-color">
                                    Searching database...
                                </p>
                            </div>
                        )}

                        {!loading && hasSearched && result && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center rounded-lg border border-stroke bg-gray-50 p-6 dark:border-strokedark dark:bg-meta-4/30"
                            >
                                <div className="relative mb-4 h-30 w-30 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-strokedark">
                                    <Image
                                        src={result.imageUrl}
                                        alt={result.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="mb-1 text-xl font-bold text-black dark:text-white">
                                    {result.name}
                                </h3>
                                <p className="mb-2 font-medium text-primary">{result.role}</p>
                                <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                    <div className="text-right text-body-color">Employee ID:</div>
                                    <div className="font-semibold text-black dark:text-white">
                                        {result.employeeId}
                                    </div>
                                    <div className="text-right text-body-color">Department:</div>
                                    <div className="font-semibold text-black dark:text-white">
                                        {result.department}
                                    </div>
                                    <div className="text-right text-body-color">Status:</div>
                                    <div className="flex items-center gap-1 font-semibold text-green-500">
                                        <span className="block h-2.5 w-2.5 rounded-full bg-green-500"></span>
                                        Verified
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {!loading && hasSearched && !result && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center rounded-lg border border-red-100 bg-red-50 p-8 text-center dark:border-red-900/30 dark:bg-red-900/10"
                            >
                                <div className="mb-4 rounded-full bg-red-100 p-3 text-red-500 dark:bg-red-900/20">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9.16998 14.83L14.83 9.17004"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.83 14.83L9.16998 9.17004"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                                    Record Not Found
                                </h3>
                                <p className="text-sm text-body-color">
                                    No staff member found with the name or ID{" "}
                                    <strong>&quot;{query}&quot;</strong>. Please check the spelling or try a
                                    different search term.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default VerificationPage;
