import React, { useState, useRef, useEffect } from "react";
import FormRsvp from "../FormRsvp";
import { HiUserCircle } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import useSWR from "swr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionWish = ({ guest }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sectionRef = useRef(null);
  const [displayed, setDisplayed] = useState(false);
  const [showAttend, setShowAttend] = useState(false);
  const userId = guest?.userId;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !displayed) {
          setShowAttend(true);
          setDisplayed(true);
        }
        if (guest && guest?.status === "going") {
          setDisplayed(true);
        }
      });
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [displayed, guest]);

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: posts, error } = useSWR(
    `${process.env.REACT_APP_URI}/comment/${guest?.unique_Code}?userId=${userId}`,
    fetcher
  );
  useEffect(() => {}, [posts, error]);

  if (error) {
    return <div>Error Loading data...</div>;
  }

  return (
    <div
      ref={sectionRef}
      id="wish"
      className="w-full min-h-full pb-44 lg:pb-80"
    >
      {showAttend && <FormRsvp guest={guest} setShowAttend={setShowAttend} />}
      {/* Comment Section */}

      <div className="w-full lg:max-w-4xl relative shadow-lg shadow-black/60 h-full  mx-auto">
        <div className="py-2 px-1 absolute -top-10 left-0">
          <h1 className="text-zinc-800">
            {posts?.length} <i>comments</i>
          </h1>
        </div>
        <Slider {...settings}>
          {posts?.map((post, i) => (
            <div
              className="bg-[#101010]  w-full pt-8 pb-10 px-3 lg:px-6 flex items-center justify-center"
              key={i}
            >
              <div className="w-full flex flex-col justify-between">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1">
                    <HiUserCircle className="text-zinc-300" size={26} />
                    <h2 className="text-zinc-400 text-md lg:text-lg tracking-wide capitalize font-[Hattori]">
                      {post.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-0 lg:gap-1">
                    <IoMdTime size={18} className="text-zinc-400/80 pr-1" />
                    <p className="text-zinc-400 text-xs lg:text-sm">
                      {post.date}
                    </p>
                  </div>
                </div>
                <div className="p-3 mb-6 ">
                  <p className="text-zinc-400/90 text-md">{post.comments}</p>
                </div>
              </div>
              {!post?.reply ? (
                <div className="px-14 text-sm flex flex-col items-start">
                  <p className="text-zinc-400/80 italic">Belum ada balasan</p>
                </div>
              ) : (
                <div className="px-8 flex flex-col items-start gap-1">
                  <p className="text-zinc-500/70 text-sm antialiased italic">
                    Balasan
                  </p>
                  <p className="text-zinc-400/70 text-md">{post.reply}</p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWish;
