import { News } from "@/types/news";

const NewsData: News[] = [
  {
    _id: 1,
    mainImage: "/images/news/news-01.png",
    title: "Free advertising for your online business",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    category: "Business",
    trending: true,
    publishedAt: "2025-01-20",
    tags: ["Advertising", "Marketing", "Online"],
  },
  {
    _id: 2,
    mainImage: "/images/news/news-02.png",
    title: "9 simple ways to improve your design skills",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    category: "Design",
    trending: false,
    publishedAt: "2025-01-28",
    tags: ["Design", "UI/UX", "Skills"],
  },
  {
    _id: 3, // Fixed ID (was duplicate 2)
    mainImage: "/images/news/news-04.png",
    title: "Tips to quickly improve your coding speed.",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    category: "Technology",
    trending: true,
    publishedAt: "2025-01-15",
    tags: ["Coding", "Development", "Productivity"],
  },
  {
    _id: 4, // Fixed ID (was duplicate 1)
    mainImage: "/images/news/news-02.png",
    title: "The Future of AI in Security Systems",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    category: "Technology",
    trending: false,
    publishedAt: "2025-01-10",
    tags: ["AI", "Security", "Future"],
  },
  {
    _id: 5, // Fixed ID (was duplicate 2)
    mainImage: "/images/news/news-04.png",
    title: "Top 10 Security Trends for 2025",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    category: "Security",
    trending: true,
    publishedAt: "2025-01-25",
    tags: ["Security", "Trends", "2025"],
  },
  {
    _id: 6, // Fixed ID (was duplicate 2)
    mainImage: "/images/news/news-01.png",
    title: "How to Secure Your Home Network",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    category: "Security",
    trending: false,
    publishedAt: "2025-01-01",
    tags: ["Home", "Network", "Cybersecurity"],
  },
];

export default NewsData;
