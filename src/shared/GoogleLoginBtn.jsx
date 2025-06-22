import google from "../assets/google.svg";

const GoogleLoginBtn = () => {
    return (
      <div>
        {/* Continue with Google Button */}
        <button className="w-full cursor-pointer flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
          <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>
      </div>
    );
};

export default GoogleLoginBtn;
