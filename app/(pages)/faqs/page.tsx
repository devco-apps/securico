import { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { getFaqs } from "@/services/faqService";

export const metadata: Metadata = {
  title: "FAQs - Securico Zimbabwe",
  description: "Frequently Asked Questions about Securico's security services, guarding, electronics, and more.",
};

const FAQPage = async () => {
  const faqs = await getFaqs();
  console.log(`Fetched ${faqs.length} FAQs`);

  return (
    <>
      <Breadcrumb title="Frequently Asked Questions" />
      <FAQ faqData={faqs} />
    </>
  );
};

export default FAQPage;
