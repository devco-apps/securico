"use client";

import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="border-t-8 border-primary bg-secondary text-white">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <FooterTop />
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
