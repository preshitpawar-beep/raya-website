
import "./globals.css";

export const metadata = {
  title: "Raya | Premium Corporate Gifting",
  description: "Premium B2B stationery & gifting solutions"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
