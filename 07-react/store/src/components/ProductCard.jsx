import StockLabel from './StockLabel';

export default function ProductCard({ product }) {
  const { title, category, price, rating, stock, thumbnail } = product;
  return (
    <>
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between p-4">
        <div>
          <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden mb-4">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md inline-block">
              {category}
            </span>
            <h3 className="font-semibold text-gray-800 text-base line-clamp-1">
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${price}</span>
            {/* <p className="text-xs text-gray-500">{stock} in stock</p> */}
            <StockLabel stock={stock} />
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-amber-500 flex items-center gap-1">
              ⭐ {rating}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
