import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const BusinessForm = () => {
    return (
        <>
            <div className='box-container mt-4'>
                <div className='add-newsletter-btn'><span><AiOutlinePlus /></span></div>
                <div className='newsletter-overflow'>
                    <h1 className='text-center'>USER INFORMATION - DAILY NEWSLETTER</h1>
                    <table className='mt-4'>
                        <thead>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='remove-newsletter-btn'>
                                    <span><AiOutlineMinus /></span>
                                </td>
                                <td>Brandon</td>
                                <td>Stickler</td>
                                <td>brandon@agresource.com</td>
                            </tr>
                            <tr>
                                <td className='remove-newsletter-btn'>
                                    <span><AiOutlineMinus /></span>
                                </td>
                                <td>Brandon</td>
                                <td>Stickler</td>
                                <td>brandon@agresource.com</td>
                            </tr>
                            <tr>
                                <td className='remove-newsletter-btn'>
                                    <span><AiOutlineMinus /></span>
                                </td>
                                <td>Brandon</td>
                                <td>Stickler</td>
                                <td>brandon@agresource.com</td>
                            </tr>
                            <tr>
                                <td className='remove-newsletter-btn'>
                                    <span><AiOutlineMinus /></span>
                                </td>
                                <td>Brandon</td>
                                <td>Stickler</td>
                                <td>brandon@agresource.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BusinessForm
