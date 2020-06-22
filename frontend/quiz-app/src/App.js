import React, { useState, useEffect } from 'react';
import './App.css';
import {fetchQuestions} from './Util';
import Question from './question';

const shuffleArray = (array) => {
  for(let i = array.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answered, setAnswered] = useState([]);

  useEffect(()=>{
    fetchQuestions.then((result)=>{
      let ques = result.data;
      shuffleArray(ques);
      setQuestions(ques);
    })
  }, [])

  const submitAnswer = (submitted)=>{
    const newIdx = questionIdx + 1;
    let newAnswered = answered.slice()
    newAnswered.push(submitted);
    setAnswered(newAnswered);
    setQuestionIdx(newIdx);
  }

  if(questions.length === 0) return null
  if (questions.length === questionIdx) {
    let counts = 0;
    answered.forEach(el => {if(el) counts++;});
    return (
      <div className="app-container">
        <div className="app">
          <div className="body">
            <div className="body-complete-title"> Thank you for your time taking our quiz.</div>
            <div className="body-complete-result">
              Your got {counts} out of {questions.length}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="app">
        <div className="body">
          <div className="body-header">
            <div className="question-title">WorkWhile Interview</div>
            <div className="question-number"> {questionIdx + 1} / 5 </div>
          </div>
          <Question
            question={questions[questionIdx]}
            submitAnswer={submitAnswer}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
