import React from "react";

function Result({score,totalQuestions}){
    return (
        <div className="result">
            <h2>You Have Successfully Completed the Quiz.</h2>
            <p>Your Score: {score} out of {totalQuestions}</p>
        </div>
    );
}

export default Result;
