/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="h-screen fixed w-full inset-0 block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-transparent to-white py-20">
          <h1 className="text-center px-10 lg:px-96 mx-auto text-4xl lg:text-6xl font-bold font-serif leading-[1.5] lg:leading-[1.5] text-zinc-800">
            Wanna confess something to me?
          </h1>

          <p className="text-center font-jost mt-10 flex items-center justify-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Your connection is secure</span>
          </p>
        </div>
      </div>
    </main>
  );
}
