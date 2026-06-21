import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const zoomedContainerRef = useRef(null); // Attach to the whole modal layout

  useEffect(() => {
    const handleClick = (e) => {
      // If modal container is not open, do nothing
      if (!zoomedContainerRef.current) return;

      // If clicking completely outside the modal container, close it
      if (!zoomedContainerRef.current.contains(e.target)) {
        setImages((prevImages) =>
          prevImages.map((img) => ({ ...img, imageClick: false }))
        );
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleAddImage = () => {
    if (!userInput.trim()) return;
    const newImage = {
      image: userInput,
      id: uuidv4(),
      imageClick: false,
    };
    setImages([...images, newImage]);
    setUserInput("");
  };

  const handleDelete = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  // Used only for clicking thumbnails in the gallery grid
  const openImage = (e, id) => {
    e.stopPropagation(); // Stops immediate document listener execution
    setImages((prev) =>
      prev.map((img) =>
        img.id === id
          ? { ...img, imageClick: true }
          : { ...img, imageClick: false }
      )
    );
  };

  // Explicit close function for the backdrop modal click
  const closeAllImages = () => {
    setImages((prev) => prev.map((img) => ({ ...img, imageClick: false })));
  };

  const zoom = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: "40px",
    boxSizing: "border-box",
    zIndex: 9999,
    cursor: "zoom-out",
  };

  const zoomedImage = {
    maxWidth: "80%",
    maxHeight: "80%",
    cursor: "default",
  };

  return (
    <div>
      <h1>Image Gallery Application</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Image URL"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>
      <div className="image-container">
        {images.map((img) => (
          <div className="image-box" key={img.id}>
            <img
              src={img.image}
              alt=""
              onClick={(e) => openImage(e, img.id)}
              style={{ cursor: "pointer" }}
            />

            <button onClick={() => handleDelete(img.id)}>Delete</button>

            {img.imageClick && (
              /* The backdrop container holds the ref now */
              <div
                style={zoom}
                ref={zoomedContainerRef}
                onClick={closeAllImages}
              >
                <img
                  src={img.image}
                  alt=""
                  style={zoomedImage}
                  onClick={(e) => e.stopPropagation()} // Prevents clicking image from closing modal
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
