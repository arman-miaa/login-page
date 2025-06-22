import logo from "../assets/logo.png";
import { BarChart, LineChart, ShieldCheck, CheckCircle } from "lucide-react";

const Performance = () => {
  return (
    <div className="w-full text-white max-w-md mx-auto mt-12">
      {/* Header */}
      <div className="flex items-center justify-center gap-3">
        <img className="w-18 h-18 object-cover" src={logo} alt="logo" />
        <h1 className="font-medium text-xl md:text-3xl">Adgrow</h1>
      </div>

      {/* Title & Description */}
      <div className="text-center">
        <h1 className="font-bold text-4xl md:text-5xl mt-12">
          Boost your <br />
          <span className="text-[#60A5FA]">ad performance</span>
        </h1>
        <hr className="w-1/5 mt-1 border-t-4 text-blue-800 mx-auto" />
        <p className="text-[#bec2c9] mt-4 text-lg">
          The intelligent platform that helps marketers optimize <br />
          their campaigns with powerful analytics and AI.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-14">
        {/* Box 1 */}
        <div className="text-white rounded-lg shadow-xl border border-[#383b3f] p-4 flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-[#383b3f]">
          <BarChart className="w-8 h-8 text-blue-500 bg-[#427cf05d] p-[6px] rounded shadow-md" />
          <h4 className="text-lg font-semibold">AI-powered insights</h4>
          <p className="text-sm text-gray-300">
            Get advanced analytics and recommendations for your campaigns.
          </p>
        </div>

        {/* Box 2 */}
        <div className="text-white rounded-lg shadow-xl border border-[#383b3f] p-4 flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-[#383b3f]">
          <LineChart className="w-8 h-8 text-blue-500 bg-[#427cf05d] p-[6px] rounded shadow-md" />
          <h4 className="text-lg font-semibold">Real-time tracking</h4>
          <p className="text-sm text-gray-300">
            Monitor performance metrics as they happen with live dashboards.
          </p>
        </div>

        {/* Box 3 */}
        <div className="text-white rounded-lg mt-6 shadow-xl border border-[#383b3f] p-4 flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-[#383b3f] md:col-span-2">
          <ShieldCheck className="w-8 h-8 text-blue-500 bg-[#427cf05d] p-[6px] rounded shadow-md" />
          <h4 className="text-lg font-semibold">Enterprise-grade security</h4>
          <p className="text-sm text-gray-300">
            Your data is protected with advanced encryption and compliance
            standards.
          </p>
        </div>
      </div>

      {/* Footer badges */}
      <div className="flex w-full justify-between gap-6 mt-10 ">
        <p className="flex items-center gap-1">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span>24/7 Support</span>
        </p>
        <p className="flex items-center gap-1">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span>Weekly Reports</span>
        </p>
      </div>
    </div>
  );
};

export default Performance;
