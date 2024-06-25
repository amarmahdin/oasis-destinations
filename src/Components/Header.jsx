import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png"


const Header = () => {
  const navigate = useNavigate()

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 h-[85px] flex bg-white z-10">
        <div className="mx-28 ">
                <img src={logo} alt="" className="w-[150px]"/>
        </div>
        <div className="py-1 mx-32">
            <ul className="flex w-96"> 
                <li className="m-7 ml-10 text-xl text-gray-400"><a href="/" className="hover:text-E text-base tracking-widest relative group">Home<div className="absolute w-full h-0.5 bg-E/80 scale-x-0 group-hover:scale-x-100"/></a></li>
                <li className="m-7 ml-10 text-xl text-gray-400"><a href="/Destination" className="hover:text-E text-base tracking-widest relative group">Destination<div className="absolute w-full h-0.5 bg-E/80 scale-x-0 group-hover:scale-x-100"/></a></li>
                <li className="m-7 ml-10 text-xl text-gray-400"><a href="/About" className="hover:text-E text-base tracking-widest relative group">About<div className="absolute w-full h-0.5 bg-E/80 scale-x-0 group-hover:scale-x-100"/></a></li>
                <li className="m-7 ml-10 text-xl text-gray-400"><a href="/News" className="hover:text-E text-base tracking-widest relative group">News<div className="absolute w-full h-0.5 bg-E/80 scale-x-0 group-hover:scale-x-100"/></a></li>
            </ul>
        </div>
        <div className="py-7 ml-48">
            <a href="/Signup"><button className="text-E mr-7 px-[17px] py-[3px] border-2 border-E rounded-md ">Sign Up</button></a>
            <a href="/Login"><button className="px-[17px] py-[3px] text-white border-2 border-E bg-E rounded-md">Login</button></a>
        </div>
    </nav>
    </>
  );
}

export default Header