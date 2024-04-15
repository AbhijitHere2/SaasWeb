import React from "react"; 

import Logo from '../images/Default.png'
import grp from '../images/Footer/Logog.png'


const Footer = () => {
  return (
    <div>
      <div className=" bg-black text-white flex justify-between max-sm:flex-col  ">
        <div className="w-[240px] mb-10 mt-5 mx-5">
          <div className="mt-2 m-2 ">
            <img src={Logo} alt="person" />
          </div>
          <div className="mt-3 m-2 text-sm font-normal text-gray-400 ">
            <span >
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website.
            </span>
          </div>
          <div className="flex mt-14 ">
            <img className="m-2" src={grp} />
         
          </div>
        </div>

        <div className="flex justify-evenly max-sm:flex-col mt-5 mx-5 ">

          <div className="mb-4  mx-5">
            <div>
              <a className="font-bold text-sm" href="#">
              Product{" "}
              </a>
            </div>

            <div className="font-normal text-gray-500 text-sm my-2">
              {" "}
              <a href="#">Features </a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              {" "}
              <a href="#">Integrations</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#">Update</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#">FAQ </a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#">Pricing </a>
            </div>
          </div>
          <div className="mb-4  mx-5">
            <div>
              <a className="font-bold text-sm" href="#">
                Company{" "}
              </a>
            </div>

            <div className="font-normal text-gray-500 text-sm my-2">
              {" "}
              <a href="#">about </a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              {" "}
              <a href="#">Blog</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#">Careers</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#">Manifesto </a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#"> Press</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#"> Contact</a>
            </div>
          </div>
          <div className="mb-4  mx-5">
            <div>
              <a className="font-bold text-sm" href="#">
                Resources{" "}
              </a>
            </div>

            <div className="font-normal text-gray-500 text-sm my-2">
              {" "}
              <a href="#"> Example</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              {" "}
              <a href="#">Community</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#">Guide</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#">Docs </a>
            </div>
          </div>
          <div className="mb-10  mx-5">
            <div>
              <a className="font-bold text-sm" href="#">
                Legal{" "}
              </a>
            </div>

            <div className="font-normal text-gray-500 text-sm my-2">
              {" "}
              <a href="#">Privacy </a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              {" "}
              <a href="#">Terms</a>
            </div>
            <div className="font-normal text-gray-500 text-sm my-2">
              <a href="#">Security</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
