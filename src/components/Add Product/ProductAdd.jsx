import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Category from "./Category";
import UploadImage from "./UploadImage";
import ProductAddNav from "./ProductAddNav";
import Quantity from "./Quantity";
import Shipment from "./Shipment";

function ProductAdd({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setError(""); // Clear error on select
  };

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    productID: "",
    description: "",
    productAvailability: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const [step, setStep] = useState(1);

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (formData.title.trim() === "") newErrors.title = "Title is required";
      if (formData.price.trim() === "") newErrors.price = "Price is required";
      if (formData.productID.trim() === "") newErrors.productID = "Product ID is required";
      if (formData.description.trim() === "") newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const [modal, setModal] = useState(false);

  return (
    <div className="vh-100 p-3" style={{ backgroundColor: "#29292A" }}>
      <ProductAddNav setModal={setModal} step={step} setStep={setStep} />
      <div className="br-1 bg-normal-black p-3 product-add">
        {step === 1 && (
          <form>
            <div className="d-flex gap-3 text-white">
              <div className="d-flex flex-column gap-2 w-100">
                <label
                  htmlFor="title"
                  className="d-flex justify-content-between"
                >
                  Title
                  {errors.title && (
                    <span className="text-danger">{errors.title}</span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="watch"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column gap-2 w-100">
                <label
                  htmlFor="price"
                  className="d-flex justify-content-between"
                >
                  Price
                  {errors.price && (
                    <span className="text-danger">{errors.price}</span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="AED"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex gap-3 text-white mt-3">
              <div className="d-flex flex-column gap-2 w-100">
                <label
                  htmlFor="productID"
                  className="d-flex justify-content-between"
                >
                  Product ID
                  {errors.productID && (
                    <span className="text-danger">{errors.productID}</span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="#235461"
                  name="productID"
                  value={formData.productID}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-column gap-2 w-100">
                <label
                  htmlFor="productAvailability"
                  className="d-flex justify-content-between"
                >
                  Product Availability
                </label>

                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  className="br-1 p-2"
                  style={{ backgroundColor: "#2c2c2c" }}
                >
                  <DropdownToggle caret className="drop-btn">
                    {selectedOption || "Select"}
                  </DropdownToggle>
                  <DropdownMenu>
                    {[6, 7, 8, 9, 10].map((num) => (
                      <React.Fragment key={num}>
                        <DropdownItem
                          divider
                          style={{ backgroundColor: "#3D4348" }}
                        />
                        <DropdownItem
                          onClick={() => handleSelect(num.toString())}
                        >
                          {num}
                        </DropdownItem>
                      </React.Fragment>
                    ))}
                  </DropdownMenu>
                </Dropdown>

                {error && <div style={{ color: "red" }}>{error}</div>}
              </div>
            </div>

            <div className="d-flex flex-column gap-2 text-white mt-3">
              <label
                htmlFor="description"
                className="d-flex justify-content-between"
              >
                Write Description
                {errors.description && (
                  <span className="text-danger">{errors.description}</span>
                )}
              </label>
              <textarea
                className="d-flex justify-content-between"
                style={{ minHeight: "200px" }}
                placeholder="write the description about your shop"
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              onClick={handleNext}
              type="submit"
              className="btn-2 text-center mt-3"
            >
              Save
            </button>
          </form>
        )}

        {step === 2 && <Category setStep={setStep} />}
        {step === 3 && <UploadImage setStep={setStep} />}
        {step === 4 && (
          <Quantity modal={modal} setModal={setModal} setStep={setStep} />
        )}
        {step === 5 && <Shipment />}
      </div>
    </div>
  );
}

export default ProductAdd;
