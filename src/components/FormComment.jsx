import moment from "moment";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const FormComment = ({ guest, setShowAttend }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const postComment = async ({ comments }) => {
    const userId = guest?.userId;
    try {
      await axios.patch(
        `${process.env.REACT_APP_URI}/invitation/comment/${guest.unique_Code}`,
        {
          comments: comments,
          date: moment().format("DD MMMM YYYY, h:mm a"),
        }
      );
      setShowAttend(false);
      Swal.fire({
        text: "Terima kasih atas partisipasinya..",
      });
      navigate(`/invitation/${guest?.unique_Code}?userId=${userId}/#wish`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen px-2 bg-black/40 fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <div className=" w-full px-2 lg:w-4/6 h-auto bg-white p-8 rounded-xl">
        <h1 className="text-center text-2xl font-[Hattori]">
          Pesan dan Harapan untuk Kami
        </h1>
        <form
          onSubmit={handleSubmit(postComment)}
          className="max-w-3xl mx-auto px-2 py-9 flex flex-col "
        >
          <div className="flex items-center flex-col sm:flex-row justify-between w-full">
            <div className="w-full">
              <input
                type="text"
                {...register("name", { required: true })}
                value={guest.name}
                className="w-full hidden bg-zinc-700/90 my-2 py-2 px-4 rounded text-zinc-100 border-none outline-none   placeholder:italic "
              />
            </div>
          </div>
          <div className="pt-3 antialiased">
            <textarea
              name=""
              cols="30"
              rows="10"
              className="w-full p-4 focus:outline-black focus:border-none placeholder:italic rounded text-zinc-700 border-none  "
              placeholder="Tulis Pesan ..."
              {...register("comments", {
                required: true,
              })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded w-full lg:w-fit mx-auto py-3 px-8 mt-3 bg-gradient-to-tr from-zinc-900 via-zinc-900/80 to-zinc-900 hover:from-zinc-800/90 hover:to-zinc-800/90 transition-all duration-300 ease-linear hover:text-white text-[#c7c6c6]"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComment;
