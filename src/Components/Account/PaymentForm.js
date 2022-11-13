import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const PaymentForm = () => {
    return (
        <>
            <div className='box-container mt-4'>
                <div className='add-card-btn'><span><AiOutlinePlus /></span></div>
                <div className='card-form'>
                    <div className='form-heading  position-relative'>
                        <span><AiOutlineMinus /></span>
                        <h1>CREDIT CARD</h1>
                    </div>
                    <div className='form-fields mt-2'>
                        <div className='main-fields'>
                            <div className='form-group p-0'>
                                <div className='form-items w-100'>
                                    <label>Credit Card Number:</label>
                                    <input type={'text'} />
                                </div>
                                <div className='form-items'>
                                    <label>Expiration Date:</label>
                                    <input type={'text'} />
                                </div>
                                <div className='form-items'>
                                    <label>CVV:</label>
                                    <input type={'text'} />
                                </div>
                            </div>
                        </div>
                        <div className='optional-fields'>
                            <div className='form-group p-0'>
                                <div className='form-items w-100'>
                                    <label>Default:</label>
                                    <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className='form-items w-100'>
                                    <label>Postal:</label>
                                    <input type={'text'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-heading  position-relative'>
                        <span><AiOutlineMinus /></span>
                        <h1>CREDIT CARD</h1>
                    </div>
                    <div className='form-fields mt-2'>
                        <div className='main-fields'>
                            <div className='form-group p-0'>
                                <div className='form-items w-100'>
                                    <label>Credit Card Number:</label>
                                    <input type={'text'} />
                                </div>
                                <div className='form-items'>
                                    <label>Expiration Date:</label>
                                    <input type={'text'} />
                                </div>
                                <div className='form-items'>
                                    <label>CVV:</label>
                                    <input type={'text'} />
                                </div>
                            </div>
                        </div>
                        <div className='optional-fields'>
                            <div className='form-group p-0'>
                                <div className='form-items w-100'>
                                    <label>Default:</label>
                                    <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className='form-items w-100'>
                                    <label>Postal:</label>
                                    <input type={'text'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-heading  position-relative'>
                        <span><AiOutlineMinus /></span>
                        <h1>CREDIT CARD</h1>
                    </div>
                    <div className='form-fields mt-2'>
                        <div className='main-fields'>
                            <div className='form-group p-0'>
                                <div className='form-items w-100'>
                                    <label>Credit Card Number:</label>
                                    <input type={'text'} />
                                </div>
                                <div className='form-items'>
                                    <label>Expiration Date:</label>
                                    <input type={'text'} />
                                </div>
                                <div className='form-items'>
                                    <label>CVV:</label>
                                    <input type={'text'} />
                                </div>
                            </div>
                        </div>
                        <div className='optional-fields'>
                            <div className='form-group p-0'>
                                <div className='form-items w-100'>
                                    <label>Default:</label>
                                    <label class="container">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className='form-items w-100'>
                                    <label>Postal:</label>
                                    <input type={'text'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentForm
