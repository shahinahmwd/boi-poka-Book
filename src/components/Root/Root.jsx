
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"


const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root

