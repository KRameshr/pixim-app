import { useState } from "react";
import { ExternalLink, Heart, Download } from "lucide-react";

function ImageCard({ image, onClick }) {
  const [liked, setLiked] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer"
      onClick={() => onClick(image)}
    >
      {/* Image skeleton */}
      {!imgLoaded && (
        <div className="w-full h-52 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" />
      )}

      <img
        src={image.urls.small}
        alt={image.alt_description || "Unsplash photo"}
        className={`w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ${
          imgLoaded ? "block" : "hidden"
        }`}
        onLoad={() => setImgLoaded(true)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Action buttons */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-4px] group-hover:translate-y-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
            liked
              ? "bg-red-500 border-red-500 text-white"
              : "bg-white/80 border-white/50 text-slate-700 hover:bg-red-50"
          }`}
        >
          <Heart
            className="w-3.5 h-3.5"
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        <a
          href={image.links.html}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-8 h-8 rounded-full bg-white/200 backdrop-blur-md border border-white/50 flex items-center justify-center text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-all"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="flex items-center gap-2">
          <img
            src={image.user.profile_image.small}
            alt={image.user.name}
            className="w-6 h-6 rounded-full border border-white/50"
          />
          <p className="text-white text-xs font-semibold truncate">
            {image.user.name}
          </p>
        </div>
      </div>

      {/* Bottom card info */}
      <div className="p-3">
        <p className="text-xs font-semibold text-slate-700 truncate">
          {image.alt_description || image.description || "Untitled"}
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-[10px] text-slate-400 font-medium">
            {image.likes.toLocaleString()} likes
          </p>
          <span className="text-[9px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">
            Free
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
