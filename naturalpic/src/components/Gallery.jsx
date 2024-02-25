// En Gallery.js
import React from "react";
import { Card } from "react-bootstrap";
import { usePhotoContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos, liked, setLiked } = usePhotoContext();

  const handleLike = (id) => {
    const updatedPhotos = photos.map((item) =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );

    setPhotos(updatedPhotos);

    const updatedLiked = liked.includes(id)
      ? liked.filter((likeId) => likeId !== id)
      : [...liked, id];

    setLiked(updatedLiked);
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
                    color: liked.includes(item.id) ? "red" : "black",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <IconHeart filled={liked.includes(item.id)} />
                </button>
              </Card.Footer>
              <br />
              <span>{item.photographer}</span>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
