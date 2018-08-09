import React from "react";
import API from "../../utils/API"



const canvasStyle = {
    height: '400px',
    width: '750px',
    background: 'black',
    marginLeft: '18%',
    marginRight: '18%'
}

function renderQuiz() {
    API.getQuiz();
    .then(res =>
        this.setState({
            books: res.data,
            text: "",
            category: ""
        })
    ).catch(err => console.log(err));
}




const Learn = () => ( <
    div >
    <
    h1 className = "text-center" > Greetings Humans! < /h1> <
    p >
    People have long been struggling to learn new material, so we incorperated our favorite method of learning, and applied it to our website.Here you can track your progress, learn new material, and have fun doing so!Let 's get learning!!! < /
    p >



    <
    RenderBtn onClick = {
        () => this.renderQuiz(questions.category)
    }
    />




    <
    canvas style = {
        canvasStyle
    } > < /canvas>



    <
    /div>
);

export default Learn;