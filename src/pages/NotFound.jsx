import { Link } from "react-router-dom";
import { Home, SearchX } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <div className="w-24 h-24 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <SearchX className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-6xl font-black text-slate-200 mb-4">404</h1>
        <h2 className="text-xl font-bold text-slate-700 mb-2">
          Page not found
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold rounded-xl transition-all no-underline"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
