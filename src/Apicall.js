import React from 'react'

function Apicall(){

    
const [startWarsData, setStarWarsData] = React.useState({})
const [count, setCount] = React.useState(1)



function handleClick(){
    setCount(prevCount => prevCount +1)
}



React.useEffect(() =>{
    fetch(`https://swapi.dev/api/people/${count}`)
     .then(res => res.json())
     .then(data => setStarWarsData(data))
},[count])


    return(
        <div>
            {/* <h1> {count} </h1> */}
            <button onClick={handleClick}>Get next character</button>
            <pre>{JSON.stringify(startWarsData, null, 2)}</pre>
        </div>
    )
}

export default Apicall