import Section from '@components/Common/Section'

import NewsItem from "./NewsItem";
import NewsData from "./newsData";

const News = async () => {
  return (
    <Section className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <div className="text-black px-3">
          <p className="text-xs mb-2 uppercase">Latest News</p>
          <p className='text-3xl font-bold text-primary md:text-4xl lg:text-6xl'>Recent news &amp; events</p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {NewsData.slice(0, 3).map((news, key) => (
            <NewsItem news={news} key={key} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default News;
