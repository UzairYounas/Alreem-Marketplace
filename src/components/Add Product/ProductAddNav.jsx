import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

function ProductAddNav({ setModal, step, setStep }) {
  const steps = [
    "Add Product",
    "Define Category",
    "Upload Images",
    "Inventory",
    "Shipment cost",
  ];

  const handleStepClick = (index) => {
    if (index + 1 <= step) {
      setStep(index + 1);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-4 text-secondary">
        {steps.map((title, index) => (
          <div
            key={index}
            className={`d-flex align-items-center gap-2 p-3 ${
              step === index + 1 ? "text-white" : ""
            }`}
            style={{
              borderBottom: step === index + 1 ? "2px solid #FFFFFF" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleStepClick(index)}
          >
            <small>{title}</small>
            <IoCheckmarkCircle
              style={{
                color: step > index + 1 ? "green" : "",
              }}
            />
          </div>
        ))}
      </div>

      {step === 4 && (
        <div
          className="d-flex align-items-center gap-2 text-white"
          style={{ cursor: "pointer" }}
          onClick={() => setModal(true)}
        >
          <small>Add color & sizes</small>
          <FiPlus />
        </div>
      )}
    </div>
  );
}

export default ProductAddNav;
