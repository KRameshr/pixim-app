const suggestions = [
  "Nature",
  "Architecture",
  "Travel",
  "Food",
  "Technology",
  "Animals",
  "City",
  "Ocean",
  "Mountains",
  "Beach",
  "Sunset",
  "Portrait",
];

function SearchSuggestions({ onSelect }) {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
        Popular Searches
      </p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s}
            onMouseDown={() => onSelect(s)}
            className="px-3 py-1.5 bg-slate-50 hover:bg-brand-50 hover:text-brand-800 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100 hover:border-brand-200 transition-all cursor-pointer"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchSuggestions;
