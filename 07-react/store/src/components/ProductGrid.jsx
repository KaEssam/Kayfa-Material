import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return <h4 className="text-gray-500">No Products here yet.</h4>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
