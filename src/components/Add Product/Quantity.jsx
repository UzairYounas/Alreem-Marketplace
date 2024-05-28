import React, { useState } from "react";

import { MdDelete } from "react-icons/md";

import {
  Modal,
  ModalBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Quantity({ modal, setModal, setStep }) {
  const [dropdownOpenColor, setDropdownOpenColor] = useState(false);
  const [dropdownOpenSize, setDropdownOpenSize] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState({});
  const [selections, setSelections] = useState([]);

  const toggleColor = () => setDropdownOpenColor(!dropdownOpenColor);
  const toggleSize = () => setDropdownOpenSize(!dropdownOpenSize);

  const handleColorSelect = (color) => setSelectedColor(color);
  const handleSizeSelect = (size) => setSelectedSize(size);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  const handleSave = () => {
    let newErrors = {};

    if (!selectedColor) newErrors.color = "Please select a color";
    if (!quantity) newErrors.quantity = "Please enter a quantity";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSelections([
      ...selections,
      { color: selectedColor, size: selectedSize, quantity },
    ]);
    setSelectedColor("");
    setSelectedSize("");
    setQuantity("");
    setModal(false);
  };

  const handleDeleteSelection = (index) => {
    const updatedSelections = [...selections];
    updatedSelections.splice(index, 1);
    setSelections(updatedSelections);
  };

  return (
    <>
      <Modal isOpen={modal} size="md" centered={true}>
        <ModalBody
          className="br-1 bg-normal-black text-white p-3"
          style={{ borderRadius: "15px", padding: "15px 0" }}
        >
          <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="color">Choose Color</label>
              {errors.color && (
                <div style={{ color: "red", marginLeft: "10px" }}>
                  {errors.color}
                </div>
              )}
            </div>
            <Dropdown
              isOpen={dropdownOpenColor}
              toggle={toggleColor}
              className="br-1 p-2"
            >
              <DropdownToggle caret className="drop-btn">
                {selectedColor || "Select Color"}
              </DropdownToggle>
              <DropdownMenu>
                {["Red", "Green", "Blue", "Pink", "Grey"].map((color) => (
                  <DropdownItem
                    key={color}
                    onClick={() => handleColorSelect(color)}
                  >
                    {color}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="d-flex flex-column gap-2 mt-3">
            <label>Size (optional)</label>
            <Dropdown
              isOpen={dropdownOpenSize}
              toggle={toggleSize}
              className="br-1 p-2"
              style={{ backgroundColor: "#2c2c2c" }}
            >
              <DropdownToggle caret className="drop-btn">
                {selectedSize || "Select Size"}
              </DropdownToggle>
              <DropdownMenu>
                {[6, 7, 8, 9, 10].map((num) => (
                  <DropdownItem
                    key={num}
                    onClick={() => handleSizeSelect(num.toString())}
                  >
                    {num}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="d-flex flex-column gap-2 mt-3 product-add">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="quantity">Quantity</label>
              {errors.quantity && (
                <div style={{ color: "red", marginLeft: "10px" }}>
                  {errors.quantity}
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Add"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>

          <button onClick={handleSave} className="btn-2 mt-3">
            Save
          </button>
        </ModalBody>
      </Modal>

      <div className="selected-values mt-3">
        <div className="d-flex align-items-center gap-2 text-white justify-content-between">
          <div className="br-1 d-flex align-items-center text-center select-quant">
            Color
          </div>
          <div className="br-1d-flex align-items-center text-center select-quant">
            Size
          </div>
          <div className="br-1 d-flex align-items-center text-center select-quant">
            Quantity
          </div>
          <div className="br-1 d-flex align-items-center text-danger select-quant">
            <MdDelete />
          </div>
        </div>
        {selections.map((selection, index) => (
          <div
            key={index}
            className="selected-values br-1 mt-3 d-flex align-items-center justify-content-between text-white"
            style={{ backgroundColor: "#2A2A2A", padding: "14px 57px" }}
          >
            <p className="mb-0">{selection.color}</p>
            <p className="mb-0">{selection.size || "N/A"}</p>
            <p className="mb-0">{selection.quantity}</p>
            <MdDelete className="text-danger" onClick={() => handleDeleteSelection(index)} />
          </div>
        ))}
        <button className="btn-2 mt-4" onClick={() => setStep(5)}>
          Save
        </button>
      </div>
    </>
  );
}

export default Quantity;
