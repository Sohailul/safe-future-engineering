import React from "react";
import about from "../../assets/img/automation.webp";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center divider">About SFE</h1>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <img src={about} className="lg:max-w-xl rounded-lg" alt="" />
          <div>
            <p className="py-6 font-bold text-justify">
              SFE is a Government Registered top construction consultant in
              Chittagong having a dedicated construction division with
              specialised personnel and procedures to manage and supervise
              construction activities. Our teams work with the skill to reduce
              technical risks, prevent construction errors, control budgets and
              meet project deadlines. To maintain quality control, we regularly
              audit site teams to ensure that our procedures are followed. Our
              extensive experience spans every aspect of construction in sectors
              such as education, governmental, military, commercial and
              residential complexes.
            </p>
            <button className="btn btn-primary uppercase text-white">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
