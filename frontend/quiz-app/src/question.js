import React, { useState, useEffect } from "react";

export default function Question(props){
  const [selected, setSelected] = useState("");
  const initTime = 3;
  const [timer, setTimer] = useState(initTime);

  useEffect(()=>{
    setTimeout(()=>{
      if(timer === 0) {
        props.submitAnswer(false);
        return setTimer(initTime);
      } 
      setTimer(timer - 1);
    }, 1000)
  }, [timer])


  const hanldeSelected = (index) => {
    return function (e) {
      setSelected(index);
    };
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    props.submitAnswer(selected === props.question.correct_index);
    setSelected("");
    setTimer(initTime);
  }

  const minute = Math.floor(timer / 60).toString()
  let second = Math.floor(timer % 60).toString();
  second = second.length === 1 ? "0" + second : second;

  return (
    <div className="question">
      <div className="question-content">{props.question.question}</div>
      <div className="question-timer">Time: {minute} : {second}</div>
      {props.question.answers.map((answer, idx) => (
        <Answer
          handleSelected={hanldeSelected}
          key={idx}
          answer={answer}
          answerIdx={idx}
          selected={selected}
        />
      ))}
      <button className="question-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

function Answer (props){
  const selected = props.selected === props.answerIdx;
  return (
    <div onClick={props.handleSelected(props.answerIdx)} className={`question-choices ${selected ? "selected" : null}`}>
      <i>&#10004;</i>
      {props.answer}
    </div>
  );
}