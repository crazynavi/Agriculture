import React, { useState, useEffect, useRef } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import Banner from '../assets/form-banner.jpg'
import BusinessForm from '../Components/Account/BusinessForm';
import CancelModal1 from '../Components/Account/CancelModal1';
import CancelModal2 from '../Components/Account/CancelModal2';
import DiscountModal from '../Components/Account/DiscountModal';
import PaymentForm from '../Components/Account/PaymentForm';
import PersonalForm from '../Components/Account/PersonalForm';
import SubscriptionTable from '../Components/Account/SubscriptionTable';
// function useForceUpdate(){
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => value + 1); // update state to force render
// }

const Account = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  const [tab, setTab] = useState('personal')
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showDiscountModal, setShowDiscountModal] = useState(false)
  // const validator = new SimpleReactValidator(
  //   {element: message => <div>{message}</div>}
  // );
  // const forceUpdate = useForceUpdate();
  useEffect(() => {
    // validator.purgeFields();
    console.log("aaaa");
    return () => {
    }
  }, [value])
  const handleSubmit = () =>{
    // if (validator.allValid()) {
    //   alert('updated successfully');
    // } else {
    //   validator.showMessages();
    //   console.log("ddddd");
    //   // rerender to show messages for the first time
    //   // you can use the autoForceUpdate option to do this automatically`
    //   setValue(value=>value+1);
    // }
  }
  return (
    <>
      <div className='top-tabs'>
        <div onClick={() => setTab('personal')} className={tab === 'personal' ? 'active': ''}>PERSONAL</div>
        <div onClick={() => setTab('business')} className={tab === 'business' ? 'active': ''}>BUSINESS</div>
        <div onClick={() => setTab('subscriptions')} className={tab === 'subscriptions' ? 'active': ''}>SUBSCRIPTIONS</div>
        <div onClick={() => setTab('payment')} className={tab === 'payment' ? 'active': ''}>PAYMENT</div>
      </div>
      <form className='form-container d-flex justify-content-between'>
        <div className='form-section'>
          {tab === 'personal' && <PersonalForm  />}
          {tab === 'business' && <BusinessForm  />}
          {tab === 'subscriptions' && <SubscriptionTable setShowModal1={setShowModal1} />}
          {tab === 'payment' && <PaymentForm  /> }
        </div>
        <div className='banner-section'>
          <img src={Banner} className='mt-4' alt='' />
          <button className='update-btn' type='submit'>UPDATE</button>
        </div>
        {showModal1 && <CancelModal1 setShowModal1={setShowModal1} setShowModal2={setShowModal2} />}
        {showModal2 && <CancelModal2 setShowModal2={setShowModal2} setShowDiscountModal={setShowDiscountModal} />}
        {showDiscountModal && <DiscountModal setShowDiscountModal={setShowDiscountModal} />}
      </form>
    </>
  )
}

export default Account
