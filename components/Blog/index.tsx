import Section from '@components/Common/Section'

import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = async () => {
  return (
    <Section className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <div className="text-black">
          <p className="text-xs mb-2 uppercase">Latest News</p>
          <p className='text-6xl font-bold text-primary'>Recent news &amp; events</p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Blog;
