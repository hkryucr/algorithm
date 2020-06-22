import React, { Component, useState, useEffect } from 'react';
import './App.css';

// useEffect -> equivalent ComponentDidMount or ComponentDidUpdate // also take care componentDidUnmount

export default function App() {

  const [curValue, setCurValue] = useState("");
  const [curOperator, setCurOperator] = useState("");
  const [curOperatorBool, setCurOperatorBool] = useState(false);

  const operations = {
    "÷": function (a, b) { return a / b; },
    "×": function (a, b) { return a * b; },
    "-": function (a, b) { return a - b; },
    "+": function (a, b) { return parseFloat(a) + parseFloat(b); }
  }

  function calcualte(string){
    string
    for(let i = 0; i < string.length; i++){
      string[i]
    }
  }

  function updateValue(e){
    e.preventDefault();
    let currentVal = e.currentTarget.innerText;
    let lastChar = curValue[curValue.length - 1];
    if(operations[lastChar] !== undefined){
      lastChar = curValue.slice(0,curValue.length-1) + currentVal;
      setCurValue(lastChar);
      return;
    }
    if(currentVal === "C"){
      setCurValue("");
      return;
    } else if (currentVal === "="){
      calcualte(curValue);
      return
    }
    setCurValue(curValue + currentVal);
  }
  // console.log("just set scrollDepth, 1")
  // function determineUserScrollDepth(){
  //   const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  //   setScrollDepth(scrolled);
  // }

  // useEffect(()=>{
  //   console.log("this is use effect, 4");
  //   window.addEventListener('scroll', determineUserScrollDepth);
  //   return function(){
  //     window.removeEventListener('scroll', determineUserScrollDepth);
  //   }
  // })

  return (
    <div className="App">
      CALCULATOR
      <div className="calculator">
        <div className="input">{curValue}</div>
        <div className="buttons">
          <div className="operators">
            <div onClick={updateValue}>+</div>
            <div onClick={updateValue}>-</div>
            <div onClick={updateValue}>&times;</div>
            <div onClick={updateValue}>&divide;</div>
          </div>
          <div className="panel">
            <div className="leftPanel">
              <div className="firstNums">
                <div onClick={updateValue}>7</div>
                <div onClick={updateValue}>8</div>
                <div onClick={updateValue}>9</div>
              </div>
              <div className="secondNums">
                <div onClick={updateValue}>4</div>
                <div onClick={updateValue}>5</div>
                <div onClick={updateValue}>6</div>
              </div>
              <div className="thridNums">
                <div onClick={updateValue}>1</div>
                <div onClick={updateValue}>2</div>
                <div onClick={updateValue}>3</div>
              </div>
              <div className="fourthNums">
                <div onClick={updateValue}>0</div>
                <div onClick={updateValue}>.</div>
                <div onClick={updateValue}>C</div>
              </div>
            </div>
            <div className="rightPanel" onClick={updateValue}>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}