import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.min.css";

const SectionFive = () => {
  useEffect(() => {
    baguetteBox.run(".gallery", {
      buttons: "auto",
      animation: false,
    });

    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="gallery columns-2 lg:columns-3 w-full max-w-5xl mx-auto py-10 lg:py-40 px-1 gap-2 ">
        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-once="true"
          className="pb-2"
        >
          <a href="/images/image-9.jpg">
            <img src="/images/image-9.jpg" alt="image1" />
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-once="true"
          className="pb-2"
        >
          <a href="/images/image-2.jpg">
            <img src="/images/image-2.jpg" alt="image2" />
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-once="true"
          className="pb-2"
        >
          <a href="/images/image-3.jpg">
            <img src="/images/image-3.jpg" alt="image1" />
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-once="true"
          className="pb-2"
        >
          <a href="/images/image-4.jpg">
            <img src="/images/image-4.jpg" alt="image1" />
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-once="true"
          className="pb-2"
        >
          <a href="/images/image-5.jpg">
            <img src="/images/image-5.jpg" alt="image1" />
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-once="true"
          className="pb-2"
        >
          <a href="/images/image-6.jpg">
            <img src="/images/image-6.jpg" alt="image1" />
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-once="true"
          className="pb-2"
        >
          <a href="/images/image-7.jpg">
            <img src="/images/image-7.jpg" alt="image1" />
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-once="true"
          className="pb-2"
        >
          <a href="/images/image-1.jpg">
            <img src="/images/image-1.jpg" alt="image1" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
