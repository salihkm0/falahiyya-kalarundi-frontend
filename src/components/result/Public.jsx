import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { publicResult } from "../../data/publicResult";
import { PublicResult } from "./PublicResult";

export const Public = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1, 
          centerMode: true,  // Center the slide
          centerPadding: "0px" // Remove extra side padding
        }
      }
    ]
  };

  return (
    <div className="my-5 w-full flex flex-col items-center">
      <h1 className="my-3 text-[24px] md:text-[30px] font-bold text-gray-800 text-center uppercase">
        Samastha Public Exam Result
      </h1>
      <div className="w-full max-w-5xl">
        <Slider {...settings}>
          {publicResult.map((result, index) => (
            <div key={index} className="flex justify-center items-center">
              <PublicResult result={result} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
