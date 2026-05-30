import ImageCard from "./ImageCard";
import { useGallery } from "../hooks/useGallery";

function ImageGrid() {
  const { images, openModal } = useGallery();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={openModal} />
      ))}
    </div>
  );
}

export default ImageGrid;
