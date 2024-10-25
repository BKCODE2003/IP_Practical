import React from "react";

function Question({question,onAnswer}){

return (
    <div className="question">
        <h2>{question.question}</h2>
        {question.options.map((option,index)=>(
            <button key={index} onClick={()=> onAnswer(option)} >
                {option}
            </button>
        ))}
    </div>
);
}

export default Question;