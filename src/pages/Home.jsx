import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products?limit=8");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-primary flex items-center justify-center overflow-hidden">
        {/* Abstract Background or Image */}
        <div className="absolute inset-0 z-0">
          {/* Fallback gradient if image not found/desired */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
          {/* Using a high-quality placeholder if the local asset is tricky, but let's try to preserve the user's intent if the path exists. 
               However, to ensure "clean" look blindly, a colored hero is often safer. 
               I will add an image overlay if I knew a good Unsplash URL, but let's stick to a solid design. */}
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Shopping"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="block text-accent font-semibold tracking-widest uppercase mb-4 animate-fade-in-up">
            New CMS Collection 2026
          </span>
          <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
            Elevate Your Style
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
            Discover a curated selection of premium essentials designed for the modern individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button className="px-8 py-4 bg-white text-primary font-semibold text-sm uppercase tracking-wide rounded hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="px-8 py-4 border border-white text-white font-semibold text-sm uppercase tracking-wide rounded hover:bg-white/10 transition-colors">
              View Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">Trending Now</h2>
            <p className="text-secondary max-w-lg mx-auto">
              Our most popular pieces, chosen by our community.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[3/4] rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="flex justify-center mt-16">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-medium text-sm tracking-wide uppercase hover:bg-primary hover:text-white transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition / Features */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-secondary text-sm">On all orders over £50. Delivered safely to your door.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Authenticity Guaranteed</h3>
              <p className="text-secondary text-sm">Every item is verified for quality and authenticity.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-secondary text-sm">30-day return policy for a worry-free shopping experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
