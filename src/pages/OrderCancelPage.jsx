import React from 'react'

import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import OrderCancel from '../components/ManageOrder/OrderCancel'

function OrderCancelPage() {
  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <OrderCancel />
        </div>
      </div>
    </div>
  )
}

export default OrderCancelPage
