'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

interface ApplicationFormProps {
  jobId: string;
}

const FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
];

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  resume: Yup.mixed()
    .required('Resume is required')
    .test('fileSize', 'File too large', (value: any) => {
        return value && value.size <= FILE_SIZE;
    })
    .test('fileFormat', 'Unsupported Format', (value: any) => {
        return value && SUPPORTED_FORMATS.includes(value.type);
    }),
  coverLetter: Yup.mixed()
    .nullable()
    .test('fileSize', 'File too large', (value: any) => {
        return !value || value.size <= 2 * 1024 * 1024; // 2MB
    })
    .test('fileFormat', 'Unsupported Format', (value: any) => {
        return !value || SUPPORTED_FORMATS.includes(value.type);
    }),
  experience: Yup.string().required('Please detail your experience'),
  portfolioUrl: Yup.string().url('Invalid URL'),
});

const ApplicationForm: React.FC<ApplicationFormProps> = ({ jobId }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="rounded-lg border border-stroke bg-white p-8 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            Apply for this position
        </h3>
        
        {isSubmitted ? (
             <div className="text-center">
                <div className="mb-4 text-5xl text-green-500">✓</div>
                <h4 className="text-xl font-semibold text-black dark:text-white">Application Submitted!</h4>
                <p className="mt-2">Thank you for applying. We will review your application and get back to you shortly.</p>
            </div>
        ) : (
             <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    phone: '',
                    resume: null,
                    coverLetter: null,
                    experience: '',
                    portfolioUrl: '',
                    jobId: jobId,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // Simulate API call
                    setTimeout(() => {
                        console.log('Submission:', values);
                        toast.success('Application submitted successfully!');
                        setSubmitting(false);
                        setIsSubmitted(true);
                        resetForm();
                    }, 1500);
                }}
            >
                {({ setFieldValue, isSubmitting, errors, touched }) => (
                    <Form>
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                             <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Full Name <span className="text-meta-1">*</span>
                                </label>
                                <Field
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                                        touched.fullName && errors.fullName ? 'border-red-500' : ''
                                    }`}
                                />
                                <ErrorMessage name="fullName" component="div" className="mt-1 text-sm text-red-500" />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Email Address <span className="text-meta-1">*</span>
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                                        touched.email && errors.email ? 'border-red-500' : ''
                                    }`}
                                />
                                <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-500" />
                            </div>
                        </div>

                         <div className="mb-4.5">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Phone Number <span className="text-meta-1">*</span>
                            </label>
                            <Field
                                type="text"
                                name="phone"
                                placeholder="Enter your phone number"
                                className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                                    touched.phone && errors.phone ? 'border-red-500' : ''
                                }`}
                            />
                            <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-500" />
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Resume/CV <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="file"
                                    onChange={(event) => {
                                        setFieldValue("resume", event.currentTarget.files ? event.currentTarget.files[0] : null);
                                    }}
                                    className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                />
                                <ErrorMessage name="resume" component="div" className="mt-1 text-sm text-red-500" />
                            </div>
                             <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Cover Letter (Optional)
                                </label>
                                <input
                                    type="file"
                                    onChange={(event) => {
                                        setFieldValue("coverLetter", event.currentTarget.files ? event.currentTarget.files[0] : null);
                                    }}
                                    className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                />
                                <ErrorMessage name="coverLetter" component="div" className="mt-1 text-sm text-red-500" />
                            </div>
                        </div>

                         <div className="mb-4.5">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Relevant Experience & Skills <span className="text-meta-1">*</span>
                            </label>
                            <Field
                                as="textarea"
                                rows={4}
                                name="experience"
                                placeholder="Describe your relevant experience and skills"
                                className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                                    touched.experience && errors.experience ? 'border-red-500' : ''
                                }`}
                            />
                            <ErrorMessage name="experience" component="div" className="mt-1 text-sm text-red-500" />
                        </div>

                         <div className="mb-6">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Portfolio/LinkedIn URL (Optional)
                            </label>
                            <Field
                                type="text"
                                name="portfolioUrl"
                                placeholder="https://linkedin.com/in/..."
                                className={`w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                                    touched.portfolioUrl && errors.portfolioUrl ? 'border-red-500' : ''
                                }`}
                            />
                            <ErrorMessage name="portfolioUrl" component="div" className="mt-1 text-sm text-red-500" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary p-4 text-white transition hover:bg-opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-70"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </Form>
                )}
            </Formik>
        )}
    </div>
  );
};

export default ApplicationForm;
