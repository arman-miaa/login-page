import { Route, Routes } from "react-router"
import Register from "../pages/Register"


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register/>}  />
      </Routes>
    </div>
  )
}

export default Router