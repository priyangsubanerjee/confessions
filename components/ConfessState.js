/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ConfessState({
  setMessage,
  message,
  handleSubmit,
  loading,
  setLoading,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-[90%] flex flex-col mx-auto lg:w-[620px] bg-white border shadow-lg lg:shadow-xl focus-within:lg:shadow-2xl rounded-xl mt-12 lg:mt-12 overflow-hidden  transition-all duration-500 animate-fade-in-up"
    >
      <div className="p-6 lg:p-8">
        <div className="flex items-center text-sm font-jost">
          <span className="text-zinc-500 font-medium">Confess to</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-4 h-4 text-zinc-500 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>

          <div className="flex items-center space-x-2 ml-4">
            <img
              src="/me.jpeg"
              className="h-7 w-7 rounded-full object-cover border border-black"
              alt=""
            />
            <a href="https://www.instagram.com/priyangsu__banerjee/">
              @priyangsubanerjee
            </a>
          </div>
        </div>
        <textarea
          name=""
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="font-jost resize-none outline-none w-full h-full mt-6"
          placeholder="Your confession goes here..."
          id=""
          rows="6"
        ></textarea>
      </div>
      <div className="flex items-center justify-end px-6 pb-6">
        <button
          onClick={() => {
            handleSubmit();
            setLoading(true);
          }}
          className="bg-zinc-800 disabled:opacity-50 w-24 h-10 font-jost text-white rounded-lg flex items-center justify-center space-x-4 transition-all"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2 ">
              <div className="h-1 w-1 rounded-full bg-white  animate-opacity"></div>
              <div className="h-1 w-1 rounded-full bg-white animate-opacity animation-delay-150"></div>
              <div className="h-1 w-1 rounded-full bg-white animate-opacity animation-delay-300"></div>
            </div>
          ) : (
            <span>Send</span>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default ConfessState;
