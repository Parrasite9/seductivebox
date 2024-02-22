import React from 'react'
import { useState } from 'react'
import '../../CSS/Checkout/Questionnaire.css'
import Question from './Question'

function Questionnaire() {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleSelectedOption = (option) => {
    const question = questions[currentQuestionIndex]
    setSelectedOptions({...selectedOptions, [question.id]: option })

    // MOVE TO THE NEXT QUESTION 
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // ALL QUESTIONS ANSWERED, PROCEED TO CHECKOUT 
    }
  }

  return (
    <div className='Questionnaire'>
      {questions.length > 0 && (
        <Question
            question={question[currentQuestionIndex]}
            onSelectOption={handleSelectedOption} />
      )}
    </div>
  )
}

export default Questionnaire
