import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold font-poppins text-primary tracking-tight mb-4 block">
              Luxe<span className="text-accent">Mart</span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed">
              Curated luxury essentials for the modern lifestyle. Quality meets sophisticated design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-secondary hover:text-accent text-sm transition-colors">All Products</Link></li>
              <li><Link to="/products?category=new" className="text-secondary hover:text-accent text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/products?category=bestsellers" className="text-secondary hover:text-accent text-sm transition-colors">Best Sellers</Link></li>
              <li><Link to="/sale" className="text-danger hover:text-red-600 text-sm transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-secondary hover:text-accent text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-secondary hover:text-accent text-sm transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-secondary hover:text-accent text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="text-secondary hover:text-accent text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Stay Included</h4>
            <p className="text-secondary text-sm mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-l-md focus:outline-none focus:border-accent text-sm"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-accent transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-xs text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LuxeMart. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social Icons Placeholder */}
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h-.173zm-3.729 1.758c-1.022.047-1.57.228-1.939.371-.482.19-.824.417-1.18.772-.355.355-.582.698-.772 1.18-.143.369-.324.917-.37 1.939-.048 1.028-.059 1.346-.059 4.084v.172c0 2.738.01 3.056.058 4.084.047 1.022.228 1.57.371 1.939.19.482.417.824.772 1.18.355.355.698.582 1.18.772.369.143.917.324 1.939.37 1.028.048 1.346.059 4.084.059h.172c2.738 0 3.056-.01 4.084-.058 1.022-.047 1.57-.228 1.939-.371.482-.19.824-.417 1.18-.772.355-.355.582-.698.772-1.18.143-.369.324-.917.37-1.939.048-1.028.059-1.346.059-4.084v-.172c0-2.738-.01-3.056-.058-4.084-.047-1.022-.228-1.57-.371-1.939-.19-.482-.417-.824-.772-1.18-.355-.355-.698-.582-1.18-.772-.369-.143-.917-.324-1.939-.37-1.028-.048-1.346-.059-4.084-.059H8.586zm3.565 3.468a3.393 3.393 0 110 6.786 3.393 3.393 0 010-6.786zm0 1.758a1.635 1.635 0 100 3.27 1.635 1.635 0 000-3.27zm4.72-2.793a.879.879 0 110 1.758.879.879 0 010-1.758z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
