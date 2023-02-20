import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  subtitleVariants,
  manImageVariants,
  womanImageVariants,
  titleVariants,
} from "../../utils/Variant";
import BgCover from "../../assets/images/image-7.jpg";

const SectionThree = () => {
  const TittleInViewRef = useInView({ threshold: 0.1 });
  const SubtitleInViewRef = useInView({ threshold: 0.1 });
  const timesInViewRef = useInView({ threshold: 0.1 });
  const placesViewRef = useInView({ threshold: 0.1 });
  const { ref: titleRef, inView: titleInView } = TittleInViewRef;
  const { ref: subtitleRef, inView: subtitleInView } = SubtitleInViewRef;
  const { ref: timesRef, inView: timesInView } = timesInViewRef;
  const { ref: placeRef, inView: placeInView } = placesViewRef;

  return (
    <div className="w-full min-h-screen relative py-0 lg:py-20">
      <div className="min-w-full absolute -top-8 lg:-top-36 left-0 right-0 -z-40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,320L60,293.3C120,267,240,213,360,208C480,203,600,245,720,240C840,235,960,181,1080,176C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="absolute w-full h-screen top-0 left-0 right-0 bottom-0 -z-50 overflow-hidden">
        <img
          src={BgCover}
          alt=""
          className="w-full h-screen animate object-cover"
        />
        <div className="w-full min-h-screen bg-gradient-to-b from-white via-white/70 to-white absolute top-0" />
      </div>
      <div className="w-full min-h-screen flex flex-col gap-2 lg:gap-12 items-center py-18 sm:py-40 md:py-60 lg:py-40  justify-evenly px-6">
        <motion.div
          ref={titleRef}
          animate={titleInView ? "animate" : "initial"}
          variants={titleVariants}
          exit="exit"
          className="text-center"
        >
          <h1 className=" text-2xl text-zinc-800 font-[Hattori] lg:text-3xl">
            Tempat, Waktu dan Acara
          </h1>
          <p>Akan diselenggarakan pada :</p>
        </motion.div>
        <motion.h3
          ref={subtitleRef}
          animate={subtitleInView ? "animate" : "initial"}
          variants={subtitleVariants}
          className="text-transparent text-5xl lg:text-6xl font-[parisienne] bg-gradient-to-t font-thin from-yellow-500/80 via-amber-600 to-yellow-500/80 bg-clip-text "
        >
          20 Mei 2023
        </motion.h3>
        <div className="w-full flex flex-nowrap items-center  gap-4 lg:gap-0 justify-between lg:justify-around">
          <motion.div
            ref={timesRef}
            animate={timesInView ? "animate" : "initial"}
            variants={manImageVariants}
            className="flex flex-col text-center items-center gap-2"
          >
            <h3 className="text-xl text-zinc-800 lg:text-2xl font-[Hattori]">
              Akad Nikah
            </h3>
            <p className="text-sm lg:text-md text-zinc-800">
              Pukul 08.15 WIB s/d Selesai
            </p>
          </motion.div>
          <motion.div
            ref={timesRef}
            animate={timesInView ? "animate" : "initial"}
            variants={manImageVariants}
            className=" flex flex-col text-center items-center gap-2"
          >
            <h3 className="text-xl text-zinc-800 lg:text-2xl font-[Hattori]">
              Resepsi
            </h3>
            <p className="text-sm lg:text-md text-zinc-800">
              Pukul 10.15 WIB s/d Selesai
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={placeRef}
          animate={placeInView ? "animate" : "initial"}
          variants={womanImageVariants}
          className="flex text-center flex-col gap-2 py-4 items-center justify-center w-full"
        >
          <h4 className="uppercase text-xl text-zinc-900 font-semibold">
            Sheraton Bandung Hotel & Towers
          </h4>
          <p className="text-zinc-800 text-md lg:text-xl font-[Hattori]">
            Jl. Ir. H. Juanda No.390, Dago, Kecamatan Coblong, Kota Bandung,
            Jawa Barat 40135
          </p>
        </motion.div>
      </div>
      <div className="min-w-full left-0 right-0 absolute -z-40 -bottom-0 lg:-bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,192L60,181.3C120,171,240,149,360,122.7C480,96,600,64,720,80C840,96,960,160,1080,181.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SectionThree;
