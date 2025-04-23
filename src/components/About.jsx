'use client';
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import astronaut from "../assets/profile.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    className='xs:w-[250px] w-full'
    glareEnable={true} 
    glareMaxOpacity={0.8} 
    glareColor="#ffffff" 
    glarePosition="bottom" 
    glareBorderRadius="20px"
    tiltMaxAngleX={30} 
    tiltMaxAngleY={30} 
    tiltEnable={true} 
    perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='relative'>
        <div className="flex flex-col lg:flex-row items-center gap-4"> {/* Reduced gap from gap-8 to gap-4 */}
          {/* Left side - Content */}
          <div className="flex-1">
            <motion.div variants={textVariant()}>
              <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
              <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview.</h2>
            </motion.div>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
            >
              I'm a driven and results-oriented software engineer with a strong foundation in full-stack web and mobile development. My expertise spans Python, Django, JavaScript, and the MERN stack (MongoDB, Express.js, React.js, Node.js), empowering me to build scalable, efficient, and user-centric applications. I'm passionate about turning complex challenges into intuitive digital solutions, always aiming to deliver high-quality software that meets real-world needs.
            </motion.p>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
  <div className="relative h-80 w-80 lg:h-96 lg:w-96 rounded-lg overflow-hidden bg-gray-100/10 backdrop-blur-sm border border-gray-200/30 shadow-sm">
    <Image 
      src={astronaut} 
      alt="astronaut" 
      className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300" 
      priority
    />
  </div>
</div>
        </div>
      </div>

      <div className='mt-20 flex-wrap justify-center gap-10 hidden md:flex'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");