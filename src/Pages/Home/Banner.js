import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/img/automation.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="lg:max-w-xl rounded-lg bounce" alt="" />
          <div>
            <h1 className="text-4xl font-bold mb-3 leading-snug">
              Electrical Engineering Solution For Safest Constructions{" "}
            </h1>
            <Link to="/contact">
              <button className="btn btn-primary text-white font-bold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
