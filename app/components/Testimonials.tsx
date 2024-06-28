'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import MainHeading from "./MainHeading";
import TestimonialCard from "./TestimonialCard";
import { getTestimonials } from "@/sanity/schemas/sanity-utils";

const Testimonials = async () => {
  const testimonials = await getTestimonials();

  return (
    <div className="my-16">
        <MainHeading title="Testimonials" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@2.00': {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t._id}>
            <TestimonialCard image={t.image} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide> */}
       
        
      </Swiper>
    </div>
  );
};

export default Testimonials;
