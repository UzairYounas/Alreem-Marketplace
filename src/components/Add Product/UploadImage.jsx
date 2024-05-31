import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function UploadImage({ setStep }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setSelectedImages([...selectedImages, ...newImages]);
    setError("");
  };

  const removeImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  const handleSave = () => {
    if (selectedImages.length < 5) {
      setError("Please select at least 5 images.");
    } else {
      setError("");
      setStep(4);
    }
  };

  return (
    <div className="height-break p-3">
      <div className="d-flex justify-content-between text-white">
        <label
          htmlFor="upload-img"
          className="d-flex flex-column align-items-center py-4 px-3 gap-2"
          style={{
            border: "2px dotted #3D4348",
            borderRadius: "10px",
            backgroundColor: "#2c2c2c",
          }}
        >
          <FaCirclePlus />
          <h5>Tap to Upload</h5>
        </label>
        <input
          type="file"
          id="upload-img"
          className="d-none"
          multiple
          onChange={handleImageChange}
        />
        <p className="mb-0">{selectedImages.length}</p>
      </div>
      <hr className="hr-2" />

      {selectedImages.length > 0 && (
        <div className="mt-3">
          <div className="d-flex flex-wrap gap-2">
            {selectedImages.map((image, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={image}
                  alt={`Selected ${index + 1}`}
                  style={{
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <RxCross2
                  onClick={() => removeImage(index)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    cursor: "pointer",
                    fontSize: "20px",
                    backgroundColor: "#2c2c2c",
                    borderRadius: "50%",
                    color: "#FFFFFF",
                    padding: "3px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <button onClick={handleSave} className="btn-2 mt-5">
        Save
      </button>
    </div>
  );
}

export default UploadImage;
