import Link from "next/link";
import React from "react";

function Success() {
  return (
    <div className="w-[90%] flex flex-col mx-auto lg:w-[620px] bg-white border shadow-lg lg:shadow-xl focus-within:lg:shadow-2xl rounded-xl mt-12 lg:mt-12 overflow-hidden  transition-all duration-500 animate-fade-in-up">
      <div className="p-6 lg:p-8">
        <div className="font-jost">
          <p className="text-zinc-700 font-medium text-center flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-teal-600"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Your confession has been sent to</span>
          </p>

          <div className="flex justify-center mt-8 items-center space-x-2 ml-4">
            <img
              src="/me.jpeg"
              className="h-7 w-7 rounded-full object-cover border border-black"
              alt=""
            />
            <Link
              target="_blank"
              href="https://www.instagram.com/priyangsu__banerjee/"
            >
              @priyangsubanerjee
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-6 items-center justify-center space-x-4 text-zinc-700 px-6">
        <Link href={"https://www.instagram.com/priyangsu__banerjee/"}>
          <iconify-icon width="24" icon="ri:instagram-fill"></iconify-icon>
        </Link>
        <Link href={"https://github.com/priyangsubanerjee"}>
          <iconify-icon icon="mdi:github" width="24"></iconify-icon>
        </Link>
        <Link href={"https://priyangsu.dev/"}>
          <iconify-icon icon="mdi:web" width="24"></iconify-icon>
        </Link>
      </div>
      <div className="flex mt-4 items-center justify-center space-x-4 text-zinc-700 px-6 pb-10">
        <a
          className="text-xs text-zinc-900"
          href="mailto:devpriyangsu@gmail.com"
        >
          devpriyangsu@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Success;
