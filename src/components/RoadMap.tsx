import React from "react";
// import { Badge } from "./ui/badge";

const RoadMap = () => {
  return (
    <div>
      <section className="py-16" id="roadmap">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Your Learning Roadmap
            </h2>
            <p className=" max-w-2xl mx-auto dark:text-slate-200 text-slate-700">
              Our structured approach guides you from fundamentals to advanced
              concepts with a clear path to mastery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Build Your Foundation",
                description:
                  "Master the core concepts of web development with HTML, CSS, and JavaScript",
                status: "Available Now",
              },
              {
                step: 2,
                title: "Frontend Frameworks",
                description:
                  "Learn modern frameworks like React and Next.js to build interactive applications",
                status: "Coming Q2 2025",
              },
              {
                step: 3,
                title: "Backend Development",
                description:
                  "Create APIs and server-side applications with Node.js and databases",
                status: "Coming Q3 2025",
              },
              {
                step: 4,
                title: "Full-Stack Mastery",
                description:
                  "Combine frontend and backend skills to build complete applications",
                status: "Coming Q4 2025",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative flex items-start mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center mr-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                      i === 0
                        ? "bg-blue-500 text-slate-700 dark:text-slate-200"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {step.step}
                  </div>
                  {i < 3 && <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>}
                </div>
                <div
                  className={`p-6 rounded-lg dark:text-gray-700 ${
                    i === 0
                      ? "bg-blue-50 border border-blue-100 dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-800"
                  }`}
                >
                  <h3 className="font-bold text-xl mb-2 dark:text-slate-200 text-slate-700">
                    {step.title}
                  </h3>
                  <p className=" mb-3 dark:text-slate-200 text-slate-700">
                    {step.description}
                  </p>
                  <div className="badge badge-soft badge-secondary dark:text-slate-200 text-slate-700">
                    {step.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
