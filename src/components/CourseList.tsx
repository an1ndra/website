import React from "react";
import Image from "next/image";
import {
  CheckCircle,
  Search,
  Calendar,
  BookOpen,
  Code,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";

const CourseList = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50" id="courses">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-700">
              Explore Our Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your journey with our flagship course, with more exciting
              topics coming soon to help you build a complete skill set.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Current Course */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Web Development Fundamentals"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  Available Now
                </div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>12 Modules</span>
                  <span className="mx-2">•</span>
                  <span>Beginner</span>
                </div>
                <h3 className="font-bold text-xl mb-2 dark:text-gray-700">
                  Git And GitHub
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of Git for version control and GitHub for
                  collaboration.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex -space-x-1 mr-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs "
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span>Early access students</span>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center">
                  <span>Enroll Now</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Coming Soon Courses */}
            {[
              {
                id: 2,
                modules: 5,
                level: "Beginner",
                title: "React Components",
                description:
                  "Create React Components using latest Vite and Tailwindcss.",
                icon: <Code className="h-10 w-10 text-blue-400" />,
              },
              {
                id: 3,
                modules: 7,
                level: "Beginner",
                title: "Wrok With Tailwindcss",
                description: "Way to intregate Tailwindcss in any project.",
                icon: <Zap className="h-10 w-10 text-blue-400" />,
              },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col dark:text-gray-700"
              >
                <div className="p-6 flex-grow">
                  <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {course.icon}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{course.modules} Modules</span>
                    <span className="mx-2">•</span>
                    <span>{course.level}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium flex items-center justify-center">
                    <span>Get Notified</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseList;
