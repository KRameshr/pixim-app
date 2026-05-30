import { useNavigate } from "react-router-dom";
import { usePhoto } from "../../../shared/context/PhotoContext";
import { searchImages, getRandomImages } from "../../../api/unsplash";

export function useSearch() {
  const navigate = useNavigate();
  const { setImages, setLoading, setError, setSearchQuery, setTotalResults } =
    usePhoto();

  const handleSearch = async (query, redirect = true) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setSearchQuery(query);

    if (redirect) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }

    try {
      const data = await searchImages(query);
      setImages(data.results);
      setTotalResults(data.total);
    } catch (err) {
      console.error("Search error:", err);
      setError("Something went wrong. Please try again.");
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const loadRandom = async () => {
    setLoading(true);
    setError(null);
    setSearchQuery("");

    try {
      const data = await getRandomImages();
      setImages(data);
      setTotalResults(data.length);
    } catch (err) {
      console.error("Random load error:", err);
      setError("Failed to load images.");
    } finally {
      setLoading(false);
    }
  };

  return { handleSearch, loadRandom };
}
