import './App.css';
import navLogo from './assets/images.png';
function App() {
  const storeName = 'Kayfa store';
  const bio = 'All things Here';
  const year = new Date().getFullYear();
  return (
    <>
      <header className="border-b border-gray-200 bg-white max-w">
        <div className="flex mx-auto items-center justify-between px-6 py-2">
          <a href="/">
            <img src={navLogo} alt={`${storeName} logo`} className="w-2xs" />
          </a>
          <nav className="flex gap-4 text-xl font-medium text-gray-600">
            <a href="/" className="hover:text-indigo-400">
              Home
            </a>
            <a href="/" className="hover:text-indigo-400">
              Products
            </a>
            <a href="/" className="hover:text-indigo-400">
              Cart
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w items-center justify-between gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-indigo-700">
              White Friday
            </p>
            <h1 className="text-4xl font-bold text-gray-900 ">{bio}</h1>
            <p className="mt-4 text-lg font-bold text-gray-500 ">
              Free shipping on orders
            </p>
            <a
              href="/"
              className=" mt-8 inline-block rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-700 "
            >
              Shop now
            </a>
          </div>

          <img src={navLogo} alt={`${storeName} logo`} className="w-2xs" />
        </section>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-600">
        <p>
          {year}
          {storeName}. All rights
        </p>
      </footer>
    </>
  );
}
export default App;
