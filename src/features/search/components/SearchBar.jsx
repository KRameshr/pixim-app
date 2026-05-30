import { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { Search, X } from "lucide-react";
import SearchSuggestions from "./SearchSuggestions";

function SearchBar({ redirectToSearch = true }) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { handleSearch } = useSearch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query, redirectToSearch);
      setShowSuggestions(false);
    }
  };

  const onSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    handleSearch(suggestion, redirectToSearch);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <form onSubmit={onSubmit}>
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            placeholder="Search for photos..."
            className="w-full pl-12 pr-24 py-4 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-20 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-95"
          >
            Search
          </button>
        </div>
      </form>

      {showSuggestions && <SearchSuggestions onSelect={onSuggestionClick} />}
    </div>
  );
}

export default SearchBar;
