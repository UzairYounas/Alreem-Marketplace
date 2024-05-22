import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";

import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.jpg";
import shop from "../../assets/images/shop-img.jpg";

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      img: user,
      user: "Michel",
      occupation: "Buyer",
      textimg: logo,
      time: "09:01 am",
      type: "image",
    },
    {
      id: 2,
      img: shop,
      user: "David",
      occupation: "seller",
      text: "What is any reason this product is in dispute?",
      time: "09:02 am",
      type: "text",
    },
  ]);

  return (
    <div>
      <Link to="/disputeorder" className="text-white text-decoration-none mb-2">
        <FaArrowLeft /> Chat Support
      </Link>
      <div className="p-3 mt-3" style={{ backgroundColor: "#29292A" }}>
        <div className="br-1">
          <div className="d-flex flex-column align-items-center justify-content-center text-center chatbot gap-4">
            <div className="bg-logo d-flex align-items-center justify-content-center">
              <img src={logo} />
            </div>
            <p className="mb-0">
              Welcome to Alreem Chat Support. Seller and buyer are requested to
              resolve there dispute via chat support. In case of no solution
              contact admin in the chat.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-2 chat-info">
              <HiMiniInformationCircle />
              <small>seller has opened a disputes</small>
            </div>
            <hr className="hr-2 w-100" />

            <div className="chat-app d-flex flex-column w-100">
              {messages.map((msg) => (
                <div className="d-flex align-items-end gap-3 p-2">
                  <img
                    src={msg.img}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <div key={msg.id} className="d-flex flex-column gap-2">
                    {msg.type === "text" ? (
                      <div className="message p-2">{msg.text}</div>
                    ) : (
                      <img src={msg.textimg} className="message" />
                    )}

                    <div className="d-flex gap-2">
                      <span style={{ color: "#909090" }}>{msg.time}</span>
                      <span>{msg.user}</span>
                      <span style={{ color: "#EEE692" }}>{msg.occupation}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="d-flex gap-3 p-3 chat-input"
                style={{ backgroundColor: "#111111" }}
              >
                <input
                  type="text"
                  placeholder="Type message..."
                  className="w-100 p-2"
                />
                <label htmlFor="select-img">
                  <MdOutlineAttachFile />
                </label>

                <input type="file" id="select-img" className="d-none" />
                <button>
                  <IoSend />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
