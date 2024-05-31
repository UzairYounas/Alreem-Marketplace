import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function InventoryProduct({ items }) {
  console.log('Items in InventoryProduct:', items);

  return (
    <div className="row">
      {items.map((val, index) => (
        <div className="col-md-3" key={index}>
          <Link
            to={
              window.location.href !== localStorage.getItem("draftUrl")
                ? "/inventorydetail"
                : ""
            }
            className="text-decoration-none"
          >
            <div className="br-1 inventor mb-4">
              <div className="position-relative">
                <img src={val.image} className="w-100" alt={val.name} />
                {window.location.href !== localStorage.getItem("draftUrl") && (
                  <div className="position-absolute product-name">
                    <p className="mb-0">{val.name}</p>
                  </div>
                )}
                {window.location.href === localStorage.getItem("draftUrl") && (
                  <div className="position-absolute del-product">
                    <MdDelete className="text-danger" />
                  </div>
                )}
              </div>
              <div className="d-flex flex-column p-2 gap-3 mt-3">
                
                {window.location.href !== localStorage.getItem("draftUrl") && (
                  <div className="d-flex justify-content-between">
                    <small>Product ID:</small>
                    <small style={{ color: "#EEE692" }}>{val.id}</small>
                  </div>
                )}

                {window.location.href === localStorage.getItem("draftUrl") && (
                  <div className="d-flex justify-content-between">
                    <small>Name:</small>
                    <small style={{ color: "#EEE692" }}>{val.name}</small>
                  </div>
                )}

                <div className="d-flex justify-content-between">
                  <small>Status:</small>
                  <small style={{ color: "#EEE692" }}>{val.status}</small>
                </div>

                {window.location.href !== localStorage.getItem("draftUrl") && (
                  <div className="d-flex justify-content-between">
                    <small>Price:</small>
                    <small style={{ color: "#EEE692" }}>{val.price}</small>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default InventoryProduct;
