import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const UserStorey = () => {
  return (
    <div className="bg-white">
      <div className="md:flex md:justify-center items-center md:ml-72  md:mr-72 bg-white p-2">
        <div className="md:w-2/6 md:p-4 flex md:flex-col flex-row p-2 justify-center">
          <Image
            src="/output.png"
            alt="picture"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="md:flex md:justify-end hidden">
            <ChevronLeft
              className="bg-blue-700 hover:bg-blue-800 hover:text-slate-400"
              color="#ffff"
            />
            <ChevronRight
              className="bg-blue-700 hover:bg-blue-800 hover:text-slate-400"
              color="#ffff"
            />
          </div>
        </div>
        <div className="md:w-5/6 p-4">
          <div className="text-3xl font-bold mb-4 dark:text-slate-800">
            Why I Created S1Coder
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              After 10+ years as a software engineer at leading tech companies,
              I noticed a gap in coding education. Most platforms either
              overwhelm beginners or don't provide enough depth for advanced
              learners.
            </p>
            <p className="text-gray-600 mb-6">
              S1Coder is built on my experience teaching thousands of developers
              through workshops and mentorship programs. My approach focuses on
              structured learning paths with practical challenges that mirror
              real-world scenarios.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex">
              <Star className="h-5 w-5 text-yellow-400" fill="#facc15" />
              <Star className="h-5 w-5 text-yellow-400" fill="#facc15" />
              <Star className="h-5 w-5 text-yellow-400" fill="#facc15" />
              <Star className="h-5 w-5 text-yellow-400" fill="#facc15" />
              <Star className="h-5 w-5 text-yellow-400" fill="#facc15" />
            </div>
            <div>
              <span className="text-sm text-gray-500">
                "John's teaching methodology transformed how I approach coding
                problems."
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStorey;
