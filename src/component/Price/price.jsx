import React from "react";

import Version from "../images/Version.png";

const price = () => {
  return (
    <div className="mt-10 p-5 ">
      <div className=" mt-36 justify-center text-center items-center">
        <div className="text-center text-xs ">
          <span className="border-2 rounded-md p-1">
            Boost your productivity
          </span>
        </div>
        <div className="text-center justify-center items-center text-6xl font-bold mt-7  ">
          <h2
            id="head"
            className=" justify-center items-center  bg-slate-50 max-sm:text-4xl mx-4  pb-3"
          >
            A more effective way <br /> to track progress
          </h2>
        </div>
        <div className="text-center text-2xl mt-5 bg-transparent max-sm:text-2xl mx-4  ">
          <span id="para">
            Effortlessly turn your ideas into a fully functional,
            <br />
            responsive, no-code SaaS website in just minutes with
            <br />
            the set of free components for Framer.
          </span>
        </div>
      </div>

      <div className="lg:flex ml-10 max-sm:ml-5 relative justify-center  ">
        <div className="flex flex-wrap  justify-evenly my-7 mx-2 max-sm:flex-col relative top-[228px] max-lg:top-0">
          <div className="bg-white-100 hover:bg-gray border-2 w-[351px] h-[501px] hover:text-white hover:bg-black shadow-black hover:shadow-2xl mt-3 rounded-2xl ">
            <div className=" w-[271px] h-[424px] my-10 mx-10 ">
              <div className="   mt-2 ">
                <p className="text-sm font-semibold text-gray-600  ">Free</p>
              </div>
              <div className=" mt-6 ">
                <p className="font-bold text-5xl">
                  $0
                  <span className="font-medium text-lg text-gray-600">
                    /monthly
                  </span>{" "}
                </p>
              </div>
              <div className="  font-bold font-sans text-center text-white-800">
                <button className=" px-16 py-2 mt-10 mb-11  font-medium text-center bg-black rounded-xl border-2  hover:bg-white hover:text-black border-solid text-white max-md:px-5 max-md:mt-10">
                  Get started for free
                </button>
              </div>

              <div className="flex mt-3">
                <div className="flex  mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Up to 5 project members</span>
              </div>
              <div className="flex  mt-3">
                <div className="flex mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Unlimited tasks and projects</span>
              </div>
              <div className="flex  mt-3">
                <div className="flex mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>2GB storage</span>
              </div>
              <div className="flex   mt-3">
                <div className="flex mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Integrations</span>
              </div>
              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span>Basic support</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex   justify-evenly my-7 mx-2 max-sm:flex-col relative top-[128px] max-lg:top-0 ">
          <div className="  w-[351px] h-[603px]   hover:bg-gray border-2 hover:text-white hover:bg-black  shadow-black hover:shadow-2xl mt-3 rounded-2xl ">
            <div className=" w-[271px] h-[520px] mx-10  my-10 ">
              <div className=" flex justify-between  mt-2 ">
                <p className="text-sm font-semibold text-gray-600  ">Pro</p>
                <button className="border-[0.5px] border-gray-600 py-2 px-2 rounded-xl">
                  <img src={Version} />
                </button>
              </div>
              <div className=" mt-4 ">
                <p className="font-bold text-5xl">
                  $9
                  <span className="font-medium text-lg text-gray-600">
                    /monthly
                  </span>{" "}
                </p>
              </div>

              <div className="  font-bold font-sans text-center text-white-800">
                <button className=" px-20 py-2 mt-10 mb-11  font-medium text-center bg-black rounded-xl border-2  hover:bg-white hover:text-black border-solid text-white max-md:px-5 max-md:mt-10">
                  Sign up now
                </button>
              </div>

              <div className="flex mt-3">
                <div className="flex  mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Up to 50 project members</span>
              </div>
              <div className="flex  mt-3">
                <div className="flex mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Unlimited tasks and projects</span>
              </div>

              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>50GB storage</span>
              </div>

              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Integrations</span>
              </div>

              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Priority support</span>
              </div>
              <div className="flex  mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span>Advanced support</span>
              </div>
              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span>Export support</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex   justify-evenly my-7 mx-2 max-sm:flex-col  ">
          <div className="  w-[351px] h-[728px]   hover:bg-gray border-2 hover:text-white hover:bg-black  shadow-black hover:shadow-2xl mt-3 rounded-2xl ">
            <div className=" w-[271px] h-[644px] mx-10  my-10 ">
              <div className=" flex justify-between  mt-2 ">
                <p className="text-sm font-semibold text-gray-600  ">
                  Business
                </p>
              </div>
              <div className=" mt-4 ">
                <p className="font-bold text-5xl">
                  $19
                  <span className="font-medium text-lg text-gray-600">
                    /monthly
                  </span>{" "}
                </p>
              </div>

              <div className="  font-bold font-sans text-center text-white-800">
                <button className=" px-20 py-2 mt-10 mb-11  font-medium text-center bg-black rounded-xl border-2  hover:bg-white hover:text-black border-solid text-white max-md:px-5 max-md:mt-10">
                  Sign up now
                </button>
              </div>

              <div className="flex mt-3">
                <div className="flex  mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Up to 5 project members</span>
              </div>
              <div className="flex  mt-3">
                <div className="flex mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Unlimited tasks and projects</span>
              </div>

              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>200GB storage</span>
              </div>

              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Integrations</span>
              </div>

              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>Dedicated account manager</span>
              </div>
              <div className="flex  mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span>Custom fields</span>
              </div>
              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span>Advanced analytics</span>
              </div>
              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span>Export capabilities</span>
              </div>
              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span>API access</span>
              </div>
              <div className="flex  mt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <span>Advanced security features</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default price;
