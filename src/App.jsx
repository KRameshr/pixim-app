import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PhotoProvider } from "./shared/context/PhotoContext";
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <PhotoProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </PhotoProvider>
  );
}

export default App;
