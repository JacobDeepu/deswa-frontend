import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          DESWA is your go-to platform for hassle-free home services. We offer a variety of services, from cleaning and plumbing to carpentry and appliance repair, all brought to your doorstep. Our user-friendly app lets you book and track services at your convenience.

We take pride in delivering high-quality, standardized, and reliable experiences. Our team of skilled professionals ensures that you get top-notch service every time. Say goodbye to the stress of finding reliable service providers – we bring the expertise to you.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>
      <div className='leading-8 px-5 text-justify'>
        <p>
        At DESWA, we understand the value of your time and comfort. That's why our platform is designed to be simple and transparent. You can relax at home while we take care of your essential service needs. We prioritize customer satisfaction, continuously improving and staying ahead in the industry.
        </p>
        <div></div>
        <p>
        Trust DESWA for not just services, but a seamless and reliable home service experience that exceeds expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
