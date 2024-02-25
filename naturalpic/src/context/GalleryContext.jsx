// En GalleryContext.js

import React, { createContext, useContext, useState, useEffect } from "react";

const PhotoContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const FetchPhoto = async () => {
    try {
      const photoJson = await fetch("/photos.json"); // Cambia la ruta a la raíz del proyecto
      if (!photoJson.ok) {
        throw new Error(`Failed to fetch: ${photoJson.status}`);
      }

      const { photos } = await photoJson.json();
      const photoData = photos.map((foto) => {
        return {
          ...foto,
          following: false,
        };
      });

      setPhotos(photoData);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    FetchPhoto();
  }, []);

  return (
    <PhotoContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = () => {
  return useContext(PhotoContext);
};
