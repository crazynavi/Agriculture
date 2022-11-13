import React, { useState } from 'react'
import ReportsCard from '../ReportsCard'
import { FcLeft } from 'react-icons/fc'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import banner from '../../assets/updates-2.jpg'

const ReportsArchives = () => {
    const [showSingleAcrchive, setShowSingleArchive] = useState(false)
    return (
        <>
            {showSingleAcrchive ?

                <div className='box-container mt-4'>
                    <div className='d-flex w-100 justify-content-between align-items-center'>
                        <div className='d-flex align-items-center go-back-btn' onClick={() => setShowSingleArchive(false)}>
                            <FcLeft />
                            <h2 className='ms-2'>Archives</h2>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='small-text d-flex align-items-center'>
                                <AiOutlineMinus />
                                <h2>A</h2>
                            </div>
                            <div className='large-text d-flex align-items-center'>
                                <AiOutlinePlus />
                                <h1>A</h1>
                            </div>
                        </div>
                    </div>
                    <div className='reports-overflow'>
                        <div className='archive-date pt-4'>
                            <h2>AgResource, Morning Commentary August 3rd, 2022</h2>
                        </div>
                        <div className='archive-image mt-2'>
                            <img src={banner} alt='' className='w-100' />
                        </div>
                        <div className='archive-headline mt-2'>
                            <h1>ARC Morning Commentary; Pelosi Leaves Taiwan - Will Traders Return to Adding Risk? European Drought Becomes Critical - Rhine Stops Flowing; US Weather Models Disagree</h1>
                        </div>
                        <div className='archive-text mt-3'>
                            <h2>AgResource Farm Marketing Advice for Wednesday: 1/ No new advice.</h2>
                            <p className='mt-4'><b>6:30 AM CT CBOT Values:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='mt-2'><b>6:30 AM CT CBOT Values:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='mt-2'><b>6:30 AM CT CBOT Values:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='mt-2'><b>6:30 AM CT CBOT Values:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                :
                <div className='box-container reports mt-4 pt-4'>
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                    <ReportsCard setShowSingleArchive={setShowSingleArchive} />
                </div>
            }
        </>
    )
}

export default ReportsArchives
