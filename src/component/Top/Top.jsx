import React from "react";

const Top = () => {
  return (
    <div>
      <div
        className=" bg-black text-center flex items-center
    px-[110px] py-[14px] w-screen h=[46px] fixed top-0  justify-center z-50 "
      >
        <div className="flex items-center  w-[310px] h-[18px] max-lg:hidden">
          <span className=" text-gray-400 font-normal font-[DM sans] text-sm  ">
            {" "}
            This page is included in a free SaaS Website Kit.{" "}
          </span>{" "}
        </div>
        <div className=" flex h=[18px]  ">
          {" "}
          <a
            className=" text-white font-normal font-[DM sans] gap-2 text-sm max-sm:flex-none max-sm:p-0 "
            href="#"
          >
            View the complete Kit
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-white ml-1  mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Top;
