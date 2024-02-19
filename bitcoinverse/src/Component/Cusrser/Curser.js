import React, { useRef , useEffect} from 'react'
import "../../Style/Curser.css"

const Curser = () => {
    const ref = React.useRef(null);

    React.useEffect(() => {
      document.addEventListener('mousemove',(event)=>{
        const {clientX,clientY} = event;
        const mousex = clientX - ref.current.clientWidth / 2;
        const mousey = clientY - ref.current.clientHeight / 2;
        ref.current.style.transform = `translate3d(${mousex}px, ${mousey}px, 0)`
      })
    }, [])
    
  return (
    <div className='curser' ref={ref}>
      <div  className='nn'  style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"40%"}}>
        <div className='nin'></div>
      </div>
    </div>
  )
}

export default Curser
