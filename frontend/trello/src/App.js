import React, { useState, useEffect } from 'react';
import './App.css';
import {data} from './data';
import List from './List';

function App() {

  const [lists, setLists] = useState([]);

  useEffect(()=>{
    setLists(data.lists);
  })

  const addTodo = (listIdx, item)=>{
    const curLists = Object.assign([], lists);
    curLists[+listIdx].items.push(item);
    setLists(curLists)
  }

  const moveTodo = (dir, listIdx, todoIdx)=>{
    let curLists = Object.assign([], lists);

    let target = curLists[+listIdx].items[todoIdx];
    curLists[+listIdx].items.splice(todoIdx, 1)
    if(dir === "left") {
      let move = +listIdx - 1;
      if (move < 0) move = curLists.length-1;
      curLists[move].items.push(target);
    } else {
      let move = +listIdx + 1;
      if (move >= curLists.length) move =  0;
      curLists[move].items.push(target);
    }

    setLists(curLists)
  }

  return (
    <div className="App">
      <div className="board">
        {lists.map((list, idx) => <List key={idx} list={list} listIdx={idx} addTodo={addTodo} moveTodo={moveTodo}/>)}
      </div>
    </div>
  );
}

export default App;
