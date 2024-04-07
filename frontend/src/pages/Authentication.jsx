import React from 'react'
import Logo from '../assets/img/logo.png'
import Footer from '../containers/Footer'
import AuthButtonWithProvider from '../components/AuthButtonWithProvider'
import { FaGoogle, FaGithub } from 'react-icons/fa6'


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

                <div className='w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6'>
                    <AuthButtonWithProvider Icon={FaGoogle} label={"Sign in with Google"} provider={"GoogleAuthProvider"} />
                    <AuthButtonWithProvider Icon={FaGithub} label={"Sign in with Github"} provider={"GithubAuthProvider"} />
                </div>

            </div>

            {/* Footer section */}
            <Footer />
        </div>
    )
}

export default Authentication
