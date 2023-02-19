import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import bgCover from "../../assets/images/image-3.jpg";
import AnimatedPages from "../AnimatePages";
import { motion } from "framer-motion";

const Header = () => {
  const { uuid } = useParams();
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: guest, error } = useSWR(
    `${process.env.REACT_APP_URI}/invitation/${uuid}`,
    fetcher
  );
  useEffect(() => {}, [guest, error]);

  if (error) {
    return <div>Error Loading data...</div>;
  }

  if (!guest) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AnimatedPages>
        <div className="w-full min-h-screen flex flex-col items-center justify-between py-20 relative">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-zinc-200"
          >
            Hi {guest.name}, Thanks For Coming..
          </motion.h1>

          <div className="overflow-hidden">
            <img
              src={bgCover}
              alt=""
              className="w-full min-h-screen object-cover object-center absolute top-0 left-0 right-0 -z-50"
            />
          </div>
          <div className="w-full min-h-screen absolute top-0 left-0 -z-40 bg-gradient-to-b from-black to-black/10 mix-blend-overlay" />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-fit relative"
          >
            <h2 className="text-5xl font-[parisienne] text-zinc-300">Restu</h2>
            <h3 className="absolute bottom-20 right-0 text-5xl font-[parisienne] text-zinc-300">
              Mayang
            </h3>
          </motion.div>
          <div className="flex items-center flex-col gap-2">
            <div className="mouse-icon">
              <div className="wheel"></div>
            </div>
            <span className="text-zinc-200">Scroll Down</span>
          </div>
        </div>
      </AnimatedPages>
    </>
  );
};

export default Header;
