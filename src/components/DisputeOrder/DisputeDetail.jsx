import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

function DisputeDetail() {
  const items = [
    {
      name: "Burhan Judai",
      id: "ALREEM_1",
      status: "Active",
      description:
        "This Product Usually I am Not Use I Need to Order the New Product.",
    },
  ];

  return (
    <>
      <Link
        to="/disputeorder"
        className="text-white text-decoration-none mb-2 animated-link"
      >
        <span className="back-icon">
          <FaArrowLeft />
        </span>
        &nbsp;Chat Support
      </Link>
      <hr className="hr-2" />
      <Link
        to="/chat"
        className="d-flex align-items-center justify-content-between text-white text-decoration-none"
      >
        <p style={{ color: "#EEE692", marginBottom: "0" }}>
          Contact Chat Support
        </p>
        <MdKeyboardArrowRight className="h4" />
      </Link>
      <div
        className="height-break p-3 mt-2"
        style={{ backgroundColor: "#29292A" }}
      >
        {items.map((val, index) => (
          <div className="br-1 p-3 d-flex flex-column gap-2">
            <h4 style={{ color: "#EEE692" }}>User Details</h4>
            <div className="d-flex align-items-center justify-content-between text-white">
              <small>Shop Name</small>
              <small style={{ color: "#EEE692" }}>{val.name}</small>
            </div>

            <div className="d-flex align-items-center justify-content-between text-white">
              <small>Order ID:</small>
              <small style={{ color: "#EEE692" }}>{val.id}</small>
            </div>

            <div className="d-flex align-items-center justify-content-between text-white">
              <small>Disputes Status:</small>
              <small style={{ color: "#EEE692" }}>{val.status}</small>
            </div>
            <hr className="hr-2" />
            <div className="d-flex flex-column gap-3 text-white">
              <h5 style={{ color: "#EEE692", marginBottom: "0" }}>
                Describe the Reasons
              </h5>
              <small>{val.description}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisputeDetail;
