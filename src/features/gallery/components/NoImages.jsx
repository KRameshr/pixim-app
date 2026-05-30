import { ImageOff, Search } from "lucide-react";

function NoImages({ query }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mb-6">
        <ImageOff className="w-9 h-9 text-slate-400" />
      </div>
      <h3 className="text-xl font-bold text-slate-700 mb-2">No images found</h3>
      <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
        {query
          ? `We couldn't find any results for "${query}". Try different keywords.`
          : "Search for something to see results here."}
      </p>
      <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Search className="w-3.5 h-3.5" />
        <span>Try: Nature, City, Travel, Food</span>
      </div>
    </div>
  );
}

export default NoImages;
