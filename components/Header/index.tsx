"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (navigationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navigationOpen]);

  // close mobile menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNavigationOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <header className="z-99999 w-full">
      {/* Top Bar */}
      <div className="hidden border-b border-stroke bg-white py-4 dark:border-strokedark dark:bg-blacksection xl:block">
        <div className="mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:px-0">
          {/* Logo */}
          <div className="w-60">
            <Link href="/">
              <Image
                src="/images/logo/logo-dark.svg"
                alt="logo"
                width={190}
                height={40}
                className="hidden w-full dark:block"
              />
              <Image
                src="/images/logo/logo-light.svg"
                alt="logo"
                width={190}
                height={40}
                className="w-full dark:hidden"
              />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-10">
            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-[#212b36] dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#212b36] dark:text-white">
                  Our Address
                </p>
                <p className="text-xs text-body-color">
                  125 Golden St, New York, NY
                </p>
              </div>
            </div>

            {/* Work Time */}
            <div className="flex items-center gap-4">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-[#212b36] dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#212b36] dark:text-white">
                  Work Time
                </p>
                <p className="text-xs text-body-color">hi@compactor.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-[#212b36] dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#212b36] dark:text-white">
                  Call Us Today
                </p>
                <p className="text-xs text-body-color">548-661-322</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="h-20">
        <div
          className={`z-99999 w-full bg-white transition-all duration-300 dark:bg-blacksection ${stickyMenu
            ? "fixed left-0 top-0 animate-sticky-slide-down py-2 shadow-md"
            : "relative py-4"
            }`}
        >
          <div className="relative mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:px-0">
            {/* Mobile Logo (Visible only on mobile) */}
            <div className="block w-full xl:hidden">
              <Link href="/">
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="logo"
                  width={119.03}
                  height={30}
                  className="hidden w-full dark:block"
                />
                <Image
                  src="/images/logo/logo-light.svg"
                  alt="logo"
                  width={119.03}
                  height={30}
                  className="w-full dark:hidden"
                />
              </Link>
            </div>

            {/* Hamburger Toggle BTN */}
            <button
              aria-label="hamburger Toggler"
              className="absolute right-4 block xl:hidden"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="absolute right-0 block h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-0 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "w-full! delay-300" : "w-0"
                      }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 w-full!" : "w-0"
                      }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "w-full! delay-500" : "w-0"
                      }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "h-0! delay-0" : "h-full"
                      }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "h-0! delay-200" : "h-0.5"
                      }`}
                  ></span>
                </span>
              </span>
            </button>

            {/* Nav Menu */}
            <div
              className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
                "navbar visible! absolute top-full left-0 w-full bg-white p-7.5 shadow-solid-5 dark:bg-blacksection h-auto max-h-[calc(100vh-80px)] overflow-y-auto xl:static xl:h-auto xl:max-h-none xl:p-0 xl:shadow-none xl:dark:bg-transparent"
                }`}
            >
              <nav>
                <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                  {menuData.map((menuItem, key) => (
                    <li
                      key={key}
                      className={menuItem.submenu && "group relative"}
                    >
                      {menuItem.submenu ? (
                        <>
                          <button
                            onClick={() => handleSubmenu(key)}
                            className="flex cursor-pointer items-center justify-between gap-3 font-bold text-[#64748b] hover:text-primary dark:text-white dark:hover:text-primary"
                            aria-expanded={openIndex === key}
                            aria-haspopup="true"
                          >
                            {menuItem.title}
                            <span>
                              <svg
                                className="h-3 w-3 cursor-pointer fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                              </svg>
                            </span>
                          </button>

                          <ul
                            className={`dropdown ${openIndex === key ? "flex" : ""
                              } xl:group-focus-within:visible xl:group-focus-within:opacity-100 xl:group-focus-within:translate-y-6.5`}
                          >
                            {menuItem.submenu.map((item, key) => (
                              <li key={key} className="hover:text-primary">
                                <Link href={item.path || "#"}>{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          href={`${menuItem.path}`}
                          className={
                            pathUrl === menuItem.path
                              ? "font-bold text-primary hover:text-primary"
                              : "font-bold text-[#64748b] hover:text-primary dark:text-white dark:hover:text-primary"
                          }
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right Side Actions */}
              <div className="mt-7 flex items-center gap-6 xl:mt-0">
                {/* Search Icon */}
                <button aria-label="search" className="text-[#64748b] hover:text-primary dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>

                {/* Cart Icon */}
                <Link href="#" className="relative text-[#64748b] hover:text-primary dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff3366] text-xs font-bold text-white">
                    0
                  </span>
                </Link>

                {/* Contact Us Button */}
                <Link
                  href="#"
                  className="hidden rounded-sm bg-[#FFD700] px-8 py-3 text-sm font-bold text-black transition-all hover:bg-opacity-90 xl:block"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;