import React, { useState } from "react";
import logo from "../assets/images/logo.png";

import { FaRegEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Login() {
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);

  return (
    <div className="bg-black login vh-100 d-flex align-items-center justify-content-center">

      <div className="login-box bg-normal-black bor-gray">
        <div className="d-flex flex-column align-items-center justify-content-center gap-3">
          <img src={logo} alt='logo' />
          <h4>Login</h4>

          <form className="d-flex flex-column gap-3 w-100">
            <label>Phone Number</label>
            <PhoneInput
              international
              className={"rounded ps-2"}
              defaultCountry="US"
              onChange={setValue}
            />

            <div className="d-flex flex-column">
              <label>Password</label>

              <div className="d-flex align-items-center justify-content-between position-relative">
                <input
                  type={show ? "password" : "text"}
                  id="password"
                  name="password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="d-flex align-items-center p-2 position-absolute end-0"
                >
                  {show ? (
                    <FaRegEyeSlash style={{ color: "#FFFFFF" }} />
                  ) : (
                    <IoMdEye style={{ color: "#FFFFFF" }} />
                  )}
                </span>
              </div>
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
