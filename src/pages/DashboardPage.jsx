import React from "react";

import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import Dashboard from "../components/Dashboard";

function DashboardPage() {
  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
