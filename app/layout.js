import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Premium Corporate Gifting",
  description: "Premium B2B stationery & gifting solutions"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

