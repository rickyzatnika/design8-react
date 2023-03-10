import AnimatedPages from "../AnimatePages";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Header = ({ guest, imageUrl }) => {
  const data = imageUrl.find(
    (item) => item.public_id === "photo/wedding-nia/image-3_exnp8q"
  );

  return (
    <>
      <AnimatedPages>
        <div className="w-full min-h-screen flex flex-col items-center justify-between py-20 relative">
          <h1 className="text-md px-2 lg:text-lg text-center text-zinc-200">
            <Typewriter
              options={{
                strings: [
                  `Hallo ${guest?.name}, Terima kasih sudah meluangkan waktunya untuk melihat undangan dari kami..`,
                  " Hope you had a great time 😊",
                ],
                deleteSpeed: true,
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h1>

          <div className="overflow-hidden">
            <img
              src={data?.secure_url}
              alt={data?.public_id}
              className="w-full min-h-screen object-cover object-center absolute top-0 left-0 right-0 -z-50"
            />
          </div>
          <div className="w-full min-h-screen absolute top-0 left-0 -z-40 bg-gradient-to-b from-black to-black/10 mix-blend-overlay" />
          <motion.div
            initial={{ scale: 4, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 3, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="w-fit relative"
          >
            <span className="text-zinc-200 font-[timesi] ">&</span>
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
