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
    <div className="vh-100 p-3" style={{ backgroundColor: "#29292A" }}>
      <div className="d-flex gap-3 dashboard">
        <div className="row">
          {items.map((val, index) => (
            <div className="col-md-6 py-2">
              <div key={index} className="d-flex align-items-center gap-3">
                <div className="d-flex flex-column gap-3 py-3 px-4 br-1 bg w-100">
                  <div className="d-flex align-items-center gap-3">
                    <img src={val.img} />
                    <h3 className="tit3">{val.title}</h3>
                  </div>
                  <p className="mb-0 tit2">{val.description}</p>
                  <p className="mb-0 tit2">{val.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

{
  /* <div className="d-flex align-items-center gap-3"> */
}
{
  /* </div> */
}
{
  /* <div className="d-flex flex-column gap-3 py-3 px-4 br-1 bg w-100">     
            <div className="d-flex align-items-center gap-3">
              <img src={saleicon} />
              <h3 className="tit3">Total Order</h3>
            </div>
            <p className="mb-0 tit2">
              This month amount of total <br /> sold Product.
            </p>
            <p className="mb-0 tit2">0.00 AED</p> */
}

{
  /* </div> */
}

{
  /* <div className="d-flex flex-column gap-2 py-3 px-4 br-1 bg w-100">
            <div className="d-flex align-items-center gap-3">
              <img src={ordericon} />
              <h3 className="tit3">Total Sales</h3>
            </div>
            <p className="mb-0 tit2">
              This month amount of total <br /> completed orders.
            </p>
            <p className="mb-0 tit2">0</p>
          </div> */
}

{
  /* <div className="d-flex align-items-center gap-3">
          <div className="d-flex flex-column gap-2 py-3 px-4 br-1 bg w-100">
          <div className="d-flex align-items-center gap-3">
              <img src={queicon} />
              <h3 className="tit3">Orders in Que</h3>
           </div>
            <p className="mb-0 tit2">Orders to be delivered this <br /> week.</p>
            <p className="mb-0 tit2">0</p>
          </div>

          <div className="d-flex flex-column gap-2 py-3 px-4 br-1 bg w-100">
          <div className="d-flex align-items-center gap-3">
              <img src={inventoryicon} />
              <h3 className="tit3">Inventory</h3>
           </div>
            <p className="mb-0 tit2">Number of Products remaining <br /> in the inventory section</p>
            <p className="mb-0 tit2">0</p>
          </div>
        </div> */
}
