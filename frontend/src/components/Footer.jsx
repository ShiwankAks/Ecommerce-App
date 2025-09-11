import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div> 
    <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
      <div className="" >
        <img src={assets.logo} className="w-32 mb-4" alt="" />
        <p className=" text-gray-600 md:w-2/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="">
        <p className="  text-xl font-medium mb-4  ">COMPANY</p>
        <ul className=" text-gray-600 flex flex-col gap-1 ">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      
      <div className="">
        <p className="  text-xl font-medium mb-4  ">GET IN TOUCH</p>
      <ul className=" text-gray-600 flex flex-col gap-1 ">
        <li>+1-000-000-0000</li>
        <li>contact@now.com</li>
        <li className="cursor-pointer">Instagram</li>
      </ul>
      </div>
    </div>
    <div>
        <hr className="bg-gray-500"/>
        <p className=" text-center text-sm py-5 ">COPYRIGHT 2025@ now.com - All Right Reserved</p>
    </div>
    </div>
  );
};

export default Footer;
