import { useContext } from "react";
import { usePhotoContext } from "../context/GalleryContext";


const Favorites = () => {
  const { photos } = usePhotoContext();

  const favoritePhotos = photos.filter((photo) => photo.liked);

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.length ? (
          favoritePhotos.map((photo) => (
            <div
              key={photo.id}
              className="photo"
              style={{
                backgroundImage: `url(${photo.src.large})`,
                cursor: "default",
              }}
            >
              <p className="title">{photo.alt}</p>
              <p>{photo.photographer}</p>
            </div>
          ))
        ) : (
          <p className="message">No tienes fotos favoritas :(</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
