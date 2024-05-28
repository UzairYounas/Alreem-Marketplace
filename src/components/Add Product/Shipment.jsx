import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { Modal, ModalBody } from "reactstrap";

function Shipment() {
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false)

  const items = [
    {
      title: "Ajman",
      cost: "55.00 AED",
    },
    {
      title: "Dubai",
      cost: "35.00 AED",
    },
  ];

  const handleSelection = (index) => {
    setSelected(index);
  };

  return (
    <div className="d-flex flex-column gap-3">
      {items.map((val, index) => (
        <div
          key={index}
          className="br-1 d-flex justify-content-between p-3 text-white"
          style={{ backgroundColor: "#29292A" }}
        >
          <div className="d-flex flex-column">
            <h5 style={{ color: "#EEE692" }}>{val.title}</h5>
            <p className="mb-0" style={{cursor: 'pointer'}} onClick={() => setModal(true)}>Shipment cost: {val.cost}</p>
          </div>
          <input
            type="radio"
            name="shipment"
            checked={selected === index}
            onChange={() => handleSelection(index)}
            style={{ accentColor: "#FFFFFF", width: "19px" }}
          />
        </div>
      ))}

      <Modal isOpen={modal} size="md" centered={true}>
        <ModalBody
          className="br-1 bg-normal-black text-white p-3 position-relative"
          style={{ borderRadius: "15px", padding: "15px 0" }}
        >
          <div className="d-flex flex-column gap-3 text-white text-center">
            <h5>Add Shipment cost</h5>
            <p className="mb-0 px-4">
              Add a shipment cost for yours emirate which will be charged from
              customer at the time of order placing. This cost will be charged
              with the product cost at the time of order placing.
            </p>
          </div>
          <div className="position-absolute cross-btn" style={{top: '6px', right: '10px'}} onClick={() => setModal(false)}>
            <RxCross2 className="text-white" />
          </div>
          <div className="d-flex flex-column gap-2 mt-4 price-add">
            <label>Cost (AED)</label>
            <input type="text" placeholder="Price"/>
            <button className="btn-2 mt-3" onClick={() => setModal(false)}>Save</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Shipment;
