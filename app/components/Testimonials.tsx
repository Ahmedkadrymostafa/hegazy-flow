import MainHeading from "./MainHeading";
import { getTestimonials } from "@/sanity/schemas/sanity-utils";
import TestimonialsContainer from "./TestimonialsContainer";

const Testimonials = async () => {
  // const testimonials = await getTestimonials();
 

  return (
    <div className="my-28 container">
        <MainHeading title="Testimonials" />
      <TestimonialsContainer  />
      {/* <TestimonialsContainer testimonials={testimonials} /> */}
    </div>
  );
};

export default Testimonials;
