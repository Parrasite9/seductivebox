import React, { useState } from 'react';
import Question from './Question';
import { useNavigate } from 'react-router-dom'

  const questions = [
    {
        id: 1,
        title: "What size are you?",
        options: [
            { text: "Petite", photo: "/images/questions/1.png" },
            { text: "Athletic", photo: "/images/questions/1.png" },
            { text: "Pear", photo: "/images/questions/1.png" },
            { text: "Apple", photo: "/images/questions/1.png" }
        ]
    },
    {
        id: 2,
        title: "What size coverage do you prefer?",
        options: [
            { text: "Minimal", photo: "/images/questions/1.png" },
            { text: "Some", photo: "/images/questions/1.png" },
            { text: "Full", photo: "/images/questions/1.png" }
        ]
    },
    {
      id: 3,
      title: "What kind of lingerie are you interested in?",
      options: [
        {text: "Babydolls", photo: '/images/questions/1.png'},
        {text: "Bodystockings", photo: '/images/questions/2.jpeg'},
        {text: "Teddys", photo: '/images/questions/3.png'},
        {text: "Bodysuits", photo: '/images/questions/4.png'},
        {text: "Bra & Panty Sets", photo: '/images/questions/5.png'},
        {text: "Garters", photo: '/images/questions/6.png'},
        {text: "Chimeses", photo: '/images/questions/7.png'},
      ]
    }
];


const Questionnaire = ({onComplete}) => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleSelectOption = (option) => {
      console.log("Selected options:", selectedOptions); // Log the selected options
        const question = questions[currentQuestionIndex];
        setSelectedOptions({ ...selectedOptions, [question.id]: option });

        // Move to the next question
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          // navigate('/checkout')
          // onComplete()
          handleSubmitQuestionnaire()
        }
    };

    const handleSubmitQuestionnaire = () => {
      fetch('/questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedOptions),
      })
        .then((response) => response.json())
        .then((data) => {
          // Store the subscription ID for later use in the checkout process
          localStorage.setItem('subscriptionId', data.id);
          onComplete();
        })
        .catch((error) => {
          console.error('Error submitting questionnaire:', error);
        });
    };
    

    return (
        <div>
            {questions.length > 0 && (
                <Question
                    question={questions[currentQuestionIndex]}
                    onSelectOption={handleSelectOption}
                />
            )}
        </div>
    );
};

export default Questionnaire;
