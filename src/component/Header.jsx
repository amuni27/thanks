import {useNavigate} from "react-router-dom";
import {useState} from "react";


function Header({page}) {

    const navigate = useNavigate();
    return (
        <div className="w-full h-28 flex bg-white shadow-lg">
            <div className="w-1/6 h-full flex justify-center items-center text-amber-700 text-2xl"><span>Thank you</span></div>
            <div className="w-4/6 h-full"></div>
            {page?(
            <div className="w-1/6 h-full flex justify-center items-center text-amber-700 text-lg cursor-pointer "><span className="bg-gray-100 rounded-3xl shadow-md p-3 text-amber-700 hover:bg-amber-700 hover:text-white" onClick={()=>{
                navigate("/promise")
            }}>Our Promise</span></div>
            ) : (
                <div className="w-1/6 h-full flex justify-center items-center text-amber-700 text-lg cursor-pointer "><span className="bg-gray-100 rounded-3xl shadow-md text-amber-700 p-3 hover:bg-amber-700  hover:text-white" onClick={()=>{
                    navigate("/")
                }}>Home</span></div>
            )}
            </div>
    );
}

export default Header;