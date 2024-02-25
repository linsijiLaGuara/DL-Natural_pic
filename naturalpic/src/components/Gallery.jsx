import React from "react";
import { usePhotoContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = usePhotoContext();

  const handleFollow = (id) => {
    const updatedPhotos = photos.map((item) =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );

    setPhotos(updatedPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => {
        return (
          <div
            key={photo.id}
            className="photo"
            onClick={() => handleFollow(photo.id)}
            style={{ backgroundImage: `url(${photo.src.large})` }}
          >
            <IconHeart filled={photo.liked} />
            <div className="desc">
              <p>{photo.alt}</p>
              <small>{photo.photographer}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
