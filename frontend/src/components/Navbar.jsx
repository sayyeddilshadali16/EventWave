import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/reshot-icon-sound-wave-HQBR2CXG8W.svg";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  return (
    <div className='fixed z-[999] w-full px-20 py-4 font-["Neue_Montreal"] bg-transparent backdrop-blur-sm'>
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="nav flex justify-between"
      >
        <div className="logo-container overflow-y-hidden flex items-center justify-center gap-3">
          <img
            src={Logo}
            alt="logo"
            className="h-8 w-8 rounded-lg"
          />
          <motion.h1 className="text-xl font-bold uppercase tracking-tighter" variants={hideNavItemsVariant}>
            EventWave
          </motion.h1>
        </div>
        <div className="menu-container overflow-y-hidden">
          <motion.div
            className="cursor-pointer font-medium text-md hover:bg-black hover:text-white rounded-full py-2 px-4"
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
          >
            Menu
          </motion.div>
        </div>
        <motion.div
          variants={mobileMenuVariant}
          className="mobile-menu fixed top-0 left-0 h-screen w-full flex flex-col items-center bg-[#CDEA68]"
        >
          <motion.button
            className="self-end mr-12 mt-5 outline-none border-none bg-transparent font-medium text-md cursor-pointer hover:bg-black hover:text-white rounded-full py-2 px-4"
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            Close
          </motion.button>
          <motion.ul  
            onClick={() => setMobileNavOpen(false)}
          className="list-none mt-10" variants={ulVariant}>
            <motion.li
              className="my-5 overflow-y-hidden select-none"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-center uppercase text-4xl hover:italic hover:line-through cursor-pointer"
                variants={liVariant}
              >
                <Link to="/">Home</Link>
              </motion.div>
            </motion.li>
            <motion.li
              className="my-5 overflow-y-hidden select-none"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-center uppercase text-4xl hover:italic hover:line-through cursor-pointer"
                variants={liVariant}
              >
                <Link to="/createevent">Create Event</Link>
              </motion.div>
            </motion.li>
            <motion.li
              className="my-5 overflow-y-hidden select-none"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-center uppercase text-4xl hover:italic hover:line-through cursor-pointer"
                variants={liVariant}
              >
                <Link to="/profile">My Profile</Link>
              </motion.div>
            </motion.li>
            <motion.li
              className="my-5 overflow-y-hidden select-none"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-center uppercase text-4xl hover:italic hover:line-through cursor-pointer"
                variants={liVariant}
              >
                <Link to="/signin">Login</Link>
              </motion.div>
            </motion.li>
            <motion.li
              className="my-5 overflow-y-hidden select-none"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-center uppercase text-4xl hover:italic hover:line-through cursor-pointer"
                variants={liVariant}
              >
                <Link to="/signin">Signup</Link>
              </motion.div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.nav>

      <motion.div
        initial={fadeInStart}
        animate={fadeInEnd}
        transition={fadeInTransition}
        className="img-container"
      ></motion.div>
    </div>
  );
};

export default Navbar;
