import React, { useState, useEffect } from "react";
import './App.css';
import _ from "lodash";

declare var searchData: (data: string) => Promise<any>;

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [data, setData] = useState([]);

  let debounceResize: number;
  const handleChange = function (event: React.ChangeEvent<HTMLInputElement>){
    event.persist();
    let newInput = event.target.value;
    setInputText(newInput);
    // window.clearTimeout(debounceResize);
    // debounceResize = window.setTimeout(() => {
    //   console.log(newInput);
    //   searchData(newInput).then((res: any) => {
    //     setData(res);
    //   });
    // }, 1000);

    _.debounce(()=>{}, 2000)

  };
  

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-input" placeholder="Start typing a movie title..." onChange={handleChange} value={inputText}/>
        <ul className="results"></ul>
      </form>
      {data.map((item:any, idx) => <div key={idx}>{item.title}</div>)}
    </div>
  );
}

export default App;
