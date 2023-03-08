import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function CountDownTimer({ ...props }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const intervalRef = useRef();

  useEffect(() => {
    const startTimer = () => {
      const countdownDate = new Date("May 20 2023 00:00:00").getTime();
      intervalRef.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(intervalRef.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    };

    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
    })
  }, [])



  return (
    <>
      <div

        className="w-full relative px-2 lg:absolute top-0 lg:-top-20 h-full py-20 flex flex-col item-center justify-center gap-2 lg:gap-4"
      >
        <div className="w-full gap-1 lg:gap-4 flex items-center justify-center h-full">
          <div
            data-aos="fade-down-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-center rounded-lg flex flex-col pb-2 shadow-lg bg-gradient-to-tr w-28 h-28 from-zinc-50 to-zinc-200 overflow-hidden  clip">
            {/* Timer Days */}
            <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
              <span className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-zinc-900 bg-clip-text text-transparent">
                {timerDays}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
              Hari
            </small>
          </div>
          {/* Timer Hours */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000" className="text-center rounded-lg flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip">
            <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
              <span className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-zinc-900 bg-clip-text text-transparent">
                {timerHours}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
              Jam
            </small>
          </div>
          {/* Timer Minutes */}
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-center rounded-lg flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip">
            <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
              <span className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-zinc-900 bg-clip-text text-transparent">
                {timerMinutes}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
              Menit
            </small>
          </div>
          {/* Timer Second */}
          <div

            data-aos="fade-down-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-center rounded-lg flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip">
            <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
              <span className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-zinc-900 bg-clip-text text-transparent">
                {timerSeconds}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
              Detik
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
