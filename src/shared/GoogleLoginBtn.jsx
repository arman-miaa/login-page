import { useContext } from "react";
import google from "../assets/google.svg";
import { authContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router"; 

const GoogleLoginBtn = () => {
  const { signInWithGoogle, saveUser } = useContext(authContext);
  const navigate = useNavigate(); 

  const handleSignInUserWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        
        if (saveUser) {
          saveUser(user);
        }

        toast.success("Login successful With Google!");

        
        navigate("/");
      })
      .catch((error) => {
        console.error("Google login failed", error);
        toast.error("Google login failed");
      });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSignInUserWithGoogle}
        className="w-full cursor-pointer flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
      >
        <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLoginBtn;
