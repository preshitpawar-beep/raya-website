
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-8 py-24">
        <h1 className="text-4xl font-bold mb-6 capitalize">about</h1>
        <p className="opacity-80 text-lg">
          This page is intentionally minimal while we build our brand and client base.
        </p>
      </div>
    </>
  );
}
