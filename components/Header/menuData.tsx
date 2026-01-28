import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Corporate",
        newTab: false,
        path: "/about/corporate",
      },
      {
        id: 22,
        title: "Leadership",
        newTab: false,
        path: "/about/leadership",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Cash Management",
        newTab: false,
        path: "/services/cash-management",
      },
      {
        id: 32,
        title: "Guarding Services",
        newTab: false,
        path: "/services/guarding-services",
      },
      {
        id: 33,
        title: "Electronic Security Systems",
        newTab: false,
        path: "/services/electronic-security-systems",
      },
      {
        id: 34,
        title: "Value Added Services",
        newTab: false,
        path: "/services/value-added-services",
      },
    ],
  },
  {
    id: 4,
    title: "Locations",
    newTab: false,
    path: "/locations",
  },
  {
    id: 5,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Verification",
        newTab: false,
        path: "/resources/verification",
      },
      {
        id: 42,
        title: "Downloads",
        newTab: false,
        path: "/resources/downloads",
      },
      {
        id: 43,
        title: "Tenders 🔒",
        newTab: false,
        path: "/resources/tenders",
      },
      {
        id: 44,
        title: "Supplier Registration",
        newTab: false,
        path: "/resources/supplier-registration",
      },
      {
        id: 45,
        title: "Careers",
        newTab: false,
        path: "/resources/careers",
      },
    ],
  },
  {
    id: 6,
    title: "FAQs",
    newTab: false,
    path: "/faqs",
  },
  {
    id: 7,
    title: "News & Updates",
    newTab: false,
    path: "/news",
  },
  {
    id: 8,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
