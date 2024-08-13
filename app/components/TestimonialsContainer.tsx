'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "./TestiCard";

interface Testimonial {
    _id?: string;
    image: string;
  }
  
  interface TestimonialsContainerProps {
    testimonials: Testimonial[];
  }
  
const TestimonialsContainer = () => {
  return (
    <div>
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
        {/* {testimonials?.map((t: Testimonial) => (
          <SwiperSlide key={t._id}>
            <TestimonialCard image={t.image} />
          </SwiperSlide>
        ))} */}
          <SwiperSlide>
            <TestimonialCard name="john dou" jobTitle="ceo" rating={5} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed molestiae delectus, magnam, beatae, fugit quod voluptatibus expedita suscipit culpa aperiam sit et laudantium perspiciatis doloremque vero vel accusantium voluptates." />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard name="john dou" jobTitle="ceo" rating={5} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed molestiae delectus, magnam, beatae, fugit quod voluptatibus expedita suscipit culpa aperiam sit et laudantium perspiciatis doloremque vero vel accusantium voluptates." />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard name="john dou" jobTitle="ceo" rating={5} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed molestiae delectus, magnam, beatae, fugit quod voluptatibus expedita suscipit culpa aperiam sit et laudantium perspiciatis doloremque vero vel accusantium voluptates." />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard name="john dou" jobTitle="ceo" rating={5} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed molestiae delectus, magnam, beatae, fugit quod voluptatibus expedita suscipit culpa aperiam sit et laudantium perspiciatis doloremque vero vel accusantium voluptates." />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialsContainer