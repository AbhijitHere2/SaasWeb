import React from "react";
import './SignUp.css'
import star from '../images/SignUp/emojistar.png'
import helix from '../images/SignUp/helix2.png'

const SignUp = () => {
  return (
    <div className="bg-gradient-to-b from-white  to-blue-200  h-[472px] mt-28  ">
      <div className="row-auto py-10  items-center  text-center ">


        <div>

            <img  className="max-lg:hidden absolute " src={star} alt="pic" />
            
        </div>

  

       <div className="text-center text-[54px] font-bold mx-24  max-sm:text-[32px] max-sm:font-semibold mt-10    ">
          <h2 id="head" className="font-sans">
            Sign up for free today
          </h2>
        </div>
        <div className="text-center text-[16px] font-normal mt-5 mx-16">
          <span id="para">
            Celebrate the joy of accomplishment with an app designed
            <br />
            to track your progress and motivate your efforts.
          </span>
        </div>
        <div className="  font-bold font-sans text-center text-white-800 flex  justify-center ">
          <button className=" px-6 py-2 mt-10 mb-11  font-medium text-center bg-black rounded-xl border-2 hover:text-black hover:bg-white border-black text-white max-md:px-5 max-md:mt-10">
            Get for free
          </button>
          <button className=" flex text-[16px] font-medium my-12 ml-2 ">
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 ml-2 mt-1 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
     


       </div>



           <div>
            <img className="max-lg:hidden absolute right-0 mt-[-250px] " src={helix} alt="pic" />
           </div>







      </div>
    </div>
  );
};

export default SignUp;
