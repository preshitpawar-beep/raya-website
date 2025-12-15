export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-black">

        {/* BRAND */}
        <div>
          <img
            src="/logo.png"
            alt="Raya Gifts & Stationery"
            className="h-12 mb-4 object-contain"
          />
          <p className="opacity-80 leading-relaxed">
            Thoughtfully designed corporate gifts and stationery for meaningful
            brand moments.
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2">
            <li><a href="/products" className="hover:text-indigo-700 transition">All Products</a></li>
            <li><a href="/products" className="hover:text-indigo-700 transition">Custom Stationery</a></li>
            <li><a href="/products" className="hover:text-indigo-700 transition">Corporate Gifts</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-indigo-700 transition">About</a></li>
            <li><a href="/sustainability" className="hover:text-indigo-700 transition">Sustainability</a></li>
            <li><a href="/quote" className="hover:text-indigo-700 transition">Get a Quote</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-indigo-700 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-indigo-700 transition">Terms & Conditions</a></li>
            <li><a href="/cookies" className="hover:text-indigo-700 transition">Cookie Policy</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-black/10 py-6 text-center text-xs text-black opacity-70">
        © {new Date().getFullYear()} Raya Gifts & Stationery. All rights reserved.
      </div>
    </footer>
  );
}
