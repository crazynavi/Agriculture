import React from 'react'
import logo from '../../assets/reports-image.png'

const DiscountModal = ({ setShowDiscountModal }) => {
    return (
        <div className='modal'>
            <div className='modal-inner'>
                <div className='modal-logo'>
                    <img src={logo} alt='' />
                </div>
                <div className='modal-content w-100 text-center'>
                    {/* <h3>Why do you wish to cancel your AgResource subscription?</h3> */}
                    <h1>15%OFF</h1>
                    <h2>MY CURRENT SUBSCRIPTION FOR THE 1ST PERIOD</h2>
                </div>
                <div className='modal-buttons mt-4'>
                    <button className='warning-btn' onClick={() => setShowDiscountModal(false)}>GET DISCOUNT</button>
                    <button className='danger-btn' onClick={() => setShowDiscountModal(false)}>CONTINUE CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default DiscountModal
