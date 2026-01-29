import { Metadata } from "next";

import Section from "@/components/Common/Section";
import Breadcrumb from "@/components/Breadcrumb";
import NewsList from "@/components/News/NewsList";

export const metadata: Metadata = {
  title: "Securico - News & Updates",
  description: "Stay updated with the latest news, articles and insights from Securico."
};

const NewsPage = async () => {
  return (
    <>
      <Breadcrumb title="News & Articles" />

      {/* <!-- ===== News Grid Start ===== --> */}
      <Section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mt-15 xl:mt-20">
          <NewsList />
        </div>
      </Section>
      {/* <!-- ===== News Grid End ===== --> */}
    </>
  );
};

export default NewsPage;
