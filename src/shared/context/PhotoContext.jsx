import { createContext, useContext, useState } from "react";

const PhotoContext = createContext();

export function PhotoProvider({ children }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <PhotoContext.Provider
      value={{
        images,
        setImages,
        loading,
        setLoading,
        error,
        setError,
        searchQuery,
        setSearchQuery,
        totalResults,
        setTotalResults,
        selectedImage,
        setSelectedImage,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
}

export const usePhoto = () => useContext(PhotoContext);
