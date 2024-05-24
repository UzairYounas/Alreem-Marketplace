import React, { useState } from 'react'

import Sidebar from '../components/common/Sidebar'
import InventoryDetail from '../components/Inventory/InventoryDetail'
import NavInventory from '../components/common/NavInventory'

function InventoryDetailPage() {
  const [modal, setModal] = useState(false);


  sessionStorage.setItem('url',window.location.href)

  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <NavInventory showVerticalDots={true} setModal={setModal} />
          <InventoryDetail modal={modal} setModal={setModal} />
        </div>
      </div>
    </div>
  )
}

export default InventoryDetailPage;
