"use client"

import { useState } from "react"
import Breadcrumb from "@/components/Breadcrumb"
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { toast } from "react-hot-toast"

import Button from "@/components/Buttons/Button"
import Section from "@/components/Common/Section"

// --- Validation Constants ---
const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const SUPPORTED_FORMATS = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
]

// --- Interfaces ---
interface FormValues {
  companyName: string
  yourName: string
  // Address Fields
  streetAddress: string
  city: string
  stateProvince: string
  postalCode: string
  country: string

  companyEmail: string
  companyProducts: string

  // Files
  companyProfile: File | null
  certificateOfIncorporation: File | null
  cr14: File | null
  taxClearance: File | null
  referenceLetters: File[]
  distributorshipCertificate: File | null
  tradeLicence: File | null
}

// --- Validation Schema ---
const validationSchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  yourName: Yup.string().required("Your Name is required"),

  // Address Validation
  streetAddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  stateProvince: Yup.string().required("State/Province is required"),
  postalCode: Yup.string().required("Postal Code is required"),
  country: Yup.string().required("Country is required"),

  companyEmail: Yup.string()
    .email("Invalid email address")
    .required("Company Email is required"),
  companyProducts: Yup.string().required("Products/Services list is required"),

  // File Validations
  companyProfile: Yup.mixed<File>()
    .required("Company Profile is required")
    .test(
      "fileSize",
      "File too large (max 2MB)",
      (value) => !value || (value && value.size <= MAX_FILE_SIZE)
    )
    .test(
      "fileFormat",
      "Unsupported Format (PDF or DOCX only)",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  certificateOfIncorporation: Yup.mixed<File>()
    .required("Certificate of Incorporation is required")
    .test(
      "fileSize",
      "File too large (max 2MB)",
      (value) => !value || (value && value.size <= MAX_FILE_SIZE)
    )
    .test(
      "fileFormat",
      "Unsupported Format (PDF or DOCX only)",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  cr14: Yup.mixed<File>()
    .required("CR14 is required")
    .test(
      "fileSize",
      "File too large (max 2MB)",
      (value) => !value || (value && value.size <= MAX_FILE_SIZE)
    )
    .test(
      "fileFormat",
      "Unsupported Format (PDF or DOCX only)",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  taxClearance: Yup.mixed<File>()
    .required("Tax Clearance is required")
    .test(
      "fileSize",
      "File too large (max 2MB)",
      (value) => !value || (value && value.size <= MAX_FILE_SIZE)
    )
    .test(
      "fileFormat",
      "Unsupported Format (PDF or DOCX only)",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  referenceLetters: Yup.array()
    .of(Yup.mixed<File>())
    .min(3, "At least 3 reference letters are required")
    .test("fileSize", "One or more files are too large (max 2MB)", (value) => {
      if (!value) return true
      return value.every((file) => file && file.size <= MAX_FILE_SIZE)
    })
    .test("fileFormat", "One or more files have unsupported format (PDF or DOCX only)", (value) => {
      if (!value) return true
      return value.every((file) => file && SUPPORTED_FORMATS.includes(file.type))
    }),

  // Optional Files
  distributorshipCertificate: Yup.mixed<File>()
    .nullable()
    .notRequired()
    .test(
      "fileSize",
      "File too large (max 2MB)",
      (value) => !value || (value && value.size <= MAX_FILE_SIZE)
    )
    .test(
      "fileFormat",
      "Unsupported Format (PDF or DOCX only)",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  tradeLicence: Yup.mixed<File>()
    .nullable()
    .notRequired()
    .test(
      "fileSize",
      "File too large (max 2MB)",
      (value) => !value || (value && value.size <= MAX_FILE_SIZE)
    )
    .test(
      "fileFormat",
      "Unsupported Format (PDF or DOCX only)",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
})

const SupplierRegistrationPage = () => {
  const [submissionError, setSubmissionError] = useState<string | null>(null)
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false)

  const initialValues: FormValues = {
    companyName: "",
    yourName: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    postalCode: "",
    country: "",
    companyEmail: "",
    companyProducts: "",
    companyProfile: null,
    certificateOfIncorporation: null,
    cr14: null,
    taxClearance: null,
    referenceLetters: [],
    distributorshipCertificate: null,
    tradeLicence: null,
  }

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    setSubmissionError(null)
    setSubmissionSuccess(false)

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form Values:", values)

      // Here you would construct FormData and send to API
      // const formData = new FormData()
      // Object.keys(values).forEach(key => { ... })

      setSubmissionSuccess(true)
      toast.success("Supplier registration submitted successfully!")
      resetForm()
    } catch (error) {
      console.error("Submission error:", error)
      setSubmissionError("An error occurred during submission. Please try again.")
      toast.error("Failed to submit registration.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Breadcrumb
        title="Supplier Registration"
      />

      <Section className="pb-12.5 lg:pb-25 xl:pb-30">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-20 lg:px-15 xl:px-3">
          <div className="flex flex-col gap-3 pb-16 text-center">
            <p className='text-4xl font-bold text-primary'>Join Our Network of Trusted Suppliers</p>
            <p className="text-lg text-black dark:text-white">
              Complete the form below to register your company in our database.
            </p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <div className="flex flex-col gap-2 mb-15 text-center">
              <h2 className="text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Supplier Registration Form
              </h2>

              <p className="text-xs text-gray-700 dark:text-white uppercase">
                Please ensure all required documents are up to date.
              </p>
            </div>

            {submissionSuccess && (
              <div className="mb-8 rounded-lg border border-green-500 bg-green-100 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <p>Thank you! Your registration has been submitted successfully.</p>
              </div>
            )}

            {submissionError && (
              <div className="mb-8 rounded-lg border border-red-500 bg-red-100 p-4 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                <p>{submissionError}</p>
              </div>
            )}

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, isSubmitting, values, errors, touched }) => (
                <Form>
                  {/* --- Basic Information --- */}
                  <div className="mb-10">
                    <h3 className="mb-5 text-2xl font-semibold text-black dark:text-white">
                      Basic Information
                    </h3>

                    <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                      {/* Company Name */}
                      <div className="w-full lg:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Company Name <span className="text-meta-1">*</span>
                        </label>
                        <Field
                          type="text"
                          name="companyName"
                          placeholder="Enter company name"
                          className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.companyName && errors.companyName
                            ? "border-red-500"
                            : ""
                            }`}
                        />
                        <ErrorMessage
                          name="companyName"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* Your Name */}
                      <div className="w-full lg:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Your Name <span className="text-meta-1">*</span>
                        </label>
                        <Field
                          type="text"
                          name="yourName"
                          placeholder="Enter your name"
                          className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.yourName && errors.yourName
                            ? "border-red-500"
                            : ""
                            }`}
                        />
                        <ErrorMessage
                          name="yourName"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    {/* Company Email */}
                    <div className="mb-7.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Company Email <span className="text-meta-1">*</span>
                      </label>
                      <Field
                        type="email"
                        name="companyEmail"
                        placeholder="Enter company email"
                        className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.companyEmail && errors.companyEmail
                          ? "border-red-500"
                          : ""
                          }`}
                      />
                      <ErrorMessage
                        name="companyEmail"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                  </div>

                  {/* --- Address Section --- */}
                  <div className="mb-10">
                    <h3 className="mb-5 text-2xl font-semibold text-black dark:text-white">
                      Company Address
                    </h3>

                    {/* Street Address */}
                    <div className="mb-7.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Street Address <span className="text-meta-1">*</span>
                      </label>
                      <Field
                        type="text"
                        name="streetAddress"
                        placeholder="Street address, P.O. box, etc."
                        className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.streetAddress && errors.streetAddress
                          ? "border-red-500"
                          : ""
                          }`}
                      />
                      <ErrorMessage
                        name="streetAddress"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                      {/* City */}
                      <div className="w-full lg:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          City <span className="text-meta-1">*</span>
                        </label>
                        <Field
                          type="text"
                          name="city"
                          placeholder="City"
                          className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.city && errors.city
                            ? "border-red-500"
                            : ""
                            }`}
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* State/Province */}
                      <div className="w-full lg:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          State/Province <span className="text-meta-1">*</span>
                        </label>
                        <Field
                          type="text"
                          name="stateProvince"
                          placeholder="State or Province"
                          className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.stateProvince && errors.stateProvince
                            ? "border-red-500"
                            : ""
                            }`}
                        />
                        <ErrorMessage
                          name="stateProvince"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                      {/* Postal Code */}
                      <div className="w-full lg:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Postal Code <span className="text-meta-1">*</span>
                        </label>
                        <Field
                          type="text"
                          name="postalCode"
                          placeholder="Postal / Zip Code"
                          className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.postalCode && errors.postalCode
                            ? "border-red-500"
                            : ""
                            }`}
                        />
                        <ErrorMessage
                          name="postalCode"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* Country */}
                      <div className="w-full lg:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Country <span className="text-meta-1">*</span>
                        </label>
                        <Field
                          type="text"
                          name="country"
                          placeholder="Country"
                          className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.country && errors.country
                            ? "border-red-500"
                            : ""
                            }`}
                        />
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Products/Services */}
                  <div className="mb-10">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Products/Services <span className="text-meta-1">*</span>
                    </label>
                    <Field
                      as="textarea"
                      rows={4}
                      name="companyProducts"
                      placeholder="List products/services (one per line)"
                      className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:text-gray-600 focus:placeholder:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white ${touched.companyProducts && errors.companyProducts
                        ? "border-red-500"
                        : ""
                        }`}
                    />
                    <ErrorMessage
                      name="companyProducts"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* --- File Upload Section --- */}
                  <div className="mb-10">
                    <h3 className="mb-5 text-2xl font-semibold text-black dark:text-white">
                      Document Uploads
                    </h3>
                    <p className="mb-5 text-sm text-body-color dark:text-body-color-dark">
                      Max file size: 2MB. Allowed formats: DOCX, PDF.
                    </p>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {/* Company Profile */}
                      <div>
                        <label className="mb-2.5 block text-black dark:text-white">
                          Company Profile <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.docx"
                          onChange={(event) => {
                            setFieldValue(
                              "companyProfile",
                              event.currentTarget.files
                                ? event.currentTarget.files[0]
                                : null
                            )
                          }}
                          className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="companyProfile"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* Certificate of Incorporation */}
                      <div>
                        <label className="mb-2.5 block text-black dark:text-white">
                          Certificate of Incorporation{" "}
                          <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.docx"
                          onChange={(event) => {
                            setFieldValue(
                              "certificateOfIncorporation",
                              event.currentTarget.files
                                ? event.currentTarget.files[0]
                                : null
                            )
                          }}
                          className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="certificateOfIncorporation"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* CR14 */}
                      <div>
                        <label className="mb-2.5 block text-black dark:text-white">
                          CR14 <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.docx"
                          onChange={(event) => {
                            setFieldValue(
                              "cr14",
                              event.currentTarget.files
                                ? event.currentTarget.files[0]
                                : null
                            )
                          }}
                          className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="cr14"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* Tax Clearance */}
                      <div>
                        <label className="mb-2.5 block text-black dark:text-white">
                          Tax Clearance <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.docx"
                          onChange={(event) => {
                            setFieldValue(
                              "taxClearance",
                              event.currentTarget.files
                                ? event.currentTarget.files[0]
                                : null
                            )
                          }}
                          className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="taxClearance"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* Reference Letters (Multiple) */}
                      <div className="md:col-span-2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Reference Letters (At least 3){" "}
                          <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.docx"
                          multiple
                          onChange={(event) => {
                            const files = event.currentTarget.files
                              ? Array.from(event.currentTarget.files)
                              : []
                            setFieldValue("referenceLetters", files)
                          }}
                          className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                        <div className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                          Selected: {values.referenceLetters.length} file(s)
                        </div>
                        <ErrorMessage
                          name="referenceLetters"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* Distributorship Certificate */}
                      <div>
                        <label className="mb-2.5 block text-black dark:text-white">
                          Distributorship Certificate (Optional)
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.docx"
                          onChange={(event) => {
                            setFieldValue(
                              "distributorshipCertificate",
                              event.currentTarget.files
                                ? event.currentTarget.files[0]
                                : null
                            )
                          }}
                          className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="distributorshipCertificate"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      {/* Trade Licence */}
                      <div>
                        <label className="mb-2.5 block text-black dark:text-white">
                          Trade Licence (Optional)
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.docx"
                          onChange={(event) => {
                            setFieldValue(
                              "tradeLicence",
                              event.currentTarget.files
                                ? event.currentTarget.files[0]
                                : null
                            )
                          }}
                          className="w-full cursor-pointer rounded-lg border border-stroke bg-transparent outline-hidden transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="tradeLicence"
                          component="div"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <Button
                      type="submit"
                      text={isSubmitting ? "Submitting..." : "Register Supplier"}
                      className={isSubmitting ? "cursor-not-allowed opacity-70" : ""}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default SupplierRegistrationPage
