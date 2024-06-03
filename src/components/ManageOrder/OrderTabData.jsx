import React, { useState } from "react";
import { Link } from "react-router-dom";

import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";

function OrderTabData({ toggleState }) {
  const items = [
    {
      img: product1,
      title: "Vitality vibe",
      description: "order on:",
      number: "UAE-095498745",
      delivery: "Delivery on:",
      date: "02:09 AM Thursday 21, July 2024",
      quantity: "only 1 items",
    },
    {
      img: product2,
      title: "Golden ring",
      description: "order on:",
      number: "UAE-095498745",
      delivery: "Delivery on:",
      date: "02:09 AM Thursday 21, July 2024",
      quantity: "only 3 items",
    },
    {
      img: product3,
      title: "Power Bank",
      description: "order on:",
      number: "UAE-095498745",
      delivery: "Delivery on:",
      date: "02:09 AM Thursday 21, July 2024",
      quantity: "only 5 items",
    },
  ];

  return (
    <div className="d-flex align-items-center gap-3 order-data mt-4">
      <div className={toggleState === 1 ? "d-block" : "d-none"}>
        <div className="row">
          {items.map((val, index) => (
            <div className="col-md-12 mb-4">
              <div className="br-1 p-2 position-relative">
                <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-3 mb-2">
                  <img src={val.img} />

                  <div className="d-flex flex-column gap-3">
                    <h5>{val.title}</h5>
                    <small className="mb-0">
                      {val.description} <span>{val.number}</span>
                    </small>
                    <small className="mb-0">
                      {val.delivery} <span>{val.date}</span>
                    </small>
                  </div>
                </div>
                <small className="pt-3">{val.quantity}</small>
                <Link
                  to="/orderdetail"
                  className="text-decoration-none text-black"
                >
                  <button>Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={toggleState === 2 ? "d-block" : "d-none"}>
        <div className="row">
          {items
            .slice()
            .reverse()
            .map((val, index) => (
              <div className="col-md-12 mb-4">
                <div className="br-1 p-2 position-relative">
                  <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-3 mb-2">
                    <img src={val.img} />

                    <div className="d-flex flex-column gap-3">
                      <h5>{val.title}</h5>
                      <small className="mb-0">
                        {val.description} <span>{val.number}</span>
                      </small>
                      <small className="mb-0">
                        {val.delivery} <span>{val.date}</span>
                      </small>
                    </div>
                  </div>
                  <small className="pt-3">{val.quantity}</small>
                  <Link
                    to="/complete"
                    className="text-decoration-none text-black"
                  >
                    <button>Details</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={toggleState === 3 ? "d-block" : "d-none"}>
        <div className="row">
          {items.map((val, index) => (
            <div className="col-md-12 mb-4">
              <div className="br-1 p-2 position-relative">
                <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-3 mb-2">
                  <img src={val.img} />

                  <div className="d-flex flex-column gap-3">
                    <h5>{val.title}</h5>
                    <small className="mb-0">
                      {val.description} <span>{val.number}</span>
                    </small>
                    <small className="mb-0">
                      {val.delivery} <span>{val.date}</span>
                    </small>
                  </div>
                </div>
                <small className="pt-3">{val.quantity}</small>
                <Link to="/cancel" className="text-decoration-none text-black">
                  <button>Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderTabData;
