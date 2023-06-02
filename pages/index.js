/* eslint-disable @next/next/no-img-element */

import sendResponse from "@/helper/response";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const [message, setMessage] = useState("");
  const [ip, setIp] = useState(null);
  const [state, setState] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
        console.log(data.ip);
      });

    fetch("/api/ip")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.ip);
      });
  }, [loading]);

  const handleSubmit = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        message,
        ip,
      }),
    });

    const data = await res.json();
    if (data.success) {
      setState(1);
      setLoading(false);
      sendResponse(message, ip);
      setMessage("");
    }
  };

  return (
    <main>
      <div className="h-screen fixed w-full inset-0 block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-transparent to-white/90 py-10 lg:py-16  overflow-y-auto lg:mb-20">
          <h1
            onClick={() => setLoading(true)}
            className="text-center px-10 lg:px-96 mx-auto text-4xl lg:text-6xl font-bold font-serif leading-[1.5] lg:leading-[1.5] text-zinc-800"
          >
            Wanna confess something to me?
          </h1>

          <p
            className={`text-center font-jost mt-10 flex items-center justify-center space-x-3 ${
              ip !== null ? "opacity-100" : "opacity-0"
            } transition-all duration-500`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-zinc-700"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-zinc-700">Your connection is secure</span>
          </p>

          {state == 0 && (
            <div className="w-[90%] flex flex-col mx-auto lg:w-[620px] bg-white border shadow-lg lg:shadow-xl focus-within:lg:shadow-2xl rounded-xl mt-12 lg:mt-16 overflow-hidden transition-all duration-500 animate-fade-in-up">
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
                      src="https://www.priyangsu.dev/priyangsuThree.jpeg"
                      className="h-7 w-7 rounded-full object-cover border border-black"
                      alt=""
                    />
                    <a href="">@priyangsubanerjee</a>
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
                  disabled={loading}
                  onClick={() => {
                    handleSubmit();
                    setLoading(true);
                  }}
                  className="bg-zinc-800 disabled:opacity-50 w-24 h-10 font-jost text-white rounded-lg flex items-center justify-center space-x-4 transition-all"
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                  ) : (
                    <span>Send</span>
                  )}
                </button>
              </div>
            </div>
          )}

          {state == 1 && (
            <div className="w-[90%] flex flex-col mx-auto lg:w-[620px] bg-white border shadow-lg lg:shadow-xl focus-within:lg:shadow-2xl rounded-xl mt-12 lg:mt-16 overflow-hidden transition-all duration-500 animate-fade-in-up">
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
              <div className="flex mt-6 items-center justify-center px-6 pb-10">
                <Link href="https://priyangsu.dev/projects">
                  <button className="bg-zinc-800 px-8 h-12 text-sm font-jost text-zinc-100 rounded-md">
                    View projects
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className="flex fixed bottom-6 inset-x-0 items-center justify-center mt-20 text-xs">
            <p className="text-zinc-600">
              © 2023 •{" "}
              <a
                href="https://www.priyangsu.dev"
                className="text-zinc-900 font-medium hover:underline"
              >
                priyangsu.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
