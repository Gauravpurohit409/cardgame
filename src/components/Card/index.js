import React, { useEffect } from 'react';
function Card(props){

                 
    const handleClick = (e) =>{
        if (props.isClickable[e.target.id])
        {      
            // console.log(props.isClickable,props.clickedCards);
            if (props.clickedCards.length === 1)
            {
                if(props.clickedCards[0].innerHTML === e.target.innerHTML)
                {
                        props.isClickable[e.target.id] = false;
                        props.isClickable[props.clickedCards[0].id] = false;
                }
            }
            if (props.clickedCards.length >= 2)
            {
                if(props.clickedCards[0].innerHTML !== props.clickedCards[1].innerHTML)
                {
                        props.clickedCards.map((card) =>{
                        card.style.transform = "rotateY(180deg)";
                        card.style.backgroundColor = "black";
                        return <></>
                        })
                }
                else if(props.clickedCards[0].innerHTML === props.clickedCards[1].innerHTML)
                {
                    props.clickedCards.map((card) =>{
                        props.isClickable[card.id] = false;
                        return <></>
                       
                    })
                }

                e.target.style.transform  =  "rotateY(0deg)";
                e.target.style.backgroundColor = "white";
                props.setClickedCards([e.target]);
            }        
            else{
                const newClickedCards = [...props.clickedCards,e.target];
                e.target.style.transform  =  "rotateY(0deg)";
                e.target.style.backgroundColor = "white";
                props.setClickedCards(newClickedCards);       
            }
            // console.log(props.isClickable)
        }
    }

    useEffect(()=>{
        props.check();
    })


    return    <>
        <div className="card" >
            <div className="card-inner"  id = {props.index} onClick = {handleClick}>
                    {props.number}   
                </div> 
            
        </div>
    </>
}


export default Card;