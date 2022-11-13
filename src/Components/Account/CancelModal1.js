import React from 'react'
import logo from '../../assets/reports-image.png'


const CancelModal1 = ({setShowModal1,setShowModal2}) => {
    return (
        <div className='modal'>
            <div className='modal-inner'>
                <div className='modal-logo'>
                    <img src={logo} alt='' />
                </div>
                <div className='modal-content'>
                    {/* <h3>Why do you wish to cancel your AgResource subscription?</h3> */}
                    <h3>Are you sure you would like to cancel your subscription?</h3>
                </div>
                <div className='modal-buttons mt-4'>
                    <button className='warning-btn' onClick={() => {
                        setShowModal1(false)
                        setShowModal2(true)
                    }}>YES, CANCEL</button>
                    <button className='danger-btn' onClick={() => {
                        setShowModal1(false)
                    }}>NO, DO NOT</button>
                </div>
            </div>
        </div>
    )
}

export default CancelModal1
