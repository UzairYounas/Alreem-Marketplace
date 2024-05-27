import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import Quantity from "./Quantity";

function ProductAddNav({ setModal }) {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-4 text-secondary">
        <div className="d-flex align-items-center gap-2 p-3">
          <small>Add Product</small>
          <IoCheckmarkCircle />
        </div>

        <div className="d-flex align-items-center gap-2 p-3">
          <small>Define Category</small>
          <IoCheckmarkCircle />
        </div>

        <div className="d-flex align-items-center gap-2 p-3">
          <small>Upload Images</small>
          <IoCheckmarkCircle />
        </div>

        <div className="d-flex align-items-center gap-2 p-3">
          <small>Inventory</small>
          <IoCheckmarkCircle />
        </div>

        <div className="d-flex align-items-center gap-2 p-3">
          <small>Shipment cost</small>
          <IoCheckmarkCircle />
        </div>
      </div>

      <div className="d-flex align-items-center gap-2 text-white" style={{cursor: 'pointer'}} onClick={() => setModal(true)} >
        <small>Add color & sizes</small>
        <FiPlus /> 
      </div>
    </div>
  );
}

export default ProductAddNav;
