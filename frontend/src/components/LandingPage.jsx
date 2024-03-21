import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import {Link} from "react-router-dom"

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-[#f1f1f1] pt-1"
    >
      <div className="container flex flex-wrap items-center justify-evenly pt-40">
      <div className="textStructure px-10">
        {["Host, Connect", "Celebrate: Your", "Events, our platform"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-2 w-[6vw] h-[4.5vw] mb-2 bg-[url('https://images.unsplash.com/photo-1504871283652-485177543d73?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat rounded-md"
                  ></motion.div>
                )}
                <h1 className="flex items-center h-full uppercase text-[4vw] leading-[5.5vw] tracking-tighter font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="image w-[35vw] h-[20vw] px-10 rounded-lg bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat"></div>
      </div>
      
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "Stage happening",
          "Arrange function",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none" key={index}>
            {item}
          </p>
        ))}
        <div className="start flex items-start gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            <Link to="/signin">Create an Event</Link>
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-500 flex items-center justify-center rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
