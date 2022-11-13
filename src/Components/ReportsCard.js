import React from 'react'
import Image from '../assets/reports-image.png'

const ReportsCard = ({ setShowSingleArchive }) => {
    return (
        <div className='reports-card-container mb-4' onClick={() => setShowSingleArchive(true)}>
            <div className='report-image'>
                <img src={Image} alt='' />
            </div>
            <div className='report-summary'>
                <p>AgResource Morning Commentary; 1st Ship Leaves Ukraine Port with Corn; Central US Weather Not as Hot; Rain Locations Devated; Pelosi in Asia, Will She Visit Taiwan?</p>
                <small>AgResource Farm Marketing Advice for Monday: 1/ No new advice. 6:30 AM CT C ...</small>
            </div>
            <div className='report-date'>
                <h2>AUG</h2>
                <h1>08</h1>
            </div>
        </div>
    )
}

export default ReportsCard
