import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Image Container */}
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quick Add Button / Overlay (Optional) */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                    <button className="w-full bg-white/90 backdrop-blur text-primary font-medium py-2 rounded shadow-sm hover:bg-primary hover:text-white transition-colors">
                        Quick View
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="p-4">
                <div className="mb-1">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{product.category}</span>
                </div>
                <h3 className="text-base font-medium text-primary mb-1">
                    <Link to={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </Link>
                </h3>
                <p className="text-secondary text-sm mb-3">
                    {product.description && product.description.length > 50
                        ? product.description.substring(0, 50) + "..."
                        : product.description}
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-primary">${product.price}</p>
                    {/* Optional Rating or other info */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
