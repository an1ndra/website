import { Zap, Users, BarChart3, Check } from "lucide-react";

export default function PricingSection() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
          Unlock your knoledge
        </h2>
        <p className=" max-w-2xl mx-auto text-slate-800 dark:text-slate-200">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your SaaS.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-8 mt-12">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-2 rounded-lg h-fit">
                <Zap className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Unlimited Components:</h3>
                <p className="">
                  Clarity gives you the blocks & components you need to create a
                  website.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-2 rounded-lg h-fit">
                <Users className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Team Account:</h3>
                <p className="">
                  Clarity gives you the blocks & components you need to create a
                  website.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-2 rounded-lg h-fit">
                <BarChart3 className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Daily Reports:</h3>
                <p className="">
                  Clarity gives you the blocks & components you need to create a
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="card bg-base-100 shadow-xl border border-gray-100">
            <div className="card-body p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="card-title text-2xl font-bold text-slate-800 dark:text-slate-100">
                    Pro Plan
                  </h2>
                  <p className="">Our most popular plan</p>
                </div>
                <div className="text-right">
                  <span className="text-5xl font-bold">₹499</span>
                  <span className="">/mo/user</span>
                </div>
              </div>

              <div className="divider my-6">EVERYTHING IN FREE, PLUS:</div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>Full Access to Landingfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>Full Access to Landingfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>100 GB Free Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>100 GB Free Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>Unlimited Visitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>Unlimited Visitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>10 Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>10 Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>Live Chat Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm p-3 rounded-full">
                    <Check size={12} />
                  </div>
                  <span>Live Chat Support</span>
                </div>
              </div>

              <div className="card-actions mt-8">
                <button className="btn btn-primary w-full ">
                  Create account now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
