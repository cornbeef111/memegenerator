import React from 'react'

function Header(){
       const [color, setColor] = React.useState(true);
       let body = document.body;
      
       
       function changeColor(){
        
        if(color === true){
            body.style.backgroundColor='black'
            body.style.color='white';
        }else if(color === false){
            body.style.backgroundColor='white'
            body.style.color='black'
        }
        setColor(prevState => !prevState)
       }
       
    return(
        <header>
           <img src='./images/Trollface.png' className="header-img" alt='' />
           <h2 className='header-title'> Meme Generator</h2>
           <div>
            <button onClick={changeColor}>Black/White</button>
           </div>
        </header>
    )
}

export default Header;