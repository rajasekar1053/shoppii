import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import Slider from "react-slick";
import { SplOfferData } from "../../../constants";
import { useParams } from "react-router-dom";
import SampleNextArrow from "../NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../NewArrivals/SamplePrevArrow";

const SpecialOffers = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(SplOfferData);
  }, [data]);

  const cartData = data.filter((item) => item.cart === category);
  return (
    <div className="w-full pb-20">
      
       <Heading heading="Special Offers" /> 
      <div className="w-full grid  grid-cols-1  gap-10">
      <Slider  {...settings}>
        {cartData.map((data) => (
          <Product
            key={data._id}
            _id={data._id}
            img={data.image_url}
            productName={data.productName}
            price={data.price}
            color={data.brand}
            badge={true}
            des={data.des}
          /> 
           
        ))}</Slider>
      </div>
   
    </div> 
  );
};

export default SpecialOffers;
