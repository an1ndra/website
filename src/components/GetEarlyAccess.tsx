import React from "react";

const GetEarlyAccess = () => {
  return (
    <div>
      <div className="bg-blue-500 text-white pt-10 pb-10" id="early-access">
        <center>
          <div className="flex flex-col justify-center">
            <h2 className="md:text-3xl text-2xl font-bold">
              Be Part of Our Journey
            </h2>
            <p className="md:text-xl text-base md:w-8/12 self-center">
              Join S1Coder today and help shape the future of our platform.
              Early members get exclusive benefits and direct input on upcoming
              courses.
            </p>
          </div>
        </center>
        <form action="#">
          <div className="flex flex-col justify-center md:flex-row p-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="mb-2 md:mb-0 md:mr-4 text-slate-800 text-base rounded-lg p-2 font-medium md:w-3/12"
            />
            <button>
              Get early access
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetEarlyAccess;
