import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <div className="bg-slate-900 dark:bg-slate-950 shadow-lg shadow-slate-900/20 text-slate-200 border-t">
      <footer className="footer sm:footer-horizontal text-base-content p-10">
        <aside>
          <Image src="./logo-figma.svg" alt="logo" width={48} height={48} />
          <p className="text-slate-100">
            S1Coder - s1coder (dot) com
            <br />© S1Coder {currentyear}
          </p>
        </aside>
        <nav className="hidden md:flex md:flex-col ">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="hidden md:flex md:flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
