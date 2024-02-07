import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, Setreview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => Setreview(data));
  }, []);
  return (
    <div>
      <SectionTitle
        SubHeading={"---what our client say---"}
        heading={"TESTIMONALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div className="text-center">
          {review.map((item) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center m-24">
                <Rating className="text-center"
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                />
                <p className="text-center">{item.details}</p>
                <h3 className="text-orange-400 text-2xl text-center">
                  {item.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
