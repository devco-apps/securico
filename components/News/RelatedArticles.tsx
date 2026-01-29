import Image from "next/image"
import Link from "next/link"
import NewsData from "./newsData"

const RelatedArticles = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-secondary">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Articles
        </h4>

        <div>
          {NewsData.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-45 relative h-18 w-45">
                {post.mainImage ? (
                  <Image fill src={post.mainImage} alt="Article" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/news/articles`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RelatedArticles
