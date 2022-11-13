import React from 'react'
import Update1 from '../assets/updates-1.jpg'
import Update2 from '../assets/updates-2.jpg'
import Update3 from '../assets/updates-3.jpg'
import UpdatesCard from './UpdatesCard'

const Updates = () => {
    return (
        <div className='box-container'>
            <h2 className='box-heading'>Latest Updates</h2>
            <div className='d-flex updates justify-content-between align-items-center'>
                <UpdatesCard image={Update1} text={'Climate Impact Reports Cold front brings some...'} timestamp={'an hour ago'} />
                <UpdatesCard image={Update1} text={'Climate Impact Reports Cold front brings some...'} timestamp={'an hour ago'} />
                <UpdatesCard image={Update2} text={'Brazil’s Corn Export Commitments More Than Tw...'} timestamp={'2 hours ago'} />
                <UpdatesCard image={Update1} text={'Climate Impact Reports Cold front brings some...'} timestamp={'2 hours ago'} />
                <UpdatesCard image={Update3} text={'US Sorghum Supply & Demand'} timestamp={'12 hours ago'} />
            </div>
        </div>
    )
}

export default Updates
