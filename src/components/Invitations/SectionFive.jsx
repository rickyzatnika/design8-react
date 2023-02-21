import React, { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Fancybox = lazy(() => import("../FancyBox"));

const SectionFive = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "DOMContentLoaded",
      animatedClassName: "aos-animate",
    });
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Fancybox
          option={{
            infinite: false,
            mainClass: true,
            dragToClose: true,
            animated: false,
          }}
        >
          <div className="columns-2 lg:columns-3 w-full max-w-full px-4 mx-auto pb-10 gap-4 mb-10 ">
            <button
              data-fancybox="gallery"
              data-src="/images/image-9.jpg"
              className="button button-secondary pb-4"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
              >
                <img src="/images/image-9.jpg" alt="image1" />
              </div>
            </button>
            <button
              data-fancybox="gallery"
              data-src="/images/image-2.jpg"
              className="button button-secondary pb-4"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <img src="/images/image-2.jpg" alt="image2" />
              </div>
            </button>
            <button
              data-fancybox="gallery"
              data-src="/images/image-3.jpg"
              className="button button-secondary pb-4"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <img src="/images/image-3.jpg" alt="image1" />
              </div>
            </button>
            <button
              data-fancybox="gallery"
              data-src="/images/image-4.jpg"
              className="button button-secondary pb-4"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <img src="/images/image-4.jpg" alt="image1" />
              </div>
            </button>
            <button
              data-fancybox="gallery"
              data-src="/images/image-5.jpg"
              className="button button-secondary pb-4"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <img src="/images/image-5.jpg" alt="image1" />
              </div>
            </button>
            <button
              data-fancybox="gallery"
              data-src="/images/image-6.jpg"
              className="button button-secondary pb-4"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <img src="/images/image-6.jpg" alt="image1" />
              </div>
            </button>
            <button
              data-fancybox="gallery"
              data-src="/images/image-7.jpg"
              className="button button-secondary pb-4"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <img src="/images/image-7.jpg" alt="image1" />
              </div>
            </button>
            <button
              data-fancybox="gallery"
              data-src="/images/image-1.jpg"
              className="button button-secondary pb-4"
            >
              <div
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <img src="/images/image-1.jpg" alt="image1" />
              </div>
            </button>
          </div>
        </Fancybox>
      </Suspense>
    </>
  );
};

export default SectionFive;
