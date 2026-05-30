import { Camera } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-300 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-800 rounded-lg flex items-center justify-center">
              <Camera className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-black text-slate-800">PIXIM</span>
          </div>

          {/* Powered by */}
          <p className="text-xs text-slate-500 font-medium text-center">
            Powered by{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:text-blue-600 transition-colors"
            >
              Unsplash API
            </a>{" "}
          </p>
          {/* Copyright */}
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            © 2026 PIXIM
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
