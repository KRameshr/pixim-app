import { usePhoto } from "../../../shared/context/PhotoContext";

export function useGallery() {
  const {
    images,
    loading,
    error,
    searchQuery,
    totalResults,
    selectedImage,
    setSelectedImage,
  } = usePhoto();

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return {
    images,
    loading,
    error,
    searchQuery,
    totalResults,
    selectedImage,
    openModal,
    closeModal,
  };
}
