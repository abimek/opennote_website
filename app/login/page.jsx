'use client'
import firebase_app from '@config';
import {signInWithPopup ,GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Image from "next/image";
import Link from "next/link";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/navigation"
import { useState } from 'react';


const auth = getAuth(firebase_app);

const Login = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const signInWithPassword = () => {
        console.log("It Ran atleast");
        console.log(email);
        console.log(password);
        console.log(error);
        signInWithEmailAndPassword(auth, email, password).catch((error) => {
            var errorCode = error.code;
            setError(null);
            if (errorCode == "auth/wrong-password") {
                setError(error);
            }
            if (errorCode == "auth/user-not-found") {
                console.log("HEE");
                setError(error);
            }
        })
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    return (
        <section className="app">
                { user
                ? router.push('/chat')
                : <div>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-amber-700/50 shadow-lg">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="orange_gradient text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    OpenNote AI
                                </h1>
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account 
                                </h1>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    { error !== null && error.code == "auth/user-not-found"
                                    ? <div>
                                        <input onChange={changeEmail} type="email" name="email" id="email" className="bg-gray-50 border border-red-600 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@thething.com" required=""/>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-red-300 dark:text-white">User does not exist</label>
                                    </div>
                                    : <input onChange={changeEmail} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@thething.com" required=""/>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    { error !== null && error.code == "auth/wrong-password"
                                    ? <div>
                                        <input onChange={changePassword} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-red-600 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-red-300 dark:text-white">Incorrect Password</label>
                                    </div>
                                    :  <input onChange={changePassword} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                    }
                                </div>
                                <div>
                                    <button type="submit" onClick={signInWithGoogle} className="flex flex-row border w-full border-gray-600 text-black hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <Image
                                            src={"/assets/images/google.svg"}
                                            alt="Photo of person"
                                            width={20}
                                            height={20}
                                        >
                                        </Image>
                                        <p className="pl-4">
                                            Sign in with Google
                                        </p>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" onClick={signInWithPassword} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                                <div className="flex flex-row flex-between text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? 
                                    <Link href="/register">
                                        <p className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </section>
    );
}


export default Login 