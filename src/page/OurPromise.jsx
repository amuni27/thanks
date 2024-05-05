import React from 'react';
import Header from "../component/Header.jsx";
import Video from "../component/Video.jsx";
import TextBox from "../component/TextBox.jsx";
import Jemaw from "../component/Jemaw.jsx";

function OurPromise(props) {
    return (
        <div>
            <Header page={false} />
            <TextBox text="OUR PROMISE" />
            <div className="w-full flex justify-center">
            <Video videoId={"SY8QnwQaA38"}  style="w-3/4 h-[500px]" />
            </div>
            <div className="w-full flex justify-center mt-10">
                <Jemaw />
            </div>
        </div>
    );
}

export default OurPromise;