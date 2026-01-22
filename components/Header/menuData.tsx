import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Home",
        newTab: false,
        path: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Services",
        newTab: false,
        path: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Portfolio",
        newTab: false,
        path: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Pages",
        newTab: false,
        path: "#",
      },
    ],
  },
  {
    id: 5,
    title: "News",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "News",
        newTab: false,
        path: "#",
      },
    ],
  },
  {
    id: 6,
    title: "Elements",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Elements",
        newTab: false,
        path: "#",
      },
    ],
  },
  {
    id: 7,
    title: "Contact Us",
    newTab: false,
    path: "#",
  },
];

export default menuData;
