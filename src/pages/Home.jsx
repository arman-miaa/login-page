import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../provider/AuthProvider";
import { FiLogOut } from "react-icons/fi"; // logout icon
import { toast } from "react-toastify";

const Home = () => {
  const { user, logOutUser } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logOutUser()
        .then(() => {
            toast.success("Logout successful!");
        navigate("/register");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  if (!user) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm relative">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-md object-cover"
          />
        </div>

        {/* User Info */}
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {user.displayName || "User"}!
          </h2>
          <p className="text-gray-500 mt-1">{user.email}</p>
        </div>

        {/* Logout Button */}
        <div className=" mt-4">
          <button
            onClick={handleLogout}
            className="flex items-center mx-auto gap-2 bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
