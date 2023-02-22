import React from "react";

const SubFooter = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative py-0">
      <div className="absolute -top-36 bg-gradient-to-t from-black to-transparent w-full -z-40 left-0 right-0 h-40" />
      <div className="w-full  h-96 overflow-hidden">
        <img
          src="/images/image-2.jpg"
          alt=""
          className="w-full animates h-96 object-cover object-bottom"
        />
      </div>
      <div className="bg-gradient-to-t w-full h-96 z-10 from-black via-black/60 to-black absolute bottom-0 left-0 right-0" />
      <div className="absolute z-50 text-center px-1 text-zinc-300 flex gap-2 items-center flex-col justify-center">
        <h3 className="text-4xl lg:text-5xl font-[parisienne]">
          Mayang & Restu
        </h3>
        <p className="text-zinc-400/80">
          Dengan Tulus Hati Kami Mengucapkan Terima Kasih yang Sebesar-besarnya
          Atas Waktu & Perhatiannya
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
