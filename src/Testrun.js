import React from 'react'
function Example(){
      const [thingsArray, setThings] = React.useState(['things1','things2'])
      const arrayElement = thingsArray.map(thing =>{
        return <p> {thing} </p>
      })
     
      function addItem(){
       let newThing = `thing ${thingsArray.length + 1}`;
       setThings(preState => [...preState, newThing])
    
      }
    return(
        <div>
            <button onClick={addItem}>Add Item</button>
            {arrayElement}
        </div>
    )
}

export default Example