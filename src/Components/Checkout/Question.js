import React from 'react';
import '../../CSS/Checkout/Question.css'

function Question({ question, onSelectOption }) {
    return (
        <div className="Question">
            <div className="question__title">
                <h2>{question.title}</h2>
            </div>
            <div className="questions__container">
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => onSelectOption(option.text)}>
                        <img src={option.photo} alt={option.text} />
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}


export default Question;
