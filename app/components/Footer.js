export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-8 py-16 grid gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <img
            src="/logo.png"
            alt="Raya Gifts & Stationery"
            className="h-12 mb-4"
          />
          <p className="text-sm opacity-80">
            Thoughtfully designed corporate gifts and stationery for modern
            businesses.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/contact" className="hover:text-white">Sustainability</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/quote" className="hover:text-white">Get a Quote</a></li>
            <li>
              <a
                href="mailto:hello@rayagifts.com"
                className="hover:text-white"
              >
                hello@rayagifts.com
              </a>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/cookies" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-8 py-6 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p className="opacity-60">
            © {new Date().getFullYear()} Raya Gifts & Stationery. All rights reserved.
          </p>
          <p className="opacity-60">
            United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
