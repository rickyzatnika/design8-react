import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GrInstagram } from "react-icons/gr";
import {
  subtitleVariants,
  manImageVariants,
  womanImageVariants,
  titleVariants,
} from "../../utils/Variant";
import Man from "../../assets/images/mans.png";
import Woman from "../../assets/images/womans.png";

const SectionTwo = () => {
  const TittleInViewRef = useInView({ threshold: 0.1 });
  const womanInViewRef = useInView({ threshold: 0.1 });
  const andInViewRef = useInView({ threshold: 0.1 });
  const manInViewRef = useInView({ threshold: 0.1 });
  const { ref: titleRef, inView: titleInView } = TittleInViewRef;
  const { ref: womanRef, inView: womanInView } = womanInViewRef;
  const { ref: andRef, inView: andInView } = andInViewRef;
  const { ref: manRef, inView: manInView } = manInViewRef;

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      <div className="absolute -top-1 left-0 right-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      <motion.h1
        ref={titleRef}
        animate={titleInView ? "animate" : "initial"} // ubah animasi saat inView true
        variants={titleVariants}
        exit="exit"
        className="text-zinc-300 text-center py-10 text-2xl"
      >
        The Wedding Of{" "}
      </motion.h1>
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row w-full h-full lg:w-9/12 mx-auto items-center justify-center lg:justify-between py-20">
        <motion.div
          ref={womanRef}
          animate={womanInView ? "animate" : "initial"} // ubah animasi saat inView true
          variants={womanImageVariants}
          className="py-8 text-center flex flex-col items-center font-[Hattori] text-2xl lg:text-3xl"
        >
          <img src={Woman} alt="" className="w-[260px] lg:w-[290px]" />
          <div className="flex flex-col items-center gap-2">
            <h3 className="pt-3 text-zinc-300">Mayang Sari</h3>
            <p className="text-sm text-zinc-400/80">
              Putri dari Bpk. Hasan Bakrie dan Ibu Mutia Bakrie
            </p>
            <Link
              to="https://instagram.com/webhouse_invitation"
              target="_blank"
            >
              <GrInstagram size={18} className="text-zinc-400 animate-spin" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          ref={andRef}
          animate={andInView ? "animate" : "initial"} // ubah animasi saat inView true
          variants={subtitleVariants}
          className="text-zinc-300 my-6 lg:my-0 font-[parisienne] text-6xl"
        >
          &
        </motion.div>
        <motion.div
          ref={manRef}
          animate={manInView ? "animate" : "initial"} // ubah animasi saat inView true
          variants={manImageVariants}
          className="py-8 text-center font-[Hattori] text-2xl lg:text-3xl relative"
        >
          <img src={Man} alt="" className="w-[260px] lg:w-[290px]" />
          <div className="flex flex-col items-center gap-2">
            <h3 className="pt-3 text-zinc-300">Restu Syamba</h3>
            <p className="text-sm text-zinc-400/80">
              Putri dari Bpk. Budi dan Ibu Uchi
            </p>
            <Link
              to="https://instagram.com/webhouse_invitation"
              target="_blank"
            >
              <GrInstagram size={18} className="text-zinc-400 animate-spins" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionTwo;
