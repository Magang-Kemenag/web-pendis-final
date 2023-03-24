import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/loader/loader";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      AOS.refresh();
    });
  }, []);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
