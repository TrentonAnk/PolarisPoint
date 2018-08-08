import React from "react";




const canvasStyle = {
    height: '400px',
    width: '750px',
    background: 'black',
    marginLeft: '18%',
    marginRight: '18%'
}






const Learn = () => ( <
    div >
    <
    h1 className = "text-center" > Greetings Humans! < /h1> <
    p >
    People have long been struggling to learn new material, so we incorperated our favorite method of learning, and applied it to our website.Here you can track your progress, learn new material, and have fun doing so!Let 's get learning!!! < /
    p >

    <
    canvas style = {
        canvasStyle
    } > < /canvas>



    <
    /div>
);

export default Learn;