import React from 'react';
import Header from "../component/Header.jsx";
import CherishedFriend from "../component/CherishedFriend.jsx";
import Thanker from "../component/Thanker.jsx";
import aman from "../assets/aman.jpg"
import sol from "../assets/sol.jpeg"
import kal from "../assets/kal.jpg"
import menge from "../assets/menge.jpeg"

function Home(props) {
    return (
        <div className="w-full">
            <Header page={true}/>
            <CherishedFriend />
            <Thanker image={sol} name="SOLOMON MULATU" description="Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsu
                        Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsu
                        Lore ipsum Lore ipsum Lore ipsum"/>
            <Thanker image={kal} name="KALEAB YALEWDEG" description="Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsu
                        Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsu
                        Lore ipsum Lore ipsum Lore ipsum"/>
            <Thanker image={aman} name="AMANUEL LAWRO" description="Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsu
                        Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsu
                        Lore ipsum Lore ipsum Lore ipsum"/>
            <Thanker image={menge} name="MENGESHA TEKELEA" description="Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsu
                        Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsu
                        Lore ipsum Lore ipsum Lore ipsum"/>
        </div>
    );
}

export default Home;