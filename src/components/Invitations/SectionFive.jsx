import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.min.css";

const SectionFive = ({ imageUrl }) => {
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
      <div className="gallery columns-2 lg:columns-3 w-full max-w-5xl mx-auto py-10 lg:py-40 px-1 gap-0">
        {imageUrl.map((image, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-once="true"
            className="mb-0"
          >
            <a href={image?.secure_url}>
              <img
                src={image?.secure_url}
                alt={image?.public_id}
                className="border-4 border-amber-900/80"
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionFive;
