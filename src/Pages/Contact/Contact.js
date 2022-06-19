import React from "react";
import { FiGlobe } from "react-icons/fi";
import { FaFacebookSquare, FaStaylinked } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="part-1">
        <div className="hero bg-base-200 rounded-md mt-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold pt-5">Get In Touch</h1>
              <p className="py-6">
                Get In Touch for free consultation and get best quotes. Quality
                Service || 24/7 Support
              </p>
              <a href="https://m.me/sfeelectrical2011" target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="part-2 mb-8 mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-8">
        <div class="card max-w bg-base-100 shadow-xl pt-5">
          <span className="flex justify-center items-center text-3xl">
            <GoLocation />
          </span>
          <div class="card-body items-center text-center">
            <h1 className="text-xl font-bold">Location</h1>
            <p>Bahaddarhat-4212, Chittagong, Bangladesh</p>
          </div>
        </div>
        <div class="card max-w bg-base-100 shadow-xl pt-5">
          <span className="flex justify-center items-center text-3xl">
            <BsFillTelephoneFill />
          </span>
          <div class="card-body items-center text-center">
            <h1 className="text-xl font-bold">Phone</h1>
            <p>+8801819-090965</p>
            <p>+8801979-931084</p>
          </div>
        </div>
        <div class="card max-w bg-base-100 shadow-xl pt-5">
          <span className="flex justify-center items-center text-3xl">
            <FaStaylinked />
          </span>
          <div class="card-body items-center text-center">
            <h1 className="text-xl font-bold">Connect Us</h1>
            <div className="icons flex text-2xl gap-3">
              <a href="https://sfebd.com">
                <FiGlobe />
              </a>
              <a href="https://www.facebook.com/sfeelectrical2011">
                <FaFacebookSquare />
              </a>
              <a href="mailto: sfeelectrical2011@gmail.com">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
