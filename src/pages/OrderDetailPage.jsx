import React from 'react'

import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import OrderDetail from '../components/ManageOrder/OrderDetail'

function OrderDetailPage() {
  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <OrderDetail />
        </div>
      </div>
    </div>
  )
}

export default OrderDetailPage
