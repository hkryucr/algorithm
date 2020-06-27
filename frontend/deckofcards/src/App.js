import React, {useState} from 'react';
import './App.css';
import Card from './Card';

function CardProp (num, suit){
  this.num = num;
  this.suit = suit;
}

const generateDeck = () => {
  const newDeck = new Set();
  const suits = ["♦", "♥", "♣", "♠"];
  for(const suit of suits){
    for(let i = 1; i <= 13; i++){
      newDeck.add(new CardProp(i, suit));
    }
  }
  return newDeck;
}

const drawCards = (num, deck, selectedCards) => {
  let arrDeck = Array.from(deck);
  let ranNums = new Set();
  let newSelecte = Object.assign([], selectedCards);
  while(ranNums.size < num){
    ranNums.add(Math.floor(Math.random(num) * deck.size));
  }

  for(const ranNum of ranNums){
    newSelecte.push(arrDeck[ranNum]);
    deck.delete(arrDeck[ranNum]);
  }
  return [newSelecte, deck];
}

function App() {
  const [deck, setDeck] = useState(generateDeck());
  const [inputNum, setInputNum] = useState("");
  const [selected, setSelected] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setInputNum(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const curNum = +inputNum;
    if(curNum > deck.size){
      let newError = ""
      if (deck.size === 0) {
        newError = "No more cards left. Please reset the game"
      } else {
        newError = `You input number should be between ${1}~${deck.size}`;
      }
      setErrorMsg(newError);
      setTimeout(()=>{
        setErrorMsg("");
      }, 3000)
    } else {
      const [ newSelected, newDeck ]= drawCards(inputNum, deck, selected);
      setSelected(newSelected);
      setDeck(newDeck);
    }
  }
  const resetClick = (e)=>{
    e.preventDefault();
    setDeck(generateDeck());
    setInputNum("")
    setSelected([]);
    setErrorMsg("");
  }
  const handleDrop =(e)=>{
    // e.preventDefault();
    e.stopPropagation();
    e.preventDefault();

    console.log(e, "dDrop")
  }

  const handleDragOver = (e)=>{
    e.preventDefault();
    // e.stopPropotgation();
  }
  return (
    <div className="App">
      <h1>Deck of Cards</h1>
      <div className="error-message">{errorMsg}</div>
      <input onChange={handleChange} type="text" value={inputNum}/>
      <div className="buttons">
        <button className="submit-button" onClick={handleClick}>Submit</button>
        <button className="reset-button" onClick={resetClick}>Reset</button>
      </div>
      <div className="all-cards">
        <div className="sorted-cards" >
          <div className="sorted-board h" onDragOver={handleDragOver}  onDrop={event=>handleDrop(event)}>
            <span>Heart</span>
          </div>
          <div className="sorted-board c"  onDragOver={handleDragOver}  onDrop={event=>handleDrop(event)}>
            <span>Clover</span>
          </div>
          <div className="sorted-board d"  onDragOver={handleDragOver}  onDrop={event=>handleDrop(event)}>
            <span>Diamond</span>
          </div>
          <div className="sorted-board s"  onDragOver={handleDragOver}  onDrop={event=>handleDrop(event)}>
            <span>Spade</span>
          </div>
        </div>
        <div className="cards">
          {selected.map((card, idx) => <Card className="card" key={idx} card={card}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
