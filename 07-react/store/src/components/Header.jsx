import navLogo from '../assets/images.png';

export default function Header({ storeName }) {
  // const storeName = 'Kayfa store';
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img
            src={navLogo}
            alt={`${storeName} logo`}
            className="w-12 h-12 object-contain rounded-lg"
          />
        </a>
        <nav className="flex gap-6 text-lg font-medium text-gray-600">
          <a href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </a>
          <a href="/" className="hover:text-indigo-600 transition-colors">
            Products
          </a>
          <a href="/" className="hover:text-indigo-600 transition-colors">
            Cart
          </a>
        </nav>
      </div>
    </header>
  );
}
