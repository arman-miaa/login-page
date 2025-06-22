import { Mail, Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { NavLink } from "react-router";
import GoogleLoginBtn from "../shared/GoogleLoginBtn";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-white flex flex-col justify-center  rounded-xl shadow-xl p-8  max-w-md mx-auto my-8 ">
        <div className="text-left mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Create account
          </h1>
          <hr className="w-1/6 border-t-4 text-blue-800 -mt-2  " />
          <p className="text-gray-600 text-base mt-2">
            Already have an account?{" "}
            <NavLink to="/signin" className="text-blue-600  font-semibold">
              Sign in
              <span className="inline-block font-bold text-xl transition-transform duration-300 ease-in-out hover:translate-x-1">
                →
              </span>
            </NavLink>
          </p>
        </div>
        <form className="space-y-6">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text mb-1 font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </span>
            </label>
            <div className="relative">
              <User className="absolute z-30 left-3 top-1/2 -translate-y-1/2 text-gray-400 w-6" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input pl-10 text-xl w-full border border-gray-300 rounded-lg py-6 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text mb-1 font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </span>
            </label>
            <div className="relative">
              <Mail className="absolute z-30 left-3 top-1/2 -translate-y-1/2 text-gray-400  " />
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="input pl-10 text-xl w-full border border-gray-300 rounded-lg py-6 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Password
              </span>
            </label>
            <div className="relative">
              <Lock className="absolute z-30 left-3 top-1/2 -translate-y-1/2 text-gray-400 " />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input text-xl pl-10 pr-10 w-full border border-gray-300 rounded-lg py-6 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          {/* Create Account Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create account
            </button>
          </div>
        </form>
        {/* Or Separator */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login Btn */}
        <GoogleLoginBtn />

        {/* Terms and Privacy Links */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By creating an account, you agree to our{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
       
        <div className="bg-blue-50 flex gap-1  border border-blue-100 text-blue-800 p-4 rounded-lg mt-8 ">
          <ShieldCheck className="w-5 h-5 mr-2" />
          <div>
            <div className="flex items-center  mb-2">
              <span className="font-semibold text-sm -mb-1">
                Enterprise-grade security
              </span>
            </div>
            <p className="text-sm text-blue-600 flex items-center gap-1 ">
              <Lock className="w-4" /> Advanced encryption
            </p>
            <span className="text-sm text-blue-600">
              {" "}
              Compliant with industry security standards
            </span>
          </div>
        </div>
      </div>
      {/* Bottom links  */}
      <div className="flex justify-center mb-8 space-x-6 text-sm text-gray-500 mt-">
        <a href="/terms" className="hover:text-blue-500">
          Terms
        </a>
        <a href="/privacy" className="hover:text-blue-500">
          Privacy
        </a>
        <a href="/help" className="hover:text-blue-500">
          Help Center
        </a>
      </div>
    </>
  );
};

export default RegisterForm;
