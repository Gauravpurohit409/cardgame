import React, { useEffect} from 'react';

const Timer = (props) => {

    useEffect(()=>{

        let myInterval = setInterval(() =>{


            if (props.seconds >= 59)
            {
                props.setMinutes(props.minutes+1);
                props.setSeconds(0);
            }
            else{
                props.setSeconds(props.seconds+1);
            }

            if (props.minutes >= 59)
            {
                props.setHours(props.hours+1);
                props.setMinutes(0);
            }

        

        },1000)
        props.stopTimer ? (clearInterval(myInterval)):<></>
         
        return ()=>{
            clearInterval(myInterval);
       }

    })

  
    return (
        <div>
            
            <>{props.hours < 10 ? `0${props.hours}` : props.hours } : {props.minutes < 10 ? `0${props.minutes}`:props.minutes  } : {props.seconds < 10 ? `0${props.seconds}` : props.seconds } </>
        </div>
    );
};

export default Timer;