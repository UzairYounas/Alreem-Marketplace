import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

import { FaArrowLeft } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";

import { BsThreeDotsVertical } from "react-icons/bs";

import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.jpg";
import shop from "../../assets/images/shop-img.jpg";
import ring from "../../assets/images/ring.jpg";

function Chat(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [messages, setMessages] = useState([
    {
      id: 1,
      img: user,
      user: "Michel",
      occupation: "Buyer",
      textimg: ring,
      time: "09:01 am",
      type: "image",
    },
    {
      id: 2,
      img: shop,
      user: "David",
      occupation: "Seller",
      text: "What is any reason this product is in dispute?",
      time: "09:02 am",
      type: "text",
    },
  ]);

  return (
    <div>
      <Link
        to="/disputeorder"
        className="text-white text-decoration-none mb-2 animated-link"
      >
        <span className="back-icon">
          <FaArrowLeft />
        </span>
        &nbsp;Chat Support
      </Link>
      <div
        className="height-break p-3 mt-3"
        style={{ backgroundColor: "#29292A" }}
      >
        <div className="br-1">
          <div className="d-flex flex-column align-items-center justify-content-center text-center chatbot gap-4 position-relative">
            <div className="bg-logo d-flex align-items-center justify-content-center mt-3">
              <img src={logo} alt="Logo" />
            </div>
            <p className="mb-0">
              Welcome to Alreem Chat Support. Seller and buyer are requested to
              resolve their dispute via chat support. In case of no solution
              contact admin in the chat.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-2 chat-info">
              <HiMiniInformationCircle />
              <small>Seller has opened a dispute</small>
            </div>

            <BsThreeDotsVertical
              className="text-white"
              onClick={toggle}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "8px",
                right: "8px",
                fontSize: "21px",
              }}
            />

            <hr className="hr-2 w-100" />

            <div className="chat-app d-flex flex-column w-100">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`d-flex align-items-end gap-3 p-2 ${
                    msg.id === 2 ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <img
                    src={msg.img}
                    alt="User"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <div className="d-flex flex-column gap-2">
                    {msg.type === "text" ? (
                      <div
                        className="message p-2"
                        style={{
                          borderRadius: msg.id === 2 ? "15px 15px 0 15px" : "",
                        }}
                      >
                        {msg.text}
                      </div>
                    ) : (
                      <img
                        src={msg.textimg}
                        alt="Message"
                        className="message"
                      />
                    )}
                    <div className="d-flex gap-2 align-self-end">
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

      <Modal isOpen={modal} toggle={toggle} {...args} size="md" centered={true}>
        <ModalBody
          className="br-1 bg-normal-black"
          style={{ borderRadius: "15px", padding: "15px 0" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center text-center text-white">
            <p style={{ color: "#EEE692" }}>Invite Admin</p>
            <small>
              Are you sure you want the admin to invite in this chat?
            </small>
            <hr className="hr-2 w-100" />

            <p className="mb-0">Yes, invite</p>
            <hr className="hr-2 w-100" />

            <p className="text-danger mb-0">cancel</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Chat;
