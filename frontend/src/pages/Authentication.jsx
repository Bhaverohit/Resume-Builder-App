import React from 'react'
import { Logo } from '../assets'
import { Footer } from '../containers/Index'

const Authentication = () => {
    return (
        <div className='auth-section'>
            {/* Top section */}
            <img src={Logo} alt="book logo" className='w-12 h-auto object-contain' />

            {/* Main section */}
            <div className='w-full flex flex-1 flex-col items-center justify-center gap-6'>
                <h1 className='text-3xl lg:text-4xl text-blue-700 font-bold'>Welcome To The ProResume</h1>
                <p className='text-base text-gray-600'>A pro way to create resume</p>
                <h2 className='text-2xl text-gray-600'>Authenticate</h2>
                <div></div>
            </div>

            {/* Footer section */}
            <Footer />
        </div>
    )
}

export default Authentication
