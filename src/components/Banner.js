import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative absolute w-full -z-20" >
      
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        // dynamicHeight={true}
      >
        <div className="">
          <img loading="lazy" src="../carousel6.jpg" alt=""  />
        </div>
        <div>
          <img loading="lazy" src="../carousel8.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../carousel7.jpg" alt=""  />
        </div>
        <div>
          <img loading="lazy" src="../carousel9.jpg" alt=""  />
        </div>
        <div>
          <img loading="lazy" src="../carousel10.jpg" alt=""  />
        </div>
        {/* //bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 */}
      </Carousel>
    </div>
  );
}

export default Banner;
