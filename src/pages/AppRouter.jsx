import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NewGames from "./NewGames";
import OldGames from "./OldGames";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newgames" element={<NewGames/>}/> 
        <Route path="/oldgames" element={<OldGames/>}/>
        <Route path="/cart" element={"cart component"}/> 
        <Route path="*" element={"404 component"}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default AppRouter
