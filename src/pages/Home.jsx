import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomImages } from "../api/unsplash";
import { useSearch } from "../features/search/hooks/useSearch";
import SearchBar from "../features/search/components/SearchBar";
import { categories, stats, features } from "../data/homeData";
import heroBg from "../assets/bg-w.jpg";

import {
  Camera,
  Search,
  Heart,
  Download,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";

function Home() {
  const [featuredImages, setFeaturedImages] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const navigate = useNavigate();
  const { handleSearch } = useSearch();

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const data = await getRandomImages();
        setFeaturedImages(data.slice(0, 3));
      } catch (err) {
        console.error("Failed to load featured images:", err);
      } finally {
        setLoadingFeatured(false);
      }
    };
    loadFeatured();
  }, []);

  const onCategoryClick = (label) => {
    handleSearch(label, true);
  };

  return (
    <div className="bg-slate-50">
      {/* ── HERO  */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-100 px-10 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-blue-800" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-blue-800">
                Powered by Unsplash API
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black  leading-tight tracking-tight mb-6">
              Find the Perfect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">
                Photo
              </span>{" "}
              for Anything
            </h1>

            <p className="text-slate-800 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Search millions of free high-quality photos from professional
              photographers around the world. Free for personal and commercial
              use.
            </p>

            {/* Search */}
            <div className="mb-8">
              <SearchBar redirectToSearch={true} />
            </div>

            {/* Category  */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs font-semibold text-slate-500 self-center mr-1">
                Try:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => onCategoryClick(cat.label)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-semibold transition-all hover:scale-105 cursor-pointer ${cat.color}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div
                    className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <p className={`text-2xl font-black ${stat.color} mb-0.5`}>
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PHOTOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-800 mb-1">
              Curated Collection
            </p>
            <h2 className="text-2xl font-black text-slate-800">
              Featured Photos
            </h2>
          </div>
          <button
            onClick={() => navigate("/search")}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-600 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {loadingFeatured ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-72 bg-gradient-to-r from-slate-500 via-slate-500 to-slate-500 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featuredImages.map((image) => (
              <div
                key={image.id}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200"
                onClick={() => navigate("/search")}
              >
                <img
                  src={image.urls.regular}
                  alt={image.alt_description || "Featured photo"}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={image.user.profile_image.small}
                      alt={image.user.name}
                      className="w-7 h-7 rounded-full border-2 border-white/90"
                    />
                    <p className="text-white text-xs font-semibold">
                      {image.user.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-white/80 text-[10px] font-medium">
                      <Heart className="w-3 h-3" />
                      {image.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 text-white/80 text-[10px] font-medium">
                      <Download className="w-3 h-3" />
                      Free
                    </span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/*  FEATURES */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <div className="text-center mb-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-800 mb-2">
              Why Pixim
            </p>
            <h2 className="text-2xl font-black text-slate-800">
              Everything you need
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border ${f.border} ${f.bg} flex flex-col gap-4`}
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-800 mb-1">
                      {f.title}
                    </h3>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/50 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Start Searching Now
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Ready to find your <br /> perfect photo?
            </h2>
            <p className="text-white/100 text-sm leading-relaxed max-w-md mx-auto mb-8">
              Search from millions of free high-quality images from professional
              photographers worldwide.
            </p>

            <button
              onClick={() => navigate("/search")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 text-blue-800 text-sm font-black uppercase tracking-wider rounded-1xl transition-all duration-200 active:scale-95 shadow-lg"
            >
              <Camera className="w-5 h-5" />
              Start Searching
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
