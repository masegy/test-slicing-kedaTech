import React from "react";

export default function Modal({ setIsOpen, isOpen }) {
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={`fixed z-[9999] inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 transition-opacity"
          onClick={handleCloseModal}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all max-w-lg w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="relative">
              <h3
                className="text-lg leading-6 font-medium text-gray-900 flex justify-center"
                id="modal-headline"
              >
                Sign in
              </h3>
              <div className="mt-2">
                <form className="sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="mt-1">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="email"
                    >
                      Email address
                    </label>
                    <input
                      className="w-full mt-1 form-input border border-gray-300 rounded-md"
                      id="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full mt-1 form-input border border-gray-300 rounded-md"
                      id="password"
                      type="password"
                      required
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
