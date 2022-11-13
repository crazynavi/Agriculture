import React from 'react'
import logo from '../../assets/reports-image.png'

const CancelModal2 = ({setShowModal2, setShowDiscountModal}) => {
    const showDiscountModal = () => {
        setShowModal2(false)
        setShowDiscountModal(true)
    }
    return (
        <div className='modal'>
            <div className='modal-inner'>
                <div className='modal-logo'>
                    <img src={logo} alt='' />
                </div>
                <div className='modal-content'>
                    <h3>Why do you wish to cancel your AgResource subscription?</h3>
                    {/* <h3>Are you sure you would like to cancel your subscription?</h3> */}
                </div>
                <div className='modal-buttons multi-buttons mt-4'>
                    <button onClick={showDiscountModal} className='warning-btn mb-3' >I NO LONGER REQUIRE THESE SERVICES.</button>
                    <button onClick={showDiscountModal} className='warning-btn mb-3'>SUBSCRIPTION(S) COSTS TOO MUCH.</button>
                    <button onClick={showDiscountModal} className='warning-btn mb-3'>I USE ANOTHER SERVICE.</button>
                    <button onClick={showDiscountModal} className='warning-btn mb-3'>I WAS UNSATISFIED.</button>
                    <button onClick={showDiscountModal} className='warning-btn'>OTHER.</button>
                </div>
            </div>
        </div>
    )
}

export default CancelModal2
