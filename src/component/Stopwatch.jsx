import React, { useState } from 'react'

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

const Stopwatch = () => {
    const[timerid, settimerid] = useState()
    const[watch, setWatch] = useState(1000)

    const start = ()=>{

        if(!timerid){
            let  id = setInterval(()=>{
                setWatch((prev)=> prev + 1000) 
            }, 100)
            settimerid(id)
        }
      
    }
    const reset = ()=>{
        clearInterval(timerid)
        setWatch(0)
    }
    const pause = ()=>{
        clearInterval(timerid)
        settimerid(null)
    }
  return (
    <div>Stopwatch: {msToTime(watch)}
    <button onClick={start}>Start</button>
    <button onClick={reset}>Reset</button>
    <button onClick={pause}>Pause</button>
    
    </div>
  )
}

export default Stopwatch