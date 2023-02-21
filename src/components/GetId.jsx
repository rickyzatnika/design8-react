import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import AnimatedPage from "./AnimatePages";

import { motion } from "framer-motion";

const GetId = ({ isPlay, setIsPlay }) => {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState("");
  const { register, handleSubmit } = useForm();
  const { uuid } = useParams();

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: guest, error } = useSWR(
    `${process.env.REACT_APP_URI}/invitation/${uuid}`,
    fetcher
  );

  useEffect(() => {}, [guest]);

  const formSubmit = async () => {
    try {
      const userId = guest.userId;
      await axios.patch(
        `${process.env.REACT_APP_URI}/invitation/status/${guest.unique_Code}?userId=${userId}`,
        {
          status: selectValue,
        }
      );
      setIsPlay(true);
      navigate(`/invitation/${guest.unique_Code}?userId=${userId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (value) => {
    setSelectValue(value);
  };

  if (error) {
    return <div>Error Loading Data ....</div>;
  }

  if (!guest) {
    return <div>Loading ....</div>;
  }

  return (
    <>
      <AnimatedPage>
        <div className="w-full  min-h-screen relative">
          <img
            src="/images/image-1.jpg"
            alt="background-cover"
            className="w-full min-h-full lg:min-h-screen -z-50 object-cover object-bottom lg:object-cover absolute top-0"
          />
          <div className="w-full min-h-screen bg-gradient-to-t mix-blend-overlay from-black/80 to-transparent absolute top-0 -z-40" />
          <div className="w-full min-h-screen flex flex-col items-center py-20 justify-between lg:justify-around">
            <h1 className="text-2xl text-zinc-300">Wedding Invitation</h1>
            <motion.div
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 3, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-6 flex-col "
            >
              <h3 className="text-5xl lg:text-7xl text-zinc-200 font-[parisienne]">
                Mayang
              </h3>
              <span className="text-2xl text-zinc-200">&</span>
              <h4 className="text-5xl lg:text-7xl text-zinc-200 font-[parisienne]">
                Restu
              </h4>
            </motion.div>

            <form
              className="w-fit items-center justify-center flex flex-col"
              onSubmit={handleSubmit(formSubmit)}
            >
              <input
                type="text"
                onChange={() => handleClick("Opened")}
                {...register("status", { required: true })}
                checked={selectValue === "Opened"}
                value="Opened"
                {...register("status")}
                className="opacity-0 flex flex-col items-center justify-center"
              />
              <button
                onClick={() => handleClick("Opened")}
                type="submit"
                className="py-2 cursor-pointer px-5 bg-gradient-to-tr shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 from-amber-800/80 via-yellow-600/80 to-amber-800/80 hover:from-amber-600/90 hover:via-yellow-600/90 hover:to-amber-500/90"
              >
                Buka Undangan
              </button>
            </form>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default GetId;
