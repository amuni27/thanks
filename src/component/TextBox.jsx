import React from 'react';

function TextBox({text}) {
    return (
        <div className="w-full mt-20 mb-20 flex justify-center items-center">
            <h1 className="text-amber-700 text-3xl m">{text}</h1>
        </div>
    );
}

export default TextBox;