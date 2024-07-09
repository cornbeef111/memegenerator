import React from 'react'

function WindowTracker(){
    const [show, setShow] = React.useState(true)

    function toggle(){
        setShow(prevState => !prevState)
    }


    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() =>{
        function watchResize(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize',watchResize)
        return(function(){
            window.removeEventListener('resize',watchResize)
        })
    }, [])

  

    return(
        <div className='tracker'>
            <hr />
              <p>This is a different feature that tracks the window size and upates it</p>
               <button onClick={toggle}>Toggle Window Tracker</button>

                {show && <h1>Window width: {windowWidth} </h1>}
        </div>
       
    )
}

export default WindowTracker