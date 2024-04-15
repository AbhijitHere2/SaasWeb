import React from "react";
import ring from "../images/ring.png";
import prog1 from "../images/prog1.png";
import diamond from "../images/diamond.png";
import prog2 from "../images/prog2.png";
import arrow from "../images/arrow.png";
import prog3 from "../images/prog3.png";
import prog4 from "../images/prog4.png";
import prog5 from "../images/prog5.png";

import "./Progress.css";

const Progress = () => {
  return (
    <div className="">
      {" "}
      <div className=" mt-36 justify-center text-center items-center">
        <div className="text-center text-xs ">
          <span className="border-2 rounded-md p-1">
            Boost your productivity
          </span>
        </div>
        <div className="text-center justify-center items-center text-6xl font-bold mt-7  ">
          <h2
            id="head"
            className=" justify-center items-center  bg-slate-50 max-sm:text-4xl mx-4  pb-4"
          >
            A more effective way <br />
            to track progress
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
      <div className="bg-gradient-to-b from-white via-gray-100 to-blue-200  md:h-[1100px] ">
        <div className=" flex-col ">
          <img
            src={diamond}
            className="absolute right-0 max-sm:hidden  mt-32"
          />

          <img src={prog1} className="xl:ml-40" />

          <img src={ring} className="relative bottom-[380px] max-sm:hidden" />
          <div className="flex   max-lg:flex-wrap justify-evenly mx-8  max-sm:mt-5 relative top-0 md:top-[-200px]">
            <div className=" h-[225px] w-[260px]">
              <img src={prog2} />
              <h5 className="font-bold">Integration ecosystem</h5>
              <span className="text-lg ">
                Track your progress and motivate your efforts everyday.
              </span>
              <br />
              <button className="flex ">
                Learn more <img className=" pl-2 mt-2" src={arrow} />
              </button>
            </div>

            <div className="  h-[225px] w-[260px] mr-5">
              <img src={prog3} />
              <h5 className="font-bold">Goal setting and tracking</h5>
              <span>Set and track goals with manageable task breakdowns.</span>
              <br />
              <button className="flex ">
                Learn more <img className=" pl-2 mt-2" src={arrow} />
              </button>
            </div>

            <div className=" h-[225px] w-[260px] ">
              <img src={prog4} />
              <h5 className="font-bold">Secure data encryption</h5>
              <span>Ensure your data’s safety with top-tier encryption.</span>
              <br />
              <button className="flex ">
                Learn more <img className=" pl-2 mt-2" src={arrow} />
              </button>
            </div>

            <div className=" h-[225px] w-[260px]">
              <img src={prog5} />
              <h5 className="font-bold">Customizable notifications</h5>
              <span>Get alerts on tasks and deadlines that matter most.</span>
              <br />
              <button className="flex ">
                Learn more <img className=" pl-2 mt-2" src={arrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
