import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/newgames" element={"newgame component"}/> 
        <Route path="/oldgames" element={"oldgame component"}/>
        <Route path="/cart" element={"cart component"}/> 
        <Route path="*" element={"404 component"}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default AppRouter
