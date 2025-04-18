
import React from "react";

const CompanyStory = () => {
  return (
    <div className="flex flex-col xl:flex-row md:flex-col gap-6 justify-center items-center px-4 md:px-10 lg:px-20 xl:px-40 py-10">
      {/* Video Section */}
      <div className="flex justify-center w-full md:w-full">
        <video autoPlay controls className="rounded-xl w-full max-w-lg">
          <source src="./v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-center xl:text-left">
        <div className="text-2xl md:text-4xl font-bricolage font-bold">
          Why S1Coder?
        </div>
        <div className="text-sm md:text-base font-bricolage mt-4">
          S1Coder is an AI-powered customer platform with all the software,
          integrations, and resources you need to connect your marketing, sales,
          and customer service. HubSpot's connected platform enables you to grow
          your business faster by focusing on what matters most: your customers.
          Get a demo to learn about our premium software, or get started with
          our full suite of free tools and upgrade as you grow.
        </div>
      </div>
    </div>
  );
};

export default CompanyStory;
