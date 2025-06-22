import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-md">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium shadow-lg"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
