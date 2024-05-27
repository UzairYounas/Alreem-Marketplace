import React, { useState } from "react";
import { FaCirclePlus, FaTimes } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function UploadImage() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedImages.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }
    const newImages = files.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages([...selectedImages, ...newImages]);
  };

  const removeImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  return (
    <div className="vh-100 p-3" style={{ backgroundColor: "#29292A" }}>
      <div className="br-1 bg-normal-black p-3">
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
          <p className="mb-0">{selectedImages.length}/5</p>
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
                    fontSize: '20px',
                    backgroundColor: '#2c2c2c',
                    borderRadius: '50%',
                    color: '#FFFFFF',
                    padding: '3px'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="btn-2 mt-5">
        Save
      </button>
        
      </div>
     
    </div>
  );
}

export default UploadImage;
