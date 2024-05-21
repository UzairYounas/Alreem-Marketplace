import React, { useState } from "react";
import { Link } from "react-router-dom";

function DisputeTabData({ toggleState }) {
  const items = [
    {
      status: "Active",
      id: "ALREEM_1",
      reason: "Not Recognized",
      description: "This Product Usually I am Not Use I Need to Order the New Product.",
    },
    {
      status: "Active",
      id: "ALREEM_1",
      reason: "Not Recognized",
      description: "This Product Usually I am Not Use I Need to Order the New Product.",
    },
  ];
  const flop = [
    {
      status: "closed",
      id: "ALREEM_1",
      reason: "Not Recognized",
      description: "This Product Usually I am Not Use I Need to Order the New Product.",
    },
    {
      status: "closed",
      id: "ALREEM_1",
      reason: "Not Recognized",
      description: "This Product Usually I am Not Use I Need to Order the New Product.",
    },
  ];

  return (
    <div className="d-flex align-items-center gap-3 order-data mt-4">

      <div className={toggleState === 1 ? "d-block" : "d-none"}>
        <div className="row">

          {items.map((val, index) => (
            <div className="col-md-12 mb-4">
              <Link to='/disputeorder/disputedetail' className="br-1 p-3 d-flex flex-column gap-2 text-decoration-none">
                <h4 style={{color: '#EEE692'}}>Order Disputes</h4>
                <div className="d-flex align-items-center justify-content-between">
                  <small>Disputes Status:</small>
                  <small style={{ color: "#EEE692" }}>{val.status}</small>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <small>Order ID:</small>
                  <small style={{ color: "#EEE692" }}>{val.id}</small>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <small>Reason of Disputes:</small>
                  <small style={{ color: "#EEE692" }}>{val.reason}</small>
                </div>
                <hr className="hr-2" />
                <div className="d-flex flex-column gap-3">
                  <h5 style={{ color: "#EEE692" }}>
                    Describe the Reasons
                  </h5>
                  <small>{val.description}</small>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>

      <div className={toggleState === 2 ? "d-block" : "d-none"}>
        <div className="row">

          {flop.map((val, index) => (
            <div className="col-md-12 mb-4">
              <div className="br-1 p-3 d-flex flex-column gap-2">
                <h4 style={{color: '#EEE692'}}>Order Disputes</h4>
                <div className="d-flex align-items-center justify-content-between">
                  <small>Disputes Status:</small>
                  <small className="text-danger">{val.status}</small>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <small>Order ID:</small>
                  <small style={{ color: "#EEE692" }}>{val.id}</small>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <small>Reason of Disputes:</small>
                  <small style={{ color: "#EEE692" }}>{val.reason}</small>
                </div>
                <hr className="hr-2" />
                <div className="d-flex flex-column gap-3">
                  <h5 style={{ color: "#EEE692", marginBottom: "0" }}>
                    Describe the Reasons
                  </h5>
                  <small>{val.description}</small>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default DisputeTabData;
