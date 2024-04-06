"use client";
import React from "react";
import Slider from "react-slick";
import Image
  from "next/image";
export default function HomepageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    Infinity: true,
    adaptiveHeight: true

  };
  return (
    <Slider {...settings}>
      <Image src="/carousel01.jpg" alt="carousel 1" width={640} height={640} />
      <Image src="/carousel02.jpg" alt="carousel 2" width={640} height={640} />
      <Image src="/carousel03.jpg" alt="carousel 3" width={640} height={640} />
    </Slider>
  );
}