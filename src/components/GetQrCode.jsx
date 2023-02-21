import React, { useState, useEffect } from "react";
import axios from "axios";

import { BiMap } from "react-icons/bi";

const GetQrCode = ({ guest, setShowAttend }) => {
  const [qrCode, setQrCode] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_URI}/invitation/validate/${guest.unique_Code}`
        );
        setLoading(true);
        setQrCode(data.qrCode);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQRCode();
  });

  const close = () => {
    setShowAttend(false);
  };

  return (
    <>
      {loading ? (
        <img src="/loading.svg" alt="" />
      ) : (
        <div className="w-full mx-auto lg:w-4/6 min-h-screen bg-white z-[999999999] fixed top-0 left-0 right-0 flex flex-col justify-center items-center ">
          <div className="w-full h-full absolute z-20 top-0 left-0 right-0 ">
            <img
              src="/images/bg-qr-code.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="antialiased w-full relative z-40 h-full gap-12 flex flex-col items-center justify-between ">
            <div className="w-full relative h-full flex flex-col items-center justify-evenly leading-loose text-center">
              <div className="pb-5 py-10 flex w-full flex-col  gap-2 items-center">
                <p className="font-[Hattori] text-zinc-700 tracking-widest">
                  The Wedding Of
                </p>
                <p className="font-[parisienne] text-4xl font-semibold text-amber-600">
                  Mayang & Restu
                </p>
                <span>Sabtu, 20 Mei 2023</span>
                <div className="w-full text-center">
                  <img
                    src={qrCode}
                    alt="qr-code"
                    className="w-3/6 lg:w-2/6 mx-auto"
                  />

                  <div className="flex flex-col items-center pt-3">
                    <BiMap size={28} className="text-zinc-900/80" />
                    <p className="text-zinc-900/80 antialiased text-lg font-[Hattori] ">
                      SHERATON BANDUNG HOTEL & TOWERS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-md underline tracking-wider"
              onClick={() => close()}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GetQrCode;
