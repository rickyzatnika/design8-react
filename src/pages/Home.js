import React from "react";
import AnimatedPage from "../components/AnimatePages";


const Home = () => {
  return (
    <AnimatedPage>
      <div className="w-full  min-h-screen relative">
        <img
          src="/images/image-1.jpg"
          alt="background-cover"
          className="w-full min-h-full lg:min-h-screen -z-50 object-cover object-bottom lg:object-cover absolute top-0"
        />
        <div className="w-full min-h-screen bg-gradient-to-t mix-blend-overlay from-black/80 to-transparent absolute top-0 -z-40" />
        <div className="w-full min-h-screen flex flex-col items-center py-20 justify-between lg:justify-around">
          <h1 className="text-2xl text-zinc-300">The Wedding Of </h1>
          <div className="flex items-center gap-6 flex-col ">
            <h3 className="text-5xl lg:text-7xl text-zinc-200 font-[parisienne]">
              Restu
            </h3>
            <span className="text-2xl text-zinc-200">&</span>
            <h4 className="text-5xl lg:text-7xl text-zinc-200 font-[parisienne]">
              Mayang
            </h4>
          </div>
          <button
            type="submit"
            className="py-2 invisible cursor-pointer px-5 bg-gradient-to-tr shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 from-amber-800/80 via-yellow-600/80 to-amber-800/80 hover:from-amber-600/90 hover:via-yellow-600/90 hover:to-amber-500/90"
          ></button>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
