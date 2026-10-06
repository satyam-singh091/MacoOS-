import React from 'react'
import MacWindows from './MacWindows'
import "./spotify.scss"

const Spotify = ({ windowName, setwindowState, isActive, onActivate }) => {
    return (
        <MacWindows windowName={windowName} setwindowState={setwindowState} 
            width='25vw'
            isActive={isActive}
            onActivate={onActivate}
        >
            <div className="spotify-window">
                <iframe
                    title="Spotify playlist"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0&si=53774810e51b4993"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
        </MacWindows>
    )
}

export default Spotify
