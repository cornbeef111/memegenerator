import React from 'react'
// import Memedata from "./Memedata";
function Meme(){
//    
      const [meme, setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
      })
      
      const [allMemeImages, setAllMemeImage] = React.useState([]);

      React.useEffect(() =>{
        fetch('https://api.imgflip.com/get_memes')
              .then(res => res.json())
              .then(data => setAllMemeImage(data.data.memes))
      },[])

         let url
         function getMemeImage(){
            const memeArray = allMemeImages
            const randomNumber = Math.floor(Math.random() * memeArray.length)
            url = memeArray[randomNumber].url
            setMeme(prevState =>{
                return{
                    ...prevState,
                    randomImage:url
                }
            })
         }

         
         function handleChange(event){
            const {name, value} = event.target
            setMeme(prevState =>{
                return({
                    ...prevState,
                    [name] : value
                })
            })
         }
    return(
        <main>
            <div className='main'>
                <input type='text'
                 placeholder='Top text' 
                 className='form-input'
                 onChange={handleChange}
                 name='topText'
                 value={meme.topText}
                 />
                <input type='text' 
                placeholder='Bottom text' 
                className='form-input' 
                onChange={handleChange}
                name='bottomText'
                value={meme.bottomText}
                />
                <button className='form-btn' onClick={getMemeImage}>Get a new meme image </button>    
            </div>
            <div className='meme'>
                   <img src={meme.randomImage} className='meme--image' alt=''/>
                   <h2 className='meme-top-text'> {meme.topText} </h2>
                   <h2 className='meme-bottom-text'>{meme.bottomText} </h2>
                </div>
        </main>
    )
}

export default Meme
