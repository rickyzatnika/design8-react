import React from "react";
import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.min.css";

const SectionFive = () => {
  baguetteBox.run(".gallery", {
    animation: "fadeIn",
    buttons: true,
    noScrollbars: true,
    overlayBackgroundColor: "black",
  });
  return (
    <>
      <div className="gallery grid grid-cols-3 w-full h-full py-0 lg:py-10">
        <a href="/images/image-1.jpg" data-caption="Image caption">
          <img
            alt="img1"
            src="/images/image-1.jpg"
            className="w-full object-cover"
          />
        </a>
        <a href="/images/image-2.jpg">
          <img
            alt="img1"
            src="/images/image-2.jpg"
            className="w-full object-cover"
          />
        </a>
        <a href="/images/image-3.jpg">
          <img
            alt="img1"
            src="/images/image-3.jpg"
            className="w-full object-cover"
          />
        </a>
        <a href="/images/image-8.jpg">
          <img
            alt="img1"
            src="/images/image-8.jpg"
            className="w-full object-cover"
          />
        </a>
        <a href="/images/image-4.jpg">
          <img
            alt="img1"
            src="/images/image-4.jpg"
            className="w-full object-cover"
          />
        </a>
        <a href="/images/image-5.jpg">
          <img
            alt="img1"
            src="/images/image-5.jpg"
            className="w-full object-cover"
          />
        </a>
      </div>
    </>
  );
};

export default SectionFive;
