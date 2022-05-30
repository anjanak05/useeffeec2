import React, { useEffect, useState } from 'react'

const Times = () => {
   const [timer, setTimer] = useState(10)
useEffect(() =>{
  const id=  setInterval(()=>{
      if(timer<1){
        clearInterval(id)
       }else{
        setTimer((timer)=>timer-1)
       }
    }, 1000)

    return () =>{
        clearInterval(id)
    }
}, [timer])

  return (
    <div>Timer : {timer}</div>
  )
}

export default Times