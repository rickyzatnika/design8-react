import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import AnimatedPage from "./AnimatePages";
import BgCover from "../assets/images/image-1.jpg";

const GetId = () => {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { uuid } = useParams();

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: guest, error } = useSWR(
    `${process.env.REACT_APP_URI}/invitation/${uuid}`,
    fetcher
  );

  useEffect(() => {
    console.log(guest);
  }, [guest]);

  const formSubmit = async () => {
    try {
      const userId = guest.userId;
      await axios.patch(
        `${process.env.REACT_APP_URI}/invitation/status/${guest.unique_Code}?userId=${userId}`,
        {
          status: selectValue,
        }
      );
      setIsOpen(false);
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
    <AnimatedPage>
      <div className="w-full  min-h-screen relative">
        <img
          src={BgCover}
          alt="background-cover"
          className="w-full min-h-full lg:min-h-screen -z-50 object-cover object-bottom lg:object-cover absolute top-0"
        />
        <div className="w-full min-h-screen bg-gradient-to-t mix-blend-overlay from-black/80 to-transparent absolute top-0 -z-40" />
        <div className="w-full min-h-screen flex flex-col items-center py-20 justify-between lg:justify-around">
          <h1 className="text-2xl text-zinc-300">Wedding Invitation</h1>
          <div className="flex items-center gap-6 flex-col ">
            <h3 className="text-5xl lg:text-7xl text-zinc-200 font-[parisienne]">
              Restu
            </h3>
            <span className="text-2xl text-zinc-200">&</span>
            <h4 className="text-5xl lg:text-7xl text-zinc-200 font-[parisienne]">
              Mayang
            </h4>
          </div>

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
  );
};

export default GetId;
