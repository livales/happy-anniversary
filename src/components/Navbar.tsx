
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/surat' && (location.pathname === '/surat' || location.pathname.startsWith('/surat/'))) return true;
    if (path === '/gift' && location.pathname === '/gift') return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-pink-600">
            <Heart className="w-6 h-6 floating-hearts" />
            <span className="font-dancing text-xl font-bold">Untuk Sayangku</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`font-poppins text-sm font-medium transition-all duration-300 hover:text-pink-600 ${
                isActive('/') 
                  ? 'text-pink-600 border-b-2 border-pink-600 pb-1' 
                  : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/surat"
              className={`font-poppins text-sm font-medium transition-all duration-300 hover:text-pink-600 ${
                isActive('/surat') 
                  ? 'text-pink-600 border-b-2 border-pink-600 pb-1' 
                  : 'text-gray-600'
              }`}
            >
              Surat
            </Link>
            <Link
              to="/gift"
              className={`font-poppins text-sm font-medium transition-all duration-300 hover:text-pink-600 ${
                isActive('/gift') 
                  ? 'text-pink-600 border-b-2 border-pink-600 pb-1' 
                  : 'text-gray-600'
              }`}
            >
              Gift
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
