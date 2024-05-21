import React from 'react'
import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import DisputeTab from '../components/DisputeOrder/DisputeTab'

function DisputePage() {
  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <DisputeTab />
        </div>
      </div>
    </div>
  )
}

export default DisputePage
