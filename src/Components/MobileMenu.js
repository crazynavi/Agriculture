import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import { IoHome } from 'react-icons/io5'
import { BsCreditCard2Front } from 'react-icons/bs'
import { RiErrorWarningLine } from 'react-icons/ri'
import { SiDatabricks } from 'react-icons/si'
import {
    AiFillCaretDown,
} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isMenuShow, setMenuShow] = useState(false)

    return (
        <>
            <div className='mobile-menu'>
                <div className='menu'>
                    <FaBars onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }} />
                </div>
                <div className='logo'>
                    {/* <div className='logo'> */}
                    <img src={Logo} alt='logo' />
                    {/* </div> */}
                </div>
                <div className='avatar'>
                    <img src='https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png' alt='' />
                </div>
            </div>
            {isMenuShow && <div className='navbar mobile-nav'>
                <NavLink end className='nav-item' to={'/'} onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }}>
                    <IoHome />
                    <span className='ms-2'>HOME</span>
                </NavLink>
                <div className='nav-item' onClick={() => setMenuOpen(!isMenuOpen)}>
                    <SiDatabricks />
                    <span className='ms-2'>REPORTS</span>
                    <AiFillCaretDown className='ms-2' />
                </div>
                {isMenuOpen && <div className='sub-menu'>
                    <NavLink to={'/report-daily'} onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }}>Daily Newsletter</NavLink>
                    <NavLink to={'/report-weekly'} onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }}>Weekly Newsletter</NavLink>
                    <NavLink to={'/report-plus'} onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }}>Plus+ Report</NavLink>
                    <NavLink to={'/report-4'} onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }}>LATAM Newsletter</NavLink>
                    <NavLink to={'/report-5'} onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }}>Climate Impact</NavLink>
                </div>}
                <NavLink className='nav-item' to={'/my-account'} onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }}>
                    <BsCreditCard2Front />
                    <span className='ms-2'>MY ACCOUNT</span>
                </NavLink>
                <NavLink className='nav-item' to={'/privacy'} onClick={() => {
                        setMenuShow(!isMenuShow)
                        setMenuOpen(false)
                    }}>
                    <RiErrorWarningLine />
                    <span className='ms-2'>PRIVACY POLICY</span>
                </NavLink>
            </div>}
        </>
    )
}

export default MobileMenu
