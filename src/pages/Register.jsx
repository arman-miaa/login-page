
import Performance from "../components/Performance";
import RegisterForm from "../components/RegisterForm";
const Register = () => {
  return (
    <>
      <div>
        <div className="min-h-screen flex justify-between    ">
          <div className="flex-1 flex hidden lg:flex    bg-[#000102]">
            {/* content */}
            <Performance />
          </div>
                  <div className="flex-1  ">
                      <RegisterForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
