import React from 'react'

import logo from '../logo192.png';
// import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <div className='shadow-md w-full  top-0 left-0'>
            <div className='md:flex items-center justify-between bg-black py-2 md:px-10 px-7'>
                <div className='font-bold text-1xl cursor-pointer flex items-center  text-slate-300'>
                    <span className='text-2xl text-purple-900 text-opacity-70 mr-1 pt-2 mr-3'>
                        <img alt="logo" src={logo} width={35} />
                    </span>
                    Sample Page

                </div>

            </div>
        </div>
    )
}

export default Header