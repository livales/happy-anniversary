import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl max-w-md mx-auto">
        <h1 className="text-6xl lg:text-8xl font-bold mb-4 text-pink-500 animate-pulse font-serif">
          404
        </h1>
        <p className="text-xl lg:text-2xl text-gray-700 mb-6 font-medium">
          💔 Oops! Sepertinya halaman yang kamu cari tidak ditemukan.
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 font-semibold"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;
