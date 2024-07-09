import React from 'react'
import Count from './Count';
function Instance(){
    
const [count , setCount] = React.useState(0);
function minusNumber(){
      setCount( prevCount => prevCount - 1)
}
function addNumber(){
    setCount(prevCount => prevCount + 1)
}
return(
<div className='counter'>
  <button onClick={minusNumber}>-</button>
  <Count number={count} />
  <button onClick={addNumber}>+</button>
</div>
)
   
}
export default Instance





// const [isGoingOut, setIsGoingOut] = React.useState(true);

    //     function change(){
    //         setIsGoingOut(prevIsGoingOut => prevIsGoingOut? false : true)
    //     }

    // return(
    //     <div>
    //         <h1>Do i feel like going out?</h1>
    //         <div onClick={change}>
    //             <h1>{isGoingOut? "Yes":"No"}</h1>
    //         </div>
    //     </div>
    // )









