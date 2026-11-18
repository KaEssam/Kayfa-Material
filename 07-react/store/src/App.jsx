import { products } from '../data/products';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';

function App() {
  const storeName = 'asdasdsad store';
  const bio = 'All things Here';
  const cats = products.map((product) => product.category);
  console.log(cats);
  const categories = cats.filter((item, index) => {
    return cats.indexOf(item) === index;
  });
  console.log(categories);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header storeName={storeName} />

      <main className="flex-grow">
        <Hero storeName={storeName} bio={bio} />

        {categories.map((category) => (
          <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            key={category}
          >
            <h2 className="text-4xl mx-auto font-bold text-gray-900 ">
              {category}
            </h2>
            <div className="">
              <ProductGrid
                products={products.filter(
                  (product) => product.category === category,
                )}
              />
            </div>
          </section>
        ))}
      </main>

      <Footer storeName={storeName} />
    </div>
  );
}

export default App;
