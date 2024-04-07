import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '../config/firebase.config';

const AuthButtonWithProvider = ({ Icon, label, provider }) => {

    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const handleClick = async () => {
        switch (provider) {
            case "GoogleAuthProvider":
                await signInWithRedirect(auth, googleAuthProvider)
                    .then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        console.log(err);
                    });
                break;

            case "GithubAuthProvider":
                await signInWithRedirect(auth, githubAuthProvider);
                break;

            default:
                console.log("Google Auth provider");
                break;
        }
    }

    return (
        <div onClick={handleClick} className='w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md'>
            <Icon className="text-textPrimary text-xl group-hover:text-white" />
            <p className="text-textPrimary text-lg group-hover:text-white">{label}</p>
            <FaChevronRight className="text-textPrimary text-base group-hover:text-white" />
        </div>
    )
}

export default AuthButtonWithProvider
