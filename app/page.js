
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Our Product Range
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          <ProductCard title="Premium Pens" image="https://images.unsplash.com/photo-1585386959984-a41552231693" />
          <ProductCard title="Executive Notebooks" image="https://images.unsplash.com/photo-1519682337058-a94d519337bc" />
          <ProductCard title="Corporate Gift Sets" image="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6" />
          <ProductCard title="Desk Accessories" image="https://images.unsplash.com/photo-1581349485608-9469926a8e5e" />
        </div>
      </section>
    </>
  );
}
