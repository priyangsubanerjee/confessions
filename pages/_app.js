import "@/styles/globals.css";

import toast, { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "100px",
          },
        }}
      />
    </>
  );
}
