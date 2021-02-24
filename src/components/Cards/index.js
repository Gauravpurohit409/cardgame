import React, { useEffect, useState } from 'react';
import Card from '../Card';
import "./index.css";


const Cards = (props) => {
    
    const [clickedCards,setClickedCards] = useState([]);
    const [numberArray,setNumberArray]  = useState([]);
    const [isClickable,setClickAbility] = useState([]);
   
    function shuffle(newArray) {
        var tmp, current, top = newArray.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = newArray[current];
            newArray[current] = newArray[top];
            newArray[top] = tmp;
        }
        return newArray;
    }
    

    const check = ()=>{
        const newArray = isClickable.filter((clickable) => clickable === true);
        if (newArray.length === 0) 
        {
            props.setStopTimer(true);
        }

        // console.log(newArray)
    }

    useEffect(()=>{
        let newArray = [];
        let clickable = [];
        
        for(let i =1;i<=parseInt(props.number/2);i++)
        {
            newArray.push(i);
            newArray.push(i);
            clickable.push(true);
            clickable.push(true);

        }
        
        newArray = shuffle(newArray);
        // console.log(newArray);
        setNumberArray(newArray);
        setClickAbility(clickable);
    },[props.number])
    
    return (
        <>
        <div className= "cards">
        
        {numberArray.map((number,index) =>{
          return  <Card number = {number} check ={check} isClickable = {isClickable} setClickAbility = {setClickAbility} index = {index} clickedCards = {clickedCards} setClickedCards = {setClickedCards} />
        })}
        </div>

        </>
    );
};

export default Cards;