import React from 'react'

const UpdatesCard = ({image, text, timestamp}) => {
    return (
        <div className='updates-card'>
            <img src={image} alt='' />
            <div className='updates-text'>
                <div className="d-flex justify-content-between align-items-center">
                    <p>{text}</p>
                    <small>{timestamp}</small>
                </div>
            </div>
        </div>
    )
}

export default UpdatesCard
