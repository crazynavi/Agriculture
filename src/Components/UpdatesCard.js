import React from 'react'
import Timestamp from 'react-timestamp'

const UpdatesCard = ({image, text, timestamp, onClick}) => {
    return (
        <div onClick={onClick} className='updates-card'>
            <img src={image} alt='' />
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
