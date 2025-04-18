import { Calendar } from "lucide-react";
import Link from "next/link";
export default function BodyDetails() {
  return (
    <div className="flex flex-col pb-20">
      {/* Hero section */}
      <section>
        <Link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <div className="flex flex-col items-center justify-center min-h-max text-center mt-20 mb-20 bcr font-bricolage font-bold">
          {" "}
          <div className="">
            {" "}
            <div className="inline-block bg-blue-500/20 text-blue-300 text-sm px-4 py-1 rounded-full mb-6">
              {" "}
              🚀 Just Launched!
            </div>
          </div>
          <span className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
            Master Coding with{" "}
            <span className="relative text-blue-600">Step-by-Step</span>{" "}
            Tutorials, Challenges, and{" "}
            <span className="text-slate-100">Roadmaps!</span>
          </span>
          <div className="md:text-xl text-base font-sans font-normal md:ml-80 ml-3 md:mr-80 mr-3 text-slate-100 mt-5">
            Learn to code with structured guidance, practical challenges, and
            clear roadmaps designed to take you from beginner to professional
            developer.
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
          focus:ring-blue-300 font-medium rounded-lg md:text-lg text-base px-5 py-2.5 me-2 mb-2
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get your course now with 25% discount!
            </button>
            <span className="flex justify-center text-blue-200">
              Limited time offer for founding members
            </span>
          </div>
        </div>
      </section>
      {/* For Join */}
      <section>
        <center>
          <div className="flex justify-center mt-12">
            <div className="bg-white/10  backdrop-blur-sm rounded-lg p-4 inline-flex items-center">
              <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                <Calendar className="h-5 w-5 text-blue-300" />
              </div>
              <div className="text-sm text-left">
                <span className="block text-blue-200 font-medium">
                  Join our growing community
                </span>
                <span className="text-gray-300">
                  Be one of the first to master coding
                </span>
              </div>
            </div>
          </div>
        </center>
      </section>
    </div>
  );
}
