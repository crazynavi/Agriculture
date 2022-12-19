import React, { useState, useEffect } from 'react'
import Banner from '../assets/form-banner.jpg'
import BusinessForm from '../Components/Account/BusinessForm';
import PasswordForm from '../Components/Account/PasswordForm';
import CancelModal1 from '../Components/Account/CancelModal1';
import CancelModal2 from '../Components/Account/CancelModal2';
import DiscountModal from '../Components/Account/DiscountModal';
import PaymentForm from '../Components/Account/PaymentForm';
import PersonalForm from '../Components/Account/PersonalForm';
import SubscriptionTable from '../Components/Account/SubscriptionTable';
import lang from "../utils/Language"
// import http from '../utils/http-common';

const Account = () => {
  
  const [tab, setTab] = useState('personal')
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showDiscountModal, setShowDiscountModal] = useState(false)
  const [updateState, setUpdateState] = useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setUpdateState(updateState=>updateState+1)
  }
  console.log(updateState);
  return (
    <>
      <div className='top-tabs'>
        <div onClick={() => {setTab('personal');setUpdateState(0)}} className={tab === 'personal' ? 'active': ''}>{lang.account.personal}</div>
        <div onClick={() => {setTab('password');setUpdateState(0)}} className={tab === 'password' ? 'active': ''}>{lang.account.password}</div>
        <div onClick={() => setTab('business')} className={tab === 'business' ? 'active': ''}>{lang.account.business}</div>
        <div onClick={() => setTab('subscriptions')} className={tab === 'subscriptions' ? 'active': ''}>{lang.account.subscriptions}</div>
        <div onClick={() => setTab('payment')} className={tab === 'payment' ? 'active': ''}>{lang.account.payment}</div>
      </div>
      <form className='form-container d-flex justify-content-between' onSubmit = {handleSubmit}>
        <div className='form-section'>
          {tab === 'personal' && <PersonalForm  updateState={updateState} currentTab={tab}/>}
          {tab === 'password' && <PasswordForm  updateState={updateState} currentTab={tab}/> }
          {tab === 'business' && <BusinessForm  />}
          {tab === 'subscriptions' && <SubscriptionTable setShowModal1={setShowModal1} />}
          {tab === 'payment' && <PaymentForm  /> }
        </div>
        <div className='banner-section'>
          <img src={Banner} className='mt-4 mb-4' alt='' />
          <button className='update-btn' type='submit'>{lang.account.update}</button>
        </div>
        {showModal1 && <CancelModal1 setShowModal1={setShowModal1} setShowModal2={setShowModal2} />}
        {showModal2 && <CancelModal2 setShowModal2={setShowModal2} setShowDiscountModal={setShowDiscountModal} />}
        {showDiscountModal && <DiscountModal setShowDiscountModal={setShowDiscountModal} />}
      </form>
    </>
  )
}

export default Account
