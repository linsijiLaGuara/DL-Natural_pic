// Gallery.js
import React from "react";
import { Card } from "react-bootstrap";
import { usePhotoContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = usePhotoContext();

  const handleLike = (id) => {
    const updatedPhotos = photos.map((item) =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );

    setPhotos(updatedPhotos);
  };

  return (
    <div className="App">
      <div className="p-3 gallery grid-columns-4">
        {photos.map((item) => (
          <div
            key={item.id}
            className="photo"
            style={{
              backgroundImage: `url(${item.src.large})`,
              cursor: "default",
            }}
          >
            <Card>
              <Card.Body>
                <Card.Title>{item.alt}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <button
                  onClick={() => handleLike(item.id)}
                  style={{
                    fontSize: "12px",
                    color: item.liked ? "red" : "black",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <IconHeart id={item.id} />
                </button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
