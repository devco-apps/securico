"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Section from "@/components/Common/Section";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { socialLinks } from "@/components/Footer/FooterLinks";

// Validation Schema
const contactSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    category: Yup.string().required("Category is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    agree: Yup.boolean().oneOf([true], "You must agree to the terms").required("Required"),
});

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div>
            <Breadcrumb title="Get In Touch" />

            <Section py="lg" className="overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* Left Column: Contact Info */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-8">
                        {/* Intro Text */}
                        <div>
                            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                                Contact Us
                            </h2>
                            <p className="text-body-color dark:text-body-color-dark mb-6">
                                Not sure what you need? The team at Securico will be happy to listen to you and suggest ideas you hadn&amp;t considered.
                            </p>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-black dark:text-white">Email</h4>
                                        <p className="text-sm">info@securico.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-black dark:text-white">Phone</h4>
                                        <p className="text-sm">+1 (555) 000-0000</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <FaClock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-black dark:text-white">Support</h4>
                                        <p className="text-sm">Mon-Fri 9am-5pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Locations Call to Action */}
                        <div className="rounded-lg bg-gray-50 dark:bg-blacksection p-6 border border-stroke dark:border-strokedark">
                            <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                                Visit our office
                            </h3>
                            <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                                Prefer a face-to-face meeting? Find a location near you.
                            </p>
                            <Link
                                href="/locations"
                                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                            >
                                <FaMapMarkerAlt />
                                Find a Location
                            </Link>
                        </div>

                        {/* Social Media Card */}
                        <div className="rounded-lg bg-gray-50 dark:bg-blacksection p-6 border border-stroke dark:border-strokedark">
                            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                                Follow Us
                            </h3>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-body-color hover:text-primary transition-colors text-2xl"
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full lg:w-2/3">
                        <div className="rounded-lg border border-stroke bg-white p-8 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                            <h3 className="mb-2 text-2xl font-semibold text-black dark:text-white">
                                Send us a message
                            </h3>
                            <p className="mb-6 text-sm text-body-color">
                                We&apos;d love to hear from you! Let&apos;s get in touch.
                            </p>

                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="mb-4 text-5xl text-green-500">✓</div>
                                    <h4 className="text-xl font-semibold text-black dark:text-white">Message Sent!</h4>
                                    <p className="mt-2">Thank you for contacting us. We will get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-6 text-primary hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <Formik
                                    initialValues={{
                                        fullName: "",
                                        category: "",
                                        email: "",
                                        phone: "",
                                        subject: "",
                                        message: "",
                                        agree: false
                                    }}
                                    validationSchema={contactSchema}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        setTimeout(() => {
                                            console.log(values);
                                            toast.success("Message sent successfully!");
                                            setSubmitting(false);
                                            setIsSubmitted(true);
                                            resetForm();
                                        }, 1000);
                                    }}
                                >
                                    {({ isSubmitting, touched, errors }) => (
                                        <Form>
                                            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                                <div className="w-full xl:w-1/2">
                                                    <label className="mb-2.5 block text-black dark:text-white">
                                                        Full Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="fullName"
                                                        placeholder="John Doe"
                                                        className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${touched.fullName && errors.fullName ? 'border-red-500' : ''
                                                            }`}
                                                    />
                                                    <ErrorMessage name="fullName" component="div" className="mt-1 text-sm text-red-500" />
                                                </div>
                                                <div className="w-full xl:w-1/2">
                                                    <label className="mb-2.5 block text-black dark:text-white">
                                                        Category of Feedback
                                                    </label>
                                                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                                                        <Field
                                                            as="select"
                                                            name="category"
                                                            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${touched.category && errors.category ? 'border-red-500' : ''
                                                                }`}
                                                        >
                                                            <option value="" disabled className="text-body-color dark:text-body-color-dark">Select a category</option>
                                                            <option value="General Feedback" className="text-body-color dark:text-body-color-dark">General Feedback</option>
                                                            <option value="Complaint" className="text-body-color dark:text-body-color-dark">Complaint</option>
                                                            <option value="Enquiry" className="text-body-color dark:text-body-color-dark">Enquiry</option>
                                                        </Field>
                                                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                                            <svg
                                                                className="fill-current"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g opacity="0.8">
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                                        fill=""
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <ErrorMessage name="category" component="div" className="mt-1 text-sm text-red-500" />
                                                </div>
                                            </div>

                                            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                                <div className="w-full xl:w-1/2">
                                                    <label className="mb-2.5 block text-black dark:text-white">
                                                        Email Address
                                                    </label>
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder="email@example.com"
                                                        className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${touched.email && errors.email ? 'border-red-500' : ''
                                                            }`}
                                                    />
                                                    <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-500" />
                                                </div>
                                                <div className="w-full xl:w-1/2">
                                                    <label className="mb-2.5 block text-black dark:text-white">
                                                        Phone Number
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="phone"
                                                        placeholder="+1 (555) 000-0000"
                                                        className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${touched.phone && errors.phone ? 'border-red-500' : ''
                                                            }`}
                                                    />
                                                    <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-500" />
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    Subject
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="subject"
                                                    placeholder="How can we help you?"
                                                    className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${touched.subject && errors.subject ? 'border-red-500' : ''
                                                        }`}
                                                />
                                                <ErrorMessage name="subject" component="div" className="mt-1 text-sm text-red-500" />
                                            </div>

                                            <div className="mb-6">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    Message
                                                </label>
                                                <Field
                                                    as="textarea"
                                                    rows={4}
                                                    name="message"
                                                    placeholder="Type your message here"
                                                    className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${touched.message && errors.message ? 'border-red-500' : ''
                                                        }`}
                                                />
                                                <ErrorMessage name="message" component="div" className="mt-1 text-sm text-red-500" />
                                            </div>

                                            <div className="mb-6">
                                                <label className="flex cursor-pointer items-center gap-2">
                                                    <Field type="checkbox" name="agree" className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary" />
                                                    <span className="text-sm">
                                                        I agree that my data will be processed for the purpose of responding to my request.
                                                    </span>
                                                </label>
                                                <ErrorMessage name="agree" component="div" className="mt-1 text-sm text-red-500" />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex w-full items-center justify-center rounded bg-primary p-4 font-medium text-white transition hover:bg-opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-70"
                                            >
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            )}
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
};

export default ContactPage;