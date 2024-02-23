import React from 'react';

function Question({ question, onSelectOption }) {
    return (
        <div className="Question">
            <div className="questions__container">
                <div className="question__title">
                    <h2>{question.title}</h2>
                </div>

                <div className="question__details">
                    {question.options.map((option, index) => (
                        <button key={index} onClick={() => onSelectOption(option.text)}>
                            <img src={option.photo} alt={option.text} />
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Question;
