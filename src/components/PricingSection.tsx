import { Zap, Users, BarChart3, Check } from "lucide-react";
import BuyBtn from "./buttons/buy";
import { useState } from "react";
import AddressForm from "./AddressForm/addressForm";

export default function PricingSection() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = (data: boolean) => {
    setShowModal(data);
  };
  return (
    <div className="dark:bg-slate-950">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Unlock your knowledge
          </h2>
          <p className=" max-w-2xl mx-auto text-slate-800 dark:text-slate-200">
            Get direct access to project files, code snippets, supplementary and
            many more premium materials.
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
                  <h3 className="font-semibold text-lg">
                    Unlimited Components:
                  </h3>
                  <p className="">
                    No limits—code smarter with instant access to everything!
                    Upgrade now!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 rounded-lg h-fit">
                  <Users className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Team Connect:</h3>
                  <p className="">
                    Unlock teamwork features—upgrade now and build stronger,
                    faster!
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
                    Upgrade to see detailed stats, streaks, and personalized
                    recommendations to level up faster!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="card bg-base-100 border border-gray-100 shadow-md shadow-blue-500/50">
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
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>Unlimited Practice Problems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>Full Access to Landingfolio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>Real-World Project Examples</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>Downloadable Resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>Priority Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>Private Community Groups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>AI Chatbot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>Higher Quality Video/Content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="badge bg-blue-600 badge-sm p-3 rounded-full">
                      <Check size={12} />
                    </div>
                    <span>Progress Tracking and Analytics</span>
                  </div>
                </div>

                <div
                  className="card-actions mt-8"
                  onClick={() => setShowModal(true)}
                >
                  <BuyBtn name="Create account now" />
                  <div>
                    {/*For Address Form*/}
                    <div>
                      {showModal && (
                        <div
                          className="fixed bg-black/80 min-h-screen z-10 w-full flex justify-center items-center top-0 left-0 "
                          onClick={() => setShowModal(false)}
                        >
                          <AddressForm handleClose={handleClose} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
