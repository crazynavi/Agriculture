import React, { useState } from 'react'
import ReportsArchives from '../Components/Reports/ReportsArchives'

const ReportDaily = () => {
    const [tab, setTab] = useState('morning')
    return (
        <>
            <div className='top-tabs'>
                <div onClick={() => setTab('morning')} className={tab === 'morning' ? 'active' : ''}>MORNING</div>
                <div onClick={() => setTab('noon')} className={tab === 'noon' ? 'active' : ''}>NOON</div>
                <div onClick={() => setTab('evening')} className={tab === 'evening' ? 'active' : ''}>EVENING</div>
                <div onClick={() => setTab('saturday')} className={tab === 'saturday' ? 'active' : ''}>SATURDAY</div>
                <div onClick={() => setTab('sunday')} className={tab === 'sunday' ? 'active' : ''}>SUNDAY</div>
                <div onClick={() => setTab('breaking')} className={tab === 'breaking' ? 'active' : ''}>BREAKING</div>
            </div>
            <ReportsArchives />
        </>
    )
}

export default ReportDaily
