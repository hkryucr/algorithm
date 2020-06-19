import React from 'react';

export default function Card (props){

    let curCard = props.card.num;
    if(curCard === 1){
        curCard = "A"
    } else if(curCard === 11){
        curCard = "J"
    } else if (curCard === 12){
        curCard = "Q"
    } else if (curCard === 13) {
        curCard = "K"
    }

    const handleDragStart=(e)=>{
        // e.preventDefault();
        console.log(e.target);
        e.stopPropagation();
    }
    // const handleDrop=(e)=>{
    //     console.log(e)
    // }

    return (
        <div className="card" draggable onDragStart={e=>handleDragStart(e)}>
            <div className="card-top">
                <div>{curCard}</div>
                <div>{props.card.suit}</div>
            </div>
            <div className="card-bottom">
                <div>{curCard}</div>
                <div>{props.card.suit}</div>
            </div>
        </div>
    )
}