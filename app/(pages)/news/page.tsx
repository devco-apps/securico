import { Metadata } from "next";

import Section from "@/components/Common/Section";
import Breadcrumb from "@/components/Breadcrumb";
import NewsItem from "@/components/News/NewsItem";
import NewsData from "@/components/News/newsData";

export const metadata: Metadata = {
  title: "Securico - News & Updates",
  description: "Stay updated with the latest news, articles and insights from Securico."
};

const NewsPage = async () => {
  return (
    <>
      <Breadcrumb title="News & Articles" />

      {/* <!-- ===== News Grid Start ===== --> */}
      <Section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {NewsData.map((post, key) => (
              <NewsItem key={key} news={post} />
            ))}
          </div>
        </div>
      </Section>
      {/* <!-- ===== News Grid End ===== --> */}
    </>
  );
};

export default NewsPage;
