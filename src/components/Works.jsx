'use client';

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { experiences, projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { HiLink } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";

// Experience Card Component
const ExperienceCard = ({ index, title, company_name, icon, iconBg, date, points }) => {
  return (
    <div className='bg-tertiary bg-opacity-70 p-8 rounded-2xl w-full mb-8'>
      <div className="flex items-start gap-6">
        <div 
          className="w-20 h-20 rounded-full flex-shrink-0 flex justify-center items-center"
          style={{ backgroundColor: iconBg }}
        >
          <Image
            src={icon}
            alt={company_name}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className='text-white font-bold text-2xl'>{title}</h3>
              <p className='text-secondary text-xl font-semibold'>{company_name}</p>
            </div>
            <p className="text-gray-300 font-medium text-lg bg-black bg-opacity-50 px-3 py-1 rounded-lg">
              {date}
            </p>
          </div>
          
          <ul className="mt-6 space-y-3">
            {points.map((point, index) => (
              <li 
                key={`experience-point-${index}`}
                className="text-gray-300 text-lg pl-5 relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-secondary before:rounded-full"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  features,
  live_link,
}) => {
  return (
    <div className='bg-tertiary bg-opacity-70 p-5 rounded-2xl gap-4'>
      <h3 className='text-white font-bold text-[28px] flex gap-2 items-center my-2'>
        {name}
        <HiLink size={15} />
      </h3>
      
      <div className='lg:flex gap-10 lg:flex-row lg:justify-between lg:items-center'>
        <Tilt className='lg:w-[90%] lg:h-[90%] w-full h-full'>
          <div className='relative cursor-pointer flex justify-between transition-all duration-500'>
            <img
              src={image.src}
              alt='project_image'
              className='h-full w-full object-cover rounded-2xl'
            />
          </div>
        </Tilt>
        
        <div className='flex sm:flex lg:flex-col gap-8 mt-3'>
          <button 
            onClick={() => window.open(live_link, "_blank")} 
            className="text-gradient lg:w-[10%] flex justify-center"
          >
            <p className="font-semibold text-sm lg:text-[24px] hover:scale-105 transition-all duration-200 flex gap-2 items-center p-3 border-2 rounded-full border-secondary text-[#915EFF]">
              <HiLink size={30} />
            </p>
          </button>
          
          <button 
            onClick={() => window.open(source_code_link, "_blank")} 
            className="text-gradient lg:w-[10%] flex justify-center"
          >
            <p className="text-white font-semibold text-sm lg:text-[24px] hover:scale-105 transition-all duration-200 flex gap-2 items-center p-3 border-2 rounded-full border-secondary hover:bg-black">
              <ImGithub size={30} className="text-[#915EFF]" />
            </p>
          </button>
        </div>
      </div>

      <div>
        <div className='mt-5'>
          <p className='mt-2 text-gray-300 text-[19px] font-semibold mb-2'>{description}</p>
          <ul className="list-disc text-sm text-gray-300 ml-3">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>

        <div className='mt-4 flex flex-wrap gap-3'>
          {tags.map((tag) => (
            <p 
              title={tag.name}
              key={`${name}-${tag.name}`}
              className={`text-[17px] font-semibold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const WorksAndExperience = () => {
  return (
    <div className="relative z-0">
<div className='relative mt-20'>
  <div className='relative mb-20'>
    <div>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </div>

    <div className='w-full flex flex-col lg:flex-row'>
      <p className='mt-3 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]'>
        My professional journey has equipped me with hands-on experience in 
        developing and deploying web applications. I've collaborated with 
        talented teams to create efficient, scalable, and user-friendly solutions.
      </p>
      <Image 
        src={color_sharp} 
        alt="color-sharp" 
        className="absolute z-[-1] h-60 sm:h-80 -left-40 sm:-left-60 w-screen -top-20" 
      />
    </div>
  </div>
</div>

      <div className='mt-20 flex flex-col gap-7'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} index={index} {...experience} />
        ))}
      </div>
      {/* Projects Section */}
      <div className='relative mb-20'>
        <div>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </div>

        <div className='w-full flex'>
          <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
          <Image 
            src={color_sharp} 
            alt="color-sharp" 
            className="absolute z-[-1] h-80 -left-60 w-screen -top-20" 
          />
        </div>
      </div>

      <div className='mt-20 flex flex-col gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

     
    </div>
  );
};

export default SectionWrapper(WorksAndExperience, "work");