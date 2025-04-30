// TODO: Add subscription form for payment method
// TODO: After clicking button directly redirect user to payment page
// TODO: Save generated details in Postgres(Neon) using drizzle
"use client";

export default function SubscriptionForm({ formValue }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formValue(formData);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row m-2">
            <div className="w-1/2 m-2">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                aria-label="disabled input"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="Anindra"
                disabled
              />
            </div>
            <div className="w-1/2 m-2">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                aria-label="disabled input"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="Karmakar"
                disabled
              />
            </div>
          </div>

          <div className="flex flex-row m-2">
            <div className="w-1/2 m-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                aria-label="disabled input"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="anindra@mail.com"
                disabled
              />
            </div>
            <div className="w-1/2 m-2">
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Zipcode
              </label>
              <input
                type="text"
                id="zipcode"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="Zipcode"
                required
              />
            </div>
          </div>

          <div className="m-4">
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Street
            </label>
            <textarea
              id="street"
              className="my-2 shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light w-full"
              placeholder="Street"
              required
            />
          </div>

          <div className="flex flex-row mb-4">
            <div className="w-1/2 ml-4 mr-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                City
              </label>
              <select
                name="city"
                id="city"
                className="p-2.5 cursor-pointer shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              >
                <option value="c1">c1</option>
                <option value="c2">c2</option>
              </select>
            </div>
            <div className="w-1/2 ml-2 mr-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                State
              </label>
              <select
                name="state"
                id="state"
                className="p-2.5 cursor-pointer shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              >
                <option value="s1">s1</option>
                <option value="s1">s2</option>
              </select>
            </div>
          </div>

          <div className="m-4 mt-10">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full cursor-pointer"
            >
              Go to payment
            </button>
            <span className="text-xs text-slate-500">
              * To update your first name, last name and email go to profile
              setting.
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
