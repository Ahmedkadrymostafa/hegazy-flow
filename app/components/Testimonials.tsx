import MainHeading from "./MainHeading";
import { getTestimonials } from "@/sanity/schemas/sanity-utils";
import TestimonialsContainer from "./TestimonialsContainer";

const Testimonials = async () => {
  // const testimonials = await getTestimonials();
 

  return (
    <div className="my-28 container">
        <MainHeading smallHeading="What Our" largeHeading="Clients Says" />
      <TestimonialsContainer  />
      {/* <TestimonialsContainer testimonials={testimonials} /> */}
    </div>
  );
};

export default Testimonials;
