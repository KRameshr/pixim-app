import { Link, useNavigate, useLocation } from "react-router-dom";
import { Camera } from "lucide-react";
import SearchBar from "../../features/search/components/SearchBar";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center gap-6">
          {/* Logo → always goes to / */}
          <Link
            to="/"
            className="flex items-center gap-2.5 flex-shrink-0 no-underline"
          >
            <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center shadow-sm">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-[16px] font-black tracking-tight text-slate-900 block leading-none">
                PIXIM
              </span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                Photo Search
              </span>
            </div>
          </Link>

          {/* Search bar — hidden on home page */}
          {!isHome && (
            <div className="flex-1">
              <SearchBar redirectToSearch={false} />
            </div>
          )}

          {/* If home page — show nav links */}

          {isHome && (
            <div className="flex-1 flex justify-end items-center gap-3">
              <Link
                to="/search"
                className="px-4 py-4 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all no-underline"
              >
                Search Photos
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
