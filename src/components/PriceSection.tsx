import CoreDiveBtn from "./buttons/core";
import GrowthPlanBtn from "./buttons/growth";

export default function ProceSection() {
  return (
    <div className="bg-slate-50">
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto ">
        <div className="card bg-slate-600 p-4 w-96 shadow-sm ">
          {" "}
          <p className="uppercase text-sm font-medium text-slate-100">
            Starter
          </p>
          <p className="mt-4 text-3xl text-slate-100 font-medium">Free</p>
          <p className="mt-4 font-medium text-slate-100">
            All basics tutorial and questions
          </p>
          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-slate-100">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                No limits
              </li>

              <li className="inline-flex items-center text-slate-100">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Weekly email notification
              </li>

              <li className="inline-flex items-center text-slate-100">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Free 720p videos
              </li>

              <li className="inline-flex items-center text-slate-100">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Discord community support
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <GrowthPlanBtn name="Create Free Account" />
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <p className="uppercase text-sm font-medium text-slate-100">
            Standard
          </p>

          <p className="mt-4 text-3xl text-slate-100 font-medium">
            ₹799 <span className="text-base font-normal">/month</span>
          </p>

          <p className="mt-4 font-medium text-slate-100">
            When free quota fully used
          </p>

          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-slate-100">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                30 days validation
              </li>

              <li className="inline-flex items-center text-slate-100">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Daily reminder email notification
              </li>

              <li className="inline-flex items-center text-slate-100">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Leetcode daily question solution
              </li>
              <li className="inline-flex items-center text-slate-100">
                <svg
                  className="w-4 h-4 mr-2 fill-current text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Unlimited video hours
              </li>
            </ul>
          </div>

          <div className="mt-8 relative rela">
            <CoreDiveBtn name="Join Waitlist" />
            <div className="badge badge-secondary absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
              25% Discount
            </div>
          </div>
        </div>
        <div className=" bg-slate-100 h-max w-max"></div>
      </div>
    </div>
  );
}
