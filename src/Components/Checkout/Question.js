import { optionClasses } from '@mui/base';
import React from 'react'

function Question() {
  
  const questions = [
    {
        id: 1,
        title: "What size are you?",
        options: [
            { text: "Petite", photo: "/images/petite.jpg" },
            { text: "Athletic", photo: "/images/athletic.jpg" },
            { text: "Pear", photo: "/images/pear.jpg" },
            { text: "Apple", photo: "/images/apple.jpg" }
        ]
    },
    {
        id: 2,
        title: "What size coverage do you prefer?",
        options: [
            { text: "Minimal", photo: "/images/minimal.jpg" },
            { text: "Some", photo: "/images/some.jpg" },
            { text: "Full", photo: "/images/full.jpg" }
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
    // Add more questions as needed
];

  return (
    <div className="Question">
        <div className="questions__container">
            <div className="question__title">
                <h2>{questions.title}</h2>
            </div>

            <div className="question__details">
                {questions.options.map((options, index) => (
                    <button key={index} onClick={() => onSelectedOption(options.text)}>
                        <img src={options.photo} alt={options.text} />
                        {options.text}
                    </button>
                ) )}
            </div>
        </div>
        
    </div>
  )
}

export default Question
