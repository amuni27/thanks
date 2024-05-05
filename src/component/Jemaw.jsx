import React from 'react';
import Image from "./Image.jsx";
import sol from "../assets/sol.jpeg";
import kal from "../assets/kal.jpg";
import aman from "../assets/aman.jpg";
import menge from "../assets/menge.jpeg";
import yo from "../assets/yo.jpeg";

function Jemaw() {
    return (
        <div className="flex justify-center items-center">
            <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-full" link={yo} name="Yo"/>
            <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-full" link={sol} name="Yo"/>
            <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-full" link={kal} name="Yo"/>
            <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-full" link={aman} name="Yo"/>
            <Image style="w-[37px] h-[37px] m-1 shadow-2xl rounded-2xl" link={menge} name="Yo"/>
        </div>
    );
}

export default Jemaw;