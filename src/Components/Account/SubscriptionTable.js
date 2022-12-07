import React from 'react'
import Sub1 from '../../assets/subscription-1.png'
import Sub2 from '../../assets/subscription-2.png'
import Sub3 from '../../assets/subscription-3.png'
import Sub4 from '../../assets/subscription-4.png'
import Sub5 from '../../assets/subscription-5.png'

const SubscriptionTable = ({ setShowModal1 }) => {
    return (
        <>
            <div className='box-container subscription mt-4'>
                <table className='subscription-table mt-5'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Subscription Type </th>
                            <th>Status</th>
                            <th>Start</th>
                            <th>Period Start</th>
                            <th>Period End</th>
                            <th>Users</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={Sub1} alt='' /></td>
                            <td><h1>DAILY</h1></td>
                            <td>Paid</td>
                            <td>08/10/21</td>
                            <td>08/10/21</td>
                            <td>08/10/21</td>
                            <td>4</td>
                            <td><button className='cancel-btn' onClick={() => setShowModal1(true)}>CANCEL</button></td>
                        </tr>
                        <tr>
                            <td><img src={Sub2} alt='' /></td>
                            <td><h1>WEEKLY</h1></td>
                            <td>None</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>0</td>
                            <td><button className='success-btn'>SUBSCRIBE</button></td>
                        </tr>
                        <tr>
                            <td><img src={Sub3} alt='' /></td>
                            <td><h1>PLUS+</h1></td>
                            <td>None</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>0</td>
                            <td><button className='success-btn'>SUBSCRIBE</button></td>
                        </tr>
                        <tr>
                            <td><img src={Sub4} alt='' /></td>
                            <td><h1>LATAM</h1></td>
                            <td>None</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>0</td>
                            <td><button className='success-btn'>SUBSCRIBE</button></td>
                        </tr>
                        <tr>
                            <td><img src={Sub5} alt='' /></td>
                            <td><h1>CLIMATE<br /> IMPACT</h1></td>
                            <td>None</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>0</td>
                            <td><button className='success-btn'>SUBSCRIBE</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='box-container subscriptions mt-4'>
                <p className='mt-2'>Daily Newsletter (Annual)</p>
                <table>
                    <tbody>
                        <tr>
                            <td>1 User</td>
                            <td>$715.00</td>
                        </tr>
                        <tr>
                            <td>2 - 5 Users</td>
                            <td>$600.00 / each</td>
                        </tr>
                    </tbody>
                </table>
                <div className='subscription-total mt-5'>
                    <h1>TOTAL <span>$2,515.00</span></h1>
                </div>
            </div>
        </>
    )
}

export default SubscriptionTable
