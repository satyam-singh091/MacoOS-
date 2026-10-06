
import {Rnd}   from 'react-rnd'
import "./macwindows.scss"
const MacWindows = ({windowName,  setwindowState, children, isActive, onActivate ,width="50vw",hight="70vh"}) => {
  return (
   <Rnd
   onMouseDown={onActivate}
   onTouchStart={onActivate}
   style={{ zIndex: isActive ? 2 : 1 }}
   default={{
    width:width,
    height:hight,
    x:200,
    y:100
   }}
   >
        <div className='windows'>
            <div className='nav'>
                <div className="dots">
                    <div 
                    onClick={()=>setwindowState(state=>({...state,[windowName]:false}))}
                    className="dot red">
                       <span>x</span>
                    </div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title"><p>satyamsingh - zsh</p></div>
            </div>

            <div className='main-content'>
                        {children}
            </div>
        </div>
   </Rnd>
  )
}

export default MacWindows
