import React, { useState} from 'react';

const Counter = () => {
  const[Num, setNum]= useState(0)
  const incNum =()=>{
    setNum(Num+1)
  };
  const DecNum =()=>{
    if(Num >0){
    setNum(Num-1)
  }
  else{
    alert("Sorry this limit is reached")
    setNum(0)
  }
}
  return (
    <>
      <div className="main_container my-6" >
        <div className="center_container">
            <h1>{Num}</h1>
            <div className="btn_div">
            <button type="button " class="btn btn-primary btn-lg "  onClick={incNum}>Incr</button>  

            <button type="button " class="btn btn-danger btn-lg "  onClick={DecNum}>Decre</button>  
            

                
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Counter
