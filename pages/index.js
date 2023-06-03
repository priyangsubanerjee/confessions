/* eslint-disable @next/next/no-img-element */

import ConfessState from "@/components/ConfessState";
import { useEffect, useState, useRef } from "react";
import Success from "@/components/Success";
import sendResponse from "@/helper/response";
import Head from "next/head";

export default function Home() {
  const [message, setMessage] = useState("");
  const [ip, setIp] = useState(null);
  const [state, setState] = useState(0);
  const [loading, setLoading] = useState(false);
  const audio = useRef(null);

  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
      });
  }, []);

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
      audio.current.play();
    }
  };

  return (
    <main>
      <Head>
        <title>Confessions | Priyangsu Banerjee</title>
        <meta name="title" content="Confessions | Priyangsu Banerjee" />
        <meta name="description" content="Confess anything to me anonymously" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://confessions.priyangsu.dev/" />
        <meta property="og:title" content="Confessions | Priyangsu Banerjee" />
        <meta
          property="og:description"
          content="Confess anything to me anonymously"
        />
        <meta
          property="og:image"
          content="https://confessions.priyangsu.dev/og.png"
        />
      </Head>
      <div className="h-screen fixed w-full inset-0 block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-transparent to-white/90 py-10 lg:py-16  overflow-y-auto lg:mb-20">
          <h1 className="text-center px-10 lg:px-96 mx-auto text-4xl lg:text-6xl font-bold font-serif leading-[1.5] lg:leading-[1.5] text-zinc-800">
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

          {state == 0 ? (
            <ConfessState
              {...{ setMessage, message, handleSubmit, loading, setLoading }}
            />
          ) : (
            <Success />
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

      <audio ref={audio} id="audio" src="/audio.mp3"></audio>
    </main>
  );
}
