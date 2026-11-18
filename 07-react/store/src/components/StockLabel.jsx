const tones = {
  red: 'bg-red-50 text-red-700',
  amber: 'bg-amber-50 text-amber-700',
  green: 'bg-green-50 text-green-700',
};

export default function StockLabel({ stock }) {
  if (stock === 0) {
    return <span className="bg-red-50 text-red-700 text-xs">Out of Stock</span>;
  }

  if (stock < 10) {
    return (
      <span className="bg-amber-50 text-amber-700 text-xs">
        Only {stock} left0
      </span>
    );
  }

  return <span className="bg-green-50 text-green-700 text-xs">In Stock</span>;
}
