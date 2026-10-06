import React from 'react'
import MacWindows from './MacWindows'
import "./resume.scss"

const Resume = ({ windowName, setwindowState, isActive, onActivate }) => {
    return (
        <MacWindows windowName={windowName} setwindowState={setwindowState}  isActive={isActive} onActivate={onActivate}>
            <div className="resume-window">
                <embed src="/resume.pdf" frameborder="0"></embed>
            </div>
        </MacWindows>
    )
}

export default Resume
