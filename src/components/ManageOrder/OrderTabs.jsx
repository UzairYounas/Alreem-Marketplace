import React, { useState } from "react";

import OrderTabData from "./OrderTabData";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function OrderTabs() {

  const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="p-3 height-break" style={{ backgroundColor: "#29292A" }}>
      <div className="d-flex align-items-center p-2 mb-3 br-1 order-tab">
        <button className={toggleState === 1 ? 'active' : 'null'} onClick={() => toggleTab(1)}>Pending</button>
        <button className={toggleState === 2 ? 'active' : 'null'} onClick={() => toggleTab(2)}>Completed</button>
        <button className={toggleState === 3 ? 'active' : 'null'} onClick={() => toggleTab(3)}>Cancelled</button>
      </div>

      <OrderTabData toggleState={toggleState} />

      <div className="d-flex align-items-center justify-content-between mt-4">
        <div></div>
        <div className="d-flex align-items-center justify-content-center ordervalue gap-2">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>11</button>
          <button>12</button>
          <button>13</button>
        </div>
        <div className="d-flex align-items-center gap-2 ordervalue">
          <button className="non-active"><FaArrowLeft /> Previous</button>
          <button>Next <FaArrowRight /></button>
        </div>

      </div>
    </div>
  );
}

export default OrderTabs;
