import React from 'react'
import Timestamp from 'react-timestamp'

const UpdatesCard = ({image, text, timestamp, onClick}) => {
    return (
        <div onClick={onClick} className='updates-card'>
            <div className="updates-background"
                style={{
                    backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, 0.5), 
                        rgba(0, 0, 0, 0.5)
                    ), url(${image})`,
                    backgroundPosition: "50%",
                    height: '100%',
                    opacity: '0.8',
                    backgroundColor: "#000"
                }}>
            </div>
            <div className='updates-text'>
                <div className="d-flex justify-content-between align-items-center">
                    <p className='update-title'>{text}</p>
                    <small><Timestamp relative date={timestamp}/></small>
                </div>
            </div>
        </div>
    )
}

export default UpdatesCard
