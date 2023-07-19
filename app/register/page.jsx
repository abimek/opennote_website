'use client'
import firebase_app from '@config';
import {signInWithPopup ,GoogleAuthProvider, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Image from "next/image";
import Link from "next/link";
import {useAuthState, useSignInWithGoogle} from "react-firebase-hooks/auth";
import {useRouter} from "next/navigation"
import { useState } from 'react';

const auth = getAuth(firebase_app);

const Register = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [passMatch, setPassMatch] = useState(true);

    const signUpWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const signUpWithEmailPassword = () => {
        if (password !== confirmPassword) {
            setPassMatch(false);
            return
        }
        if(password.length < 8){
            setError(["password", "Password must be atleast 8 charachters long"])
            return
        }
        createUserWithEmailAndPassword(auth, email, password).catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
        })
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setError(null);
        setPassMatch(true);
    }

    const changeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        setError(null);
        setPassMatch(true);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
        setError(null);
        setPassMatch(true);
    }

    return (
        <section className="app">
            {user 
            ? router.push("/chat")
            : <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="orange_gradient flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    OpenNote
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-amber-700/50 shadow-lg">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input required type="email" onChange={changeEmail} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            {passMatch
                                ? <input required minLength="8" type="password" onChange={changePassword} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                : <input required minLength="8" type="password" onChange={changePassword} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-red-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            }
                            {error !== null && error[0] == "password" &&
                             <label for="confirm-password" className="block mb-2 text-sm font-medium text-red-900 dark:text-white">{error[1]}</label>

                            }
                        </div>
                        <div>
                            <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            {passMatch
                                ? <input required minLength="8" type="password" onChange={changeConfirmPassword} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                : <input required minLength="8" type="password" onChange={changeConfirmPassword} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-red-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            }
                            {passMatch == false &&
                                <label for="confirm-password" className="block mb-2 text-sm font-medium text-red-900 dark:text-white">Mismatching passwords</label>
                            }
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" onClick={signUpWithEmailPassword} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                        <button type="submit" onClick={signUpWithGoogle} className="flex flex-row border w-full border-gray-600 text-black hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Image
                                src={"/assets/images/google.svg"}
                                alt="Photo of person"
                                width={20}
                                height={20}
                            >
                            </Image>
                            <p className="pl-4">
                                Register with Google
                            </p>
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex flex-row flex-between">
                            Already have an account? 
                            <Link href="/login">
                                <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</p>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            }
        </section>
    );
}

export default Register