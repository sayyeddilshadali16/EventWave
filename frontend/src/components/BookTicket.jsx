import React from "react";
import { motion } from "framer-motion";

const BookTicket = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="pt-28 pb-20 px-20 w-full flex items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "9vw" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="mr-2 w-[6vw] h-[4.5vw] mb-2 bg-[url('https://images.unsplash.com/photo-1587906697341-bfbde76785c7?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat rounded-md"
        ></motion.div>
        <h1 className="text-[5vw] leading-[4vw] font-semibold uppercase tracking-tighter">
          Make Payment
        </h1>
      </div>
      <p className="mb-12 ml-28 text-gray-700">Fill up the payment details:</p>
      <div className="form mt-12 px-28 text-xl leading-10">
        <form action="">
          <label htmlFor="username">
            Hey! Buy ticket provide us{" "}
            <input
              type="text"
              name="username"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter your name"
            />
          </label>
          <label htmlFor="email">
            and the category{" "}
            <input
              type="email"
              name="email"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter your email"
            />
          </label>
          <label htmlFor="card">
            , your card information like card number{" "}
            <input
              type="text"
              name="card"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="1234 1234 1234 1234"
            />
          </label>
          <label htmlFor="date">
            , date of expire{" "}
            <input
              type="date"
              name="date"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Select date"
            />
          </label>
          <label htmlFor="cvv">
            &nbsp;&nbsp;&nbsp; , and cvv{" "}
            <input
              type="text"
              name="cvv"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="CVV"
            />
          </label>
          <label htmlFor="name">
            . Also card holder name{" "}
            <input
              type="text"
              name="name"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center"
              placeholder="Enter the card holder name"
            />
          </label>
          <label htmlFor="region">
            , your country or region{" "}
            <input
              type="text"
              name="region"
              className="bg-[#f1f1f1] border-b-2 border-gray-400 outline-none placeholder:text-sm text-center mr-2"
              placeholder="Enter your country or region"
            />{" "}
            .
          </label>

          <div className="mt-10 flex items-center justify-end">
            <button className="tracking-tighter flex gap-3 items-center px-5 bg-zinc-500 rounded-full text-white uppercase">
              Pay
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTicket;
