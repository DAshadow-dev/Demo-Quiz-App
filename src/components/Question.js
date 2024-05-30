import React from "react"

const Question = ({question, onSelected}) => {
    const handleSelected = (option) =>{
        onSelected(option);
    }

    return (
        <div>
            <h2>Question:{question.question}</h2>
            <ul>
            {
                question.options.map((option) =>{
                    return (
                        <li
                            key={option}
                            onClick={() => handleSelected(option)}
                            style={{cursor : 'pointer'}}
                        >
                            {option}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Question;