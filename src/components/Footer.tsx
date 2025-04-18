import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <hr className="" style={{ display: "block" }}></hr>
      <footer className="w-full font-bricolage">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <Link href="/" className="flex justify-center lg:justify-start">
                <img
                  className="h-8 w-auto"
                  src="./logo-figma.svg"
                  alt="S1Coder"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
