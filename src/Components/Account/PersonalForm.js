import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'

const PersonalForm = () => {
    return (
        <>
            <div className='box-container mt-4'>
                <h1 className='text-center'>USER INFORMATION</h1>
                <div className='form-group mt-4 mb-4'>
                    <div className='form-items'>
                        <label>First Name:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items'>
                        <label>Last Name:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items'>
                        <label>Company:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items'>
                        <label>Occupation:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items w-100'>
                        <label>Address:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items w-medium'>
                        <label>Country:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items w-medium'>
                        <label>City:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items w-xs'>
                        <label>State:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items w-small'>
                        <label>Postal:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items'>
                        <label>Email Address:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items'>
                        <label>Phone Number:</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items w-equal-width'>
                        <label>Current Password</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items w-equal-width'>
                        <label>New Password</label>
                        <input type={'text'} />
                    </div>
                    <div className='form-items w-equal-width'>
                        <label>Confirm Password</label>
                        <input type={'text'} />
                    </div>
                </div>
            </div>
            <div className='box-container mt-4'>
                <h1 className='text-center'>DEVICES</h1>
                <div className='devices-section mt-3 mb-4 d-flex justify-content-between align-items-cener'>
                    <div className='d-flex justify-content-between align-items-center'><span><AiOutlineMinus /></span><div>IOS Device Added:</div><div> 08/05/2022</div></div>
                    <div className='d-flex justify-content-between align-items-center'><span><AiOutlineMinus /></span><div>IOS Device Added:</div> <div>08/05/2022</div></div>
                </div>
            </div>
        </>
    )
}

export default PersonalForm
