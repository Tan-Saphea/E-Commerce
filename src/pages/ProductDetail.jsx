import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading } = useGetOneProduct(id);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="h-64 w-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-surface min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-secondary mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-medium truncate max-w-[200px]">{data.title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Column */}
          <div className="bg-white p-8 rounded-2xl flex items-center justify-center shadow-sm border border-border">
            <img
              src={data.image}
              alt={data.title}
              className="max-w-full max-h-[500px] object-contain"
            />
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-start pt-4">
            <div className="mb-4">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">{data.category}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-primary mb-4 leading-tight">
              {data.title}
            </h1>

            <div className="flex items-center mb-6">
              <span className="text-2xl font-semibold text-primary">${data.price}</span>
              <span className="ml-4 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded">In Stock</span>
            </div>

            <p className="text-secondary leading-relaxed mb-8 border-b border-border pb-8">
              {data.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-border rounded-lg bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-secondary hover:text-primary transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-3 font-medium text-primary w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-secondary hover:text-primary transition-colors"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-primary text-white font-semibold uppercase tracking-wide py-3 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-200">
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-secondary">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                Free Delivery
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
                Authentic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
