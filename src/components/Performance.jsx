import logo from "../assets/logo.png";
import { BarChart, LineChart, ShieldCheck, CheckCircle } from "lucide-react";

const Performance = () => {
    return (
      <div className="flex mx-24 flex-col justify-center items-center  border w-full   text-white ">
        <div className="flex items-center  gap-2">
          <img className="w-12 h-12 object-cover" src={logo} alt="" />
          <h1 className="font-medium text-xl">Adgrow</h1>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-4xl mt-8">
            Boost your <br />{" "}
            <span className="text-[#60A5FA]">ad performance</span>{" "}
          </h1>
          <hr className="w-1/6 border-t-3 text-blue-800  mx-auto" />
          <p className="text-[#bec2c9] mt-4">
            The intelligent platform that helps marketers optimize <br /> their
            campaigns with powerful analytics and AI.
          </p>
        </div>
        {/* grid box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
          {/* Box 1 */}
          <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md flex flex-col gap-2">
            <BarChart className="w-6 h-6 text-blue-500" />
            <h4 className="text-lg font-semibold">AI-powered insights</h4>
            <p className="text-sm text-gray-300">
              Get advanced analytics and recommendations for your campaigns.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md flex flex-col gap-2">
            <LineChart className="w-6 h-6 text-blue-500" />
            <h4 className="text-lg font-semibold">Real-time tracking</h4>
            <p className="text-sm text-gray-300">
              Monitor performance metrics as they happen with live dashboards.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md flex flex-col gap-2 md:col-span-2">
            <ShieldCheck className="w-6 h-6 text-blue-500" />
            <h4 className="text-lg font-semibold">Enterprise-grade security</h4>
            <p className="text-sm text-gray-300">
              Your data is protected with advanced encryption and compliance
              standards.
            </p>
          </div>
        </div>
        {/* Footer badges  */}
        <div className="flex w-full  justify-between gap-6 mt-4 mb-8">
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
