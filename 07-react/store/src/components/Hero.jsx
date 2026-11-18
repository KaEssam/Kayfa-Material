import navLogo from '../assets/images.png';

export default function Hero({ storeName, bio }) {
  // const storeName = 'Kayfa store';
  // const bio = 'All things Here';
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b border-gray-100">
      <div className="mx-auto max-w-7xl grid items-center justify-between gap-10 px-6 py-16 md:grid-cols-2">
        <div className="space-y-4">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            White Friday
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {bio}
          </h1>
          <p className="text-lg font-medium text-gray-600">
            Free shipping on orders over $50
          </p>
          <div>
            <a
              href="/"
              className="mt-4 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
            >
              Shop now
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={navLogo}
            alt={`${storeName} logo`}
            className="w-64 h-64 object-cover rounded-2xl shadow-xl border border-gray-100"
          />
        </div>
      </div>
    </section>
  );
}
