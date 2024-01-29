import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { leftBottomLeft, rightBottom, rightTop } from "../../assets/images";

const motionDivProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.2 },
};

function HeroSection() {
  return (
    <div className="">
      <div className="min-h-[60vh] flex lg:flex-row flex-col gap-2 md:gap-3 overflow-hidden">
        <div className="left-hero lg:w-2/3 w-full flex flex-col gap-2 md:gap-3 overflow-hidden">
          <motion.div
            {...motionDivProps}
            className="left-top bg-slate-300 lg:h-2/3 h-[30vh] relative w-full overflow-hidden rounded-md"
          >
            {/* <video className='w-full h-full mt-5 absolute scale-150 lg:scale-125 xl:scale-150' autoPlay muted loop={true}>
                <source src={`${heroVideo}#t=3,36`} type="video/mp4"/>
              </video> */}

            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              grabCursor={true}
              modules={[Pagination, Autoplay]}
              className="mySwiper h-full"
            >
              <SwiperSlide>
                <img
                  src={leftBottomLeft}
                  className="w-full h-[100%] absolute object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={rightBottom}
                  className="w-full h-[100%] absolute object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={rightTop}
                  className="w-full h-[100%] absolute object-cover"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>
          <div className="lg:h-1/3 md:h-[20vh] h-[40vh]">
            <div className="left-bottom flex md:flex-row flex-col gap-2 md:gap-3 h-full w-full">
              <div className="flex gap-2 md:gap-3 md:w-2/3 w-full md:h-full h-1/2">
                <motion.div
                  {...motionDivProps}
                  className="bg-slate-300 flex-1 flex items-center justify-center overflow-hidden rounded-md"
                >
                  {/* <img
                    src={leftBottomLeft}
                    className="w-full h-[fit-content]"
                    alt=""
                  /> */}
                </motion.div>
                <motion.div
                  {...motionDivProps}
                  className="bg-slate-300 flex-1 flex items-center justify-center overflow-hidden rounded-md"
                >
                  {/* <img
                    src={leftBottomMiddle}
                    className="w-full h-[fit-content]"
                    alt=""
                  /> */}
                </motion.div>
              </div>
              <motion.div
                {...motionDivProps}
                className="bg-slate-300 flex-1 flex items-center justify-center overflow-hidden rounded-md"
              >
                {/* <img
                  src={leftBottomRight}
                  className="w-full h-[fit-content]"
                  alt=""
                /> */}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="lg:h-[65vh] h-[25vh] lg:w-1/3 w-full">
          <div className="right-hero flex lg:flex-col flex-row gap-2 md:gap-3 h-full w-full">
            <motion.div
              {...motionDivProps}
              className="bg-slate-300 flex-1 lg:h-[30vh] h-full flex items-center justify-center overflow-hidden rounded-md"
            >
              {/* <img src={rightTop} className="w-full h-[fit-content]" alt="" /> */}
            </motion.div>
            <motion.div
              {...motionDivProps}
              className="bg-slate-300 flex-1 lg:h-[30vh] h-full flex items-center justify-center overflow-hidden rounded-md"
            >
              {/* <img
                src={rightBottom}
                className="w-full h-[fit-content]"
                alt=""
              /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
