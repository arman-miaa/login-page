
import Performance from "../components/Performance";
import RegisterForm from "../components/RegisterForm";
const Register = () => {
  return (
    <>
      <div>
        <div className="min-h-screen flex justify-between items-center   ">
          <div className="flex-1 flex border border-blue-300  min-h-screen bg-[#000102]">
            {/* content */}
            <Performance />
          </div>
                  <div className="flex-1 border border-blue-300  ">
                      <RegisterForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
