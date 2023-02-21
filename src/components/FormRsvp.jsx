import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import { lazy, Suspense } from "react";
import FormComment from "./FormComment";
import Swal from "sweetalert2";

const GetQrCode = lazy(() => import("./GetQrCode"));

const FormRsvp = ({ guest, setShowAttend }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [selectedValue, setSelectedValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const { uuid } = useParams();

  const attendForm = async ({ status, present }) => {
    try {
      const userId = guest.userId;
      await axios.patch(
        `${process.env.REACT_APP_URI}/invitation/status/${uuid}?userId=${userId}`,
        {
          present: present,
          status: selectedValue,
        }
      );

      if (!status && selectedValue === "not Going") {
        Swal.fire({
          text: "Terima kasih atas partisipasinya..",
        });
        setLoading(false);
        setShowComment(false);
        setShowModal(false);
        setShowAttend(false);
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowModal(true);
      }, 7000);

      return () => clearTimeout(setTimeout);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div className="w-full min-h-screen px-2 backdrop-blur-[4px] bg-black/80 flex items-center justify-center fixed top-0 left-0 right-0 z-50">
        {showComment && (
          <FormComment setShowAttend={setShowAttend} guest={guest} />
        )}
        {showModal ? (
          <Suspense
            fallback={
              <div className="w-full min-h-screen flex items-center justify-center bg-white">
                <img src="/loading.svg" alt="loading" />
              </div>
            }
          >
            <GetQrCode
              setShowModal={setShowModal}
              setShowAttend={setShowAttend}
              setShowComment={setShowComment}
              guest={guest}
            />
          </Suspense>
        ) : (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 h-full shadow-lg shadow-black/20 bg-white rounded-md p-1 lg:p-6"
          >
            {loading ? (
              <div className="flex py-10 text-center flex-col items-center justify-center gap-4 w-full">
                <img src="/loading.svg" className="w-2/6 mx-auto" alt="" />
                <p className="px-4 text-md text-zinc-700">
                  Mohon tunggu sebentar ya, lagi siapin QR-Code nya...
                </p>
                <i>*JANGAN LUPA DI SCREENSHOT*</i>
              </div>
            ) : (
              <>
                <div className="py-2 px-2">
                  <h1 className="text-lg lg:text-xl text-zinc-700">
                    Hi {guest.name}, kami berharap atas kehadirannya nanti pada
                    hari bahagia kami.
                  </h1>
                </div>
                <form
                  onSubmit={handleSubmit(attendForm)}
                  className="w-full rounded z-50 h-auto px-4 lg:px-8 py-20 flex flex-col items-center justify-between gap-3"
                >
                  <div className="w-full leading-relaxed mb-3">
                    <div className="flex flex-col flex-nowrap gap-2">
                      <div className="flex flex-nowrap gap-1">
                        <input
                          type="radio"
                          value="going"
                          onChange={() => handleClick("going")}
                          {...register("status", { required: true })}
                          checked={selectedValue === "going"}
                        />
                        <label
                          className="text-zinc-700"
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick("going");
                          }}
                        >
                          Ya, Saya akan hadir
                        </label>
                      </div>
                      <div className="flex flex-nowrap gap-1">
                        <input
                          type="radio"
                          value="not Going"
                          {...register("status", { required: true })}
                          checked={selectedValue === "not Going"}
                          onChange={() => handleClick("not Going")}
                        />
                        <label
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick("not Going");
                          }}
                          className="text-zinc-700"
                        >
                          Maaf, Saya tidak bisa hadir
                        </label>
                      </div>
                    </div>
                  </div>
                  {selectedValue === "going" && (
                    <div className="mb-3 w-full">
                      <h3 className="mb-2 text-sm text-zinc-800">
                        Berapa orang yang akan hadir :
                      </h3>
                      <input
                        {...register("present", { required: true })}
                        placeholder="0"
                        className="py-3 border border-zinc-400 px-2 w-full outline-none  focus:outline-none rounded"
                        type="number"
                      />
                    </div>
                  )}

                  {selectedValue && (
                    <button
                      className="py-3 px-7 w-full text-white/80 bg-gradient-to-tr from-zinc-900 to-zinc-900/80   hover:from-zinc-800 hover:to-zinc-900/90 "
                      type="submit"
                    >
                      Simpan
                    </button>
                  )}
                </form>
              </>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default FormRsvp;
