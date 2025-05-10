import { X } from "lucide-react";
import PaymentBtn from "../buttons/payment";
export default function AddressForm({
  handleClose,
}: {
  handleClose: (data: boolean) => void;
}) {
  return (
    <>
      <div
        className="card bg-base-100 w-2xl shadow-sm p-6 relative"
        id="addressForm"
        //To fix conflict beheviour use stop propagation() https://www.youtube.com/watch?v=CBuxqDqBnb4
        // https://react.dev/learn/responding-to-events
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-2xl">Fill the address</span>
        <form>
          <div className="absolute top-2 right-2 cursor-pointer">
            <X
              onClick={() => {
                handleClose(false);
              }}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div>
              <label
                htmlFor="address1"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address1"
                className="input w-full"
                placeholder="Enter your street address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address2"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Address Line 2
              </label>
              <input
                type="text"
                id="address2"
                className="input w-full"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
            <div className="flex flex-row gap-3">
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className="input w-full"
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="state"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="state"
                  id="city"
                  className="w-full input"
                  placeholder="Enter your state"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="w-full">
                <label
                  htmlFor="pincode"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  PIN Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="pincode"
                  className="input w-full"
                  placeholder="Enter PIN Code"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="country"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  className="input w-full"
                  placeholder="Enter your country"
                  required
                />
              </div>
            </div>
          </div>
          <PaymentBtn name="Continue" />
        </form>
      </div>
    </>
  );
}
