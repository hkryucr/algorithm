import React, { useState } from 'react';

export default function List(props){
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputText.length === 0) return;
        props.addTodo(props.listIdx, {toDo: inputText});
        setInputText("");
    }

    const moveClick = (direction, idx)=> function(e){
        e.preventDefault();
        props.moveTodo(direction, props.listIdx, idx);
    }
    
    return (
        <div className="list">
            <div className="list-title">
                {props.list.title}
            </div>
            <ul className="list-todos">
                {props.list.items.map((item, idx)=>{
                    return (
                        <li className="list-todo" key={idx}>
                            <button className="left-arrow" onClick={moveClick("left", idx)}>&#8678;</button>
                            <div className="item">{item.toDo}</div>
                            <button className="right-arrow" onClick={moveClick("right", idx)}>&#8680;</button>
                        </li>
                    )
                })}
            </ul>
            <form className="add-form" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="Enter a title for this card..." value={inputText}/>
                <input type="submit" value="Add Card" />
            </form>
        </div>
    )
}