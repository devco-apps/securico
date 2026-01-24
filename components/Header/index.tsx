"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import CTAButton from "@components/Buttons/CTAButton";

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
    <header className="absolute z-99999 w-full">
      {/* Top Bar */}
      <div className="hidden border-b border-stroke py-4 dark:border-strokedark dark:bg-secondary xl:block">
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
                src="/images/logo/logo-light-1.webp"
                alt="logo"
                width={409.7}
                height={103.6}
                className="w-full dark:hidden"
              />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-10">
            {/* Mail Us */}
            <div className="flex items-center gap-4">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-white dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white dark:text-white">
                  Mail Us
                </p>
                <a href="mailto:info@securico.co.zw" className="text-xs text-white">
                  info@securico.co.zw
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-white dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white dark:text-white">
                  WhatsApp
                </p>
                <a href="https://wa.me/263786491684" className="text-xs text-white">
                  +263 786 491684
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-white dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white dark:text-white">
                  Call Us Today
                </p>
                <a href="tel:+263242621956" className="text-xs text-white">
                  +263 242 621956/7
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="h-20">
        <div
          className={`z-99999 w-full  transition-all duration-300 dark:bg-secondary ${stickyMenu
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
                "navbar visible! absolute top-full left-0 w-full bg-white p-7.5 shadow-solid-5 dark:bg-secondary h-auto max-h-[calc(100vh-80px)] overflow-y-auto xl:static xl:h-auto xl:max-h-none xl:p-0 xl:shadow-none xl:dark:bg-transparent"
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
                            className="flex cursor-pointer items-center justify-between gap-3 font-bold text-[#fbfbfb] hover:text-primary dark:text-white dark:hover:text-primary"
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
                              : "font-bold text-[#fbfbfb] hover:text-primary dark:text-white dark:hover:text-primary"
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
                {/* Call to action button */}

                <CTAButton>ENQUIRE NOW</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;