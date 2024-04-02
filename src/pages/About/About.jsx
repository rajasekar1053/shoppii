import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeadPageContent from "../../components/pageProps/HeadPageContent";
import {aboutI} from "../../assets/images/index"
const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto  text-xl px-4">
      <HeadPageContent title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[750px] mr-auto text-base  text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">SHOPPII</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <h3  className="max-w-[750px] mr-auto text-base text-lightText mb-2 ">In Shoppii’s customer trust research, we found shoppers navigate to an About Us page to learn more about the brand and the people behind the products.
           Your About Page should address those two curiosities shoppers have to help them with decision making. </h3>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
