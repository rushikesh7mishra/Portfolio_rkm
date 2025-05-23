'use client';

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all the fields.");
      return;
    }
    
    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    setLoading(true);
  
    // 1. Send notification email to yourself
    emailjs.send(
      "service_cmvg87z", 
      "template_wkec23i", 
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: "Rushikesh",
        to_email: "rushikeshmishra7@gmail.com"
      },
      "2DZ6RfuVOWKGThUWL"
    ).then(() => {
      // 2. Send auto-reply to visitor
      return emailjs.send(
        "service_cmvg87z", 
        "template_wkec23i", 
        {
          to_name: form.name,
          to_email: form.email,
          from_name: "Rushikesh Mishra",
          from_email: "rushikeshmishra7@gmail.com"
        },
        "2DZ6RfuVOWKGThUWL"
      );
    }).then(() => {
      toast.success("Message sent!");
      setForm({ name: "", email: "", message: "" });
    }).catch((error) => {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    }).finally(() => setLoading(false));
  };
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 bg-opacity-80 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          aria-label="Contact form"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              aria-required="true"
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              aria-required="true"
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              aria-required="true"
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl hover:bg-purple-950 outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        aria-hidden="true"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");