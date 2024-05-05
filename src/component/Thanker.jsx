import React from 'react';
import Video from "./Video.jsx";


function Thanker({image,name,description}) {
    return (
        <div className="w-full flex justify-center mt-52 mb-30">
            <div className="w-3/4  flex">
                <div className="w-1/6">
                    <div className="w-[120px] h-[267px] shadow-2xl rounded-full overflow-hidden relative flex justify-center items-center">
                        <img src={image} alt="Sol" className="object-cover w-full h-full"/>
                    </div>


                </div>
                <div className="w-5/6 flex-row ">
                    <div className="w-full  pt-4 mb-5"><h1>{name}</h1></div>
                    <div className="w-full mb-5"><p>{description}</p></div>
                    <div className="w-full h-[500px]">
                       <Video videoId={"SY8QnwQaA38"}  style="w-full h-[500px]" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Thanker;