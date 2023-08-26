import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import System from "./components/System";
import GrowthProcess from "./components/GrowthProcess";
import SocialProof from "./components/SocialProof";
import Calendly from "./components/Calendly";
import Footer from "./components/Footer";
import { PuffLoader } from "react-spinners";
import React, { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 500 );
  }, []);

  return (
    <div>
        {
          loading 

          ?

          <div className="flex justify-center items-center bg-white w-[100dvw] h-[100dvh]">
              <PuffLoader color="#EB6FF5" />
          </div>

          :
          <div>
            <Navbar />
            <Hero />
            <About />
            <System />
            <GrowthProcess />
            <SocialProof />
            <Calendly />
            <Footer />
          </div>
        }
    </div>
  )
}

export default App
