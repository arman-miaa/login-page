import Performance  from "../components/Performance";
const Register = () => {
  return (
    <>
      <div>
        <div className="min-h-screen flex justify-between items-center   ">
          <div className="flex-1 flex border border-blue-300  h-screen bg-[#000102]">
            {/* content */}
            <Performance />
          </div>
          <div className="flex-1 border border-blue-300  h-screen">Box 2</div>
        </div>
      </div>
    </>
  );
};

export default Register;
