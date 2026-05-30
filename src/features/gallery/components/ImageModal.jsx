import { X, ExternalLink, Download, User } from "lucide-react";
import { useGallery } from "../hooks/useGallery";
import { useEffect } from "react";

function ImageModal() {
  const { selectedImage, closeModal } = useGallery();

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <img
              src={selectedImage.user.profile_image.medium}
              alt={selectedImage.user.name}
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="text-sm font-bold text-slate-800">
                {selectedImage.user.name}
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                @{selectedImage.user.username}
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="w-9 h-9 bg-slate-200 hover:bg-slate-300 rounded-xl flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Image */}
        <div className="overflow-y-auto flex-1">
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description || "Photo"}
            className="w-full object-cover"
          />

          {/* Image Details */}
          <div className="p-5 space-y-4">
            {selectedImage.alt_description && (
              <p className="text-sm font-semibold text-slate-800 capitalize">
                {selectedImage.alt_description}
              </p>
            )}

            {/* bottom gird */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-200 p-3 rounded-xl text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Likes
                </p>
                <p className="text-sm font-black text-slate-700">
                  {selectedImage.likes.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-200 p-3 rounded-xl text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Downloads
                </p>
                <p className="text-sm font-black text-slate-700">
                  {selectedImage.downloads?.toLocaleString() || "N/A"}
                </p>
              </div>
              <div className="bg-slate-200 p-3 rounded-xl text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Views
                </p>
                <p className="text-sm font-black text-slate-700">
                  {selectedImage.views?.toLocaleString() || "N/A"}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={selectedImage.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View on Unsplash
              </a>

              <a
                href={`${selectedImage.links.download}?force=true`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Download Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
