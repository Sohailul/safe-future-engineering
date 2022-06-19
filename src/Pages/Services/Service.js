import React from "react";

const Service = ({ service }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl h-full">
        <figure>
          <img src={service.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl text-center font-bold">{service.name}</h2>
          <p className="text-justify" style={{ fontSize: "16px" }}>
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
