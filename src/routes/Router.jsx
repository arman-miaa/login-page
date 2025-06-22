import { Route, Routes } from "react-router"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Error from "../pages/Error"


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default Router