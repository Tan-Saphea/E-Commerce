import React, { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import useGetAllProduct from "../hooks/useGetAllProduct";

function Products() {
  const { data, isLoading } = useGetAllProduct();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (selectedCategory === "all") return data;
    return data.filter((item) => item.category === selectedCategory);
  }, [data, selectedCategory]);

  return (
    <div className="bg-surface min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-poppins text-primary mb-4 md:mb-0">
            All Products
          </h1>

          {/* Simple Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200 ${selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-secondary hover:bg-gray-100 border border-border"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse bg-white p-4 rounded-lg">
                <div className="bg-gray-200 aspect-[3/4] rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {filteredData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredData.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-secondary">
                <p>No products found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Products;
