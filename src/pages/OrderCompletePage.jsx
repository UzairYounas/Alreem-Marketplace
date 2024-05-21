import React from 'react'

import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import OrderComplete from '../components/ManageOrder/OrderComplete'

function OrderCompletePage() {
  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <OrderComplete />
        </div>
      </div>
    </div>
  )
}

export default OrderCompletePage
