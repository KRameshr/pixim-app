function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
        <div className="absolute inset-0 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="text-sm font-semibold text-slate-500 animate-pulse">
        Finding beautiful photos...
      </p>
    </div>
  );
}

export default Loader;
