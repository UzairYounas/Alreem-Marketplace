import React from "react";

import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import OrderTabs from "../components/ManageOrder/OrderTabs";

function OrderPage() {
  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <OrderTabs />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
