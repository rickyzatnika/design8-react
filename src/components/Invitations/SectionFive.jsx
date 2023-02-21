import React from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const SectionFive = () => {
  return (
    <>
      <div className="w-full h-full py-0 lg:py-10">
        <LightGallery
          speed={500}
          elementClassNames="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-2 md:px-10 lg:px-20 "
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href="/images/image-1.jpg">
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
        </LightGallery>
      </div>
    </>
  );
};

export default SectionFive;
