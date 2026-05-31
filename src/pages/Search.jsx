import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGallery } from "../features/gallery/hooks/useGallery";
import { useSearch } from "../features/search/hooks/useSearch";
import ImageGrid from "../features/gallery/components/ImageGrid";
import ImageModal from "../features/gallery/components/ImageModal";
import NoImages from "../features/gallery/components/NoImages";
import Loader from "../shared/components/Loader";
import { Images, TrendingUp } from "lucide-react";
import heroBg from "../assets/bg.jpg";

function Search() {
  const { images, loading, error, searchQuery, totalResults } = useGallery();
  const { handleSearch, loadRandom } = useSearch();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q");

    if (query) {
      handleSearch(query, false);
    } else {
      loadRandom();
    }
  }, [location.search]);

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Results Header */}
        {!loading && images.length > 0 && (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Images className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-700">
                  {searchQuery
                    ? `Results for "${searchQuery}"`
                    : "Explore Photos"}
                </h2>
                <p className="text-[10px] font-medium text-slate-400">
                  {totalResults > 0
                    ? `${totalResults.toLocaleString()} photos found`
                    : `${images.length} photos`}
                </p>
              </div>
            </div>

            {searchQuery && (
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full">
                <TrendingUp className="w-3 h-3" />
                {searchQuery}
              </div>
            )}
          </div>
        )}

        {loading && <Loader />}

        {error && !loading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="text-sm font-bold text-slate-700 mb-1">
                Something went wrong
              </p>
              <p className="text-xs text-slate-400">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && images.length === 0 && (
          <NoImages query={searchQuery} />
        )}

        {!loading && !error && images.length > 0 && <ImageGrid />}

        <ImageModal />
      </main>
    </div>
  );
}

export default Search;
