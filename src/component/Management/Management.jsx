import React from "react";
import helix from "../images/helix.png";
import cube from "../images/cube.png";

import "./Management.css";

const Managment = () => {
  return (
    <div className="mt-24 m-4 ">
      <div className=" mt-36 justify-center text-center items-center">
        <div className="text-center text-xs ">
          <span className="border-2 rounded-md p-1">Everything you need</span>
        </div>
        <div className="text-center justify-center items-center text-6xl font-bold mt-7  ">
          <h2
            id="head"
            className=" justify-center items-center  bg-slate-50 max-sm:text-4xl mx-4  pb-3"
          >
            Streamlined for easy <br />
            management
          </h2>
        </div>
        <div className="text-center text-2xl mt-5 bg-transparent max-sm:text-2xl mx-4  ">
          <span id="para">
            Enjoy customizable lists, team work tools, and smart
            <br />
            tracking all in one place. Set tasks, get reminders, and
            <br />
            see your progress simply and quickly.
          </span>
        </div>
      </div>
      <div className="flex max-sm:flex-col mt-5 text-center justify-evenly  ">
        <div className=" w-[486px] h-[538px] bg-neutral-50  max-sm:w-auto rounded-2xl mr-3 mt-5 shadow-xl hover:shadow-slate-500" >
          <img  className=" lg:ml-[92px] w-[329px] h-[329px]  max-lg:pl-5 py-5  max-sm:ml-5" src={helix} />
          <h5 className="font-bold text-[26px] mb-4 " id="head">Integration ecosystem</h5>
          <span className="text-base font-normal  ">
            Enhance your productivity by connecting  <br />with your favorite tools,
            keeping all your <br /> essentials in one place.
          </span>
          <br />
        </div>

        <div className=" w-[486px] h-[538px] bg-neutral-50 max-sm:w-auto rounded-2xl mt-5 shadow-xl hover:shadow-slate-500 " >
          <img   className=" lg:ml-[91px]  w-[329px] h-[329px] max-lg:pl-5 py-5 max-sm:ml-5"  src={cube} />
          <h5 className="font-bold text-[26px] mb-4"  id="head">Goal setting and tracking</h5>
          <span className="text-base font-normal  ">
            Define and track your goals, breaking down <br /> objectives into
            achievable tasks to keep your <br /> targets in sight.
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Managment;
