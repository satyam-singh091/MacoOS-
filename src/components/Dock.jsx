import React from 'react'
import Note from './Windows/Note'

const Dock = ({ onCliClick , windowState , setwindowState}) => {
  return (
    <footer className='dock'>
      <div
      onClick={()=>{setwindowState(state =>({...state, github:true})) }}
       className='icon github'><img src="/doc-icons/github.svg" alt="" /></div>
      <div

       onClick={()=>{setwindowState(state =>({...state, note:true})) }}
       className='icon note'><img src="/doc-icons/note.svg" alt="" /></div>
      <div

       onClick={()=>{setwindowState(state =>({...state, pdf:true})) }}
       className='icon pdf'><img src="/doc-icons/pdf.svg" alt="" /></div>

      <div className='icon calender'><img src="/doc-icons/calender.svg" alt="" /></div>

      <div className='icon link'><img src="/doc-icons/link.svg" alt="" /></div>

      <div className='icon mail'><img src="/doc-icons/mail.svg" alt="" /></div>

      <div
       onClick={()=>{setwindowState(state =>({...state, spotify:true})) }}
       className='icon spotify'><img src="/doc-icons/spotify.svg" alt="" /></div>
      <div
      
       onClick={()=>{setwindowState(state =>({...state, cli:true})) }}
        className='icon cli'
        // role="button"
        // tabIndex={0}
        // aria-label="Open CLI window"
        // onClick={onCliClick}
        // onKeyDown={(event) => {
        //   if (event.key === 'Enter' || event.key === ' ') onCliClick?.()
        // }}
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  )
}

export default Dock
