import React from "react";

import saleicon from "../assets/images/saleicon.png";
import ordericon from "../assets/images/ordericon.png";
import queicon from "../assets/images/queicon.png";
import inventoryicon from "../assets/images/inventoryicon.png";

function Dashboard() {
  const items = [
    {
      img: saleicon,
      title: "Total Order",
      description: "This month amount of total  sold Product",
      quantity: "0.00 AED",
    },
    {
      img: ordericon,
      title: "Total Sales",
      description: "This month amount of total completed orders.",
      quantity: "0",
    },
    {
      img: queicon,
      title: "Orders in Que",
      description: "Orders to be delivered this week.",
      quantity: "0",
    },
    {
      img: inventoryicon,
      title: "Inventory",
      description: "Number of Products remaining in the inventory section",
      quantity: "0",
    },
  ];

  return (
    <div className="height-break p-3" style={{ backgroundColor: "#29292A" }}>
      <div className="d-flex gap-3 dashboard">
        <div className="row">
          {items.map((val, index) => (
            <div className="col-md-6 py-2 d-flex">
              <div
                key={index}
                className="d-flex flex-column gap-3 py-3 px-4 br-1 bg w-100"
              >
                <div className="d-flex align-items-center gap-3">
                  <img src={val.img} />
                  <h3 className="tit3">{val.title}</h3>
                </div>
                <p className="mb-0 tit2">{val.description}</p>
                <p className="mb-0 tit2">{val.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
