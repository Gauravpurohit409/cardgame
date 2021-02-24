import './App.css';
import { useState } from 'react';
import Cards from './components/Cards';
import Timer from './components/Timer';


function WelcomeMessage(){
  return <h1> Welcome to the Memory Game! </h1>
}



function NumberOfCards(props){

const handleClick = (e) =>{
  props.setNumber(e.target.value)
}
  return  <h2>Enter Even number of Cards : <input type = "number" placeholder = "Enter the even number" onChange = {handleClick} value = {props.number}/></h2>
}

function Button(props){
  const checkInput = () =>{ 
      if (props.number === " " || props.number%2 !== 0 || props.number === 0) 
      {
        alert("Enter valid Even number greater then 0");
      }
      else{
        props.setRenderCards(true);
      }
  }
  return <button onClick ={checkInput}>Start Game</button>
}
function App() {

  const [number,setNumber] = useState(0);
  const[stopTimer,setStopTimer] = useState(false);  
  const [renderCards,setRenderCards] = useState(false);
  const [minutes,setMinutes] = useState(0);
  const [seconds,setSeconds] = useState(0);
  const [hours,setHours] = useState(0);

  return (
    <div className="App">
     <WelcomeMessage />
     {(renderCards === false) 
     ? 
     <>
       <NumberOfCards  number = {number} setNumber = {setNumber}/>
       <Button renderCards = {renderCards} setRenderCards = {setRenderCards} number = {number}/>
      </>
     :
     <>
             {stopTimer ? <>
          <p>Congratulations you have completed Game in {hours > 0 ? `${hours} hours and` :<></>} {minutes >0 ? ` ${minutes} minutes` :<></>}
          {seconds > 0 ? `${seconds} seconds`:<></>}</p>
        </>:<> 
        <Timer stopTimer = {stopTimer} hours ={hours} minutes = {minutes} seconds = {seconds} setHours = {setHours} setMinutes = {setMinutes} setSeconds = {setSeconds}/>
  
         </>}
  

        <Cards number = {number} setStopTimer = {setStopTimer} />
     </>
      }
    </div>
  );
}

export default App;
