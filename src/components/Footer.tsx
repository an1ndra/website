import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <div>
      <hr className="" style={{ display: "block" }}></hr>
      {/* <footer className="w-full font-bricolage">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <Link href="/" className="flex justify-center lg:justify-start">
                <Image
                  className="h-8 w-auto"
                  src="./logo-figma.svg"
                  alt="S1Coder"
                  width={0}
                  height={0}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer> */}

      <footer className="bg-white shadow-sm dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentyear}{" "}
            <Link href="#" className="hover:underline">
              S1Coder™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
