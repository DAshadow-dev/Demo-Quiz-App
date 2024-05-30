import React from "react";

const Score = ({ score,onReset}) => {
    return (
        <div className="Result">
            <h2> Your score is : {score}</h2>
            <button onClick={onReset}>Try again?</button>
        </div>
    )
}

export default Score;