import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

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
    </>
  )
}

export default AppRouter
