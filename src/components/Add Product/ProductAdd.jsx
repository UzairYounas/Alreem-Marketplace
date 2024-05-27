// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
// import Category from "./Category";
// import UploadImage from "./UploadImage";

// function ProductAdd({ direction, ...args }) {
//   // const [selectedCategory, setSelectedCategory] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggle = () => setDropdownOpen((prevState) => !prevState);

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
//   trigger,
//   setValue,
//   clearErrors,
// } = useForm();
// const [step, setStep] = useState(1);

// const onSubmit = (data) => {
//   if (step === 1 && selectedCategory) {
//     setStep(step + 1);
//   } else if (step === 2) {
//     setStep(step + 1);
//   }
// };

// const handleNext = async () => {
//   const valid = await trigger();
//   if (valid && selectedCategory) {
//     setStep(step + 1);
//   } else {
//     if (!selectedCategory) {
//       setValue("category", ""); // Set an empty value to trigger the error
//       trigger("category"); // Trigger validation for the category field
//     }
//   }
// };

// const handleCategorySelect = (category) => {
//   setSelectedCategory(category);
//   setValue("category", category);
//   clearErrors("category");
// };

// const errorStyle = {
//   color: "red",
// };

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

function ProductAdd({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (formData.title.trim() === "") {
      newErrors.title = "Title is required";
    }
    if (formData.price.trim() === "") {
      newErrors.price = "Price is required";
    }
    if (formData.productID.trim() === "") {
      newErrors.productID = "Product ID is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form data:", formData);
      setStep(2);
    }
  };

  const [modal, setModal] = useState(false);
  return (
    <div className="vh-100 p-3" style={{ backgroundColor: "#29292A" }}>
      <ProductAddNav  setModal={setModal}/>
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
                  className="br-1 p-2"
                  style={{ backgroundColor: "#2c2c2c" }}
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={direction}
                >
                  <DropdownToggle className="drop-btn">select</DropdownToggle>
                  <DropdownMenu {...args}>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>6</DropdownItem>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>7</DropdownItem>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>8</DropdownItem>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>9</DropdownItem>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>10</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <div className="d-flex flex-column gap-2 text-white mt-3">
              <label
                htmlFor="description"
                className="d-flex justify-content-between"
              >
                Write Description
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
              onClick={handleSubmit}
              type="submit"
              className="btn-2 text-center mt-3"
            >
              Save
            </button>
          </form>
        )}

        {step === 2 && 
          <Category setStep={setStep}  />
        }

        {step === 3 && 
          <UploadImage setStep={setStep}  />
        }

        {/* {step === 4 && */}
          <Quantity modal={modal} />
        {/* } */}
      </div>
    </div>
  );
}

export default ProductAdd;

{
  /* {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">

              <div className="col-md-6">
                <div className="d-flex flex-column gap-3 text-white">
                  <div className="d-flex flex-column gap-2">
                    <label
                      htmlFor="title"
                      className="d-flex justify-content-between"
                    >
                      Title
                      {errors.title && (
                        <span style={errorStyle}>{errors.title.message}</span>
                      )}
                    </label>
                    <input
                      className="d-flex justify-content-between"
                      type="text"
                      placeholder="watch"
                      {...register("title", { required: "Title is required" })}
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label
                      htmlFor="productID"
                      className="d-flex justify-content-between"
                    >
                      Product ID
                      {errors.productID && (
                        <span style={errorStyle}>
                          {errors.productID.message}
                        </span>
                      )}
                    </label>
                    <input
                      className="d-flex justify-content-between"
                      type="text"
                      placeholder="#235461"
                      {...register("productID", {
                        required: "Product ID is required",
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex flex-column gap-3 text-white">
                  <div className="d-flex flex-column gap-2">
                    <label
                      htmlFor="price"
                      className="d-flex justify-content-between"
                    >
                      Price (AED)
                      {errors.price && (
                        <span style={errorStyle}>{errors.price.message}</span>
                      )}
                    </label>
                    <input
                      className="d-flex justify-content-between"
                      type="text"
                      placeholder="AED"
                      {...register("price", { required: "Price is required" })}
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="productAvailability">
                      Product Availability
                      {errors.category && (
                        <span style={errorStyle}>
                          {errors.category.message}
                        </span>
                      )}
                    </label>

                    <Dropdown
                      className="br-1 p-2"
                      style={{ backgroundColor: "#2c2c2c" }}
                      isOpen={dropdownOpen}
                      toggle={toggle}
                      direction={direction}
                    >
                      <DropdownToggle className="drop-btn">
                        {selectedCategory || "6"}
                      </DropdownToggle>
                      <DropdownMenu {...args}>
                        <DropdownItem
                          divider
                          style={{ backgroundColor: "#3D4348" }}
                        />
                        <DropdownItem onClick={() => handleCategorySelect("6")}>
                          6
                        </DropdownItem>
                        <DropdownItem
                          divider
                          style={{ backgroundColor: "#3D4348" }}
                        />
                        <DropdownItem onClick={() => handleCategorySelect("7")}>
                          7
                        </DropdownItem>
                        <DropdownItem
                          divider
                          style={{ backgroundColor: "#3D4348" }}
                        />
                        <DropdownItem onClick={() => handleCategorySelect("8")}>
                          8
                        </DropdownItem>
                        <DropdownItem
                          divider
                          style={{ backgroundColor: "#3D4348" }}
                        />
                        <DropdownItem onClick={() => handleCategorySelect("9")}>
                          9
                        </DropdownItem>
                        <DropdownItem
                          divider
                          style={{ backgroundColor: "#3D4348" }}
                        />
                        <DropdownItem
                          onClick={() => handleCategorySelect("10")}
                        >
                          10
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-3">
                <div className="d-flex flex-column gap-2 text-white">
                  <label
                    htmlFor="description"
                    className="d-flex justify-content-between"
                  >
                    Write Description
                    {errors.description && (
                      <span style={errorStyle}>
                        {errors.description.message}
                      </span>
                    )}
                  </label>
                  <textarea
                    className="d-flex justify-content-between"
                    style={{ minHeight: "200px" }}
                    placeholder="write the description about your shop"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn-2 text-center mt-3"
                  onClick={handleNext}
                >
                  Save
                </button>
              </div>

            </div>
          </form>
        )}

        {step === 2 && <Category />}

        {step === 3 && <UploadImage />} */
}
