
import { updateUser, validateCredentials } from "@api/api";
import Image from "next/image";
import { useEffect, useState } from "react";

function generateUserPineconeLink(appUser) {
    return "https://" + appUser.PineconeIndex + "-" + appUser.PineconeProjectName + ".svc." + appUser.PineconeEnvironment + ".pinecone.io";
}

function validatePineconeLink(link) {
    return /https:\/\/[a-zA-Z0-9]+-[a-zA-Z0-9]+.svc.[a-zA-Z0-9-]+.pinecone.io/.test(link)
}

function getPineconeParts(link) {
    let regex = /https:\/\/([a-zA-Z0-9]+)-([a-zA-Z0-9]+).svc.([a-zA-Z0-9-]+).pinecone.io/
    let result = link.match(regex);
    console.log(result)
    // index, projectname, environment,
    return [result[1], result[2], result[3]];
}

const SettingsModal = ({appUser, setUserCallable, closeCallable}) => {
    const [userOpenAIApiKey, setUserOpenAIApiKey] = useState(appUser.OpenAIApiKey);
    const [userPineconeApiKey, setUserPineconeApiKey] = useState(appUser.PineconeApiKey);
    const [userPineconeLink, setUserPineconeLink] = useState(generateUserPineconeLink(appUser));
    const [valid, setValid] = useState(true);
    const [updated, setUpdated] = useState(false);
    const [copied, setCopied] = useState(false);
    console.log(appUser);
    appUser.TopK = 5

    const setOpenAIApiKey = (event) => {
        setUserOpenAIApiKey(event.target.value);
        appUser.OpenAIApiKey = event.target.value
        setValid(true);
        setUpdated(false);
    }

    const setPineconeApiKey = (event) => {
        setUserPineconeApiKey(event.target.value);
        appUser.PineconeApiKey = event.target.value
        setValid(true);
        setUpdated(false);
    }


    useEffect(() => {
        if(copied){
            setTimeout(() => {
                setCopied(false);
            }, 2000)
        }
    }, [copied])

    const setPineconeLink = (event) => {
        setUserPineconeLink(event.target.value);
        if(validatePineconeLink(event.target.value)){
            let data = getPineconeParts(event.target.value);
            appUser.PineconeIndex = data[0];
            appUser.PineconeProjectName = data[1];
            appUser.PineconeEnvironment = data[2];
            setValid(true);
            return;
        }
        setValid(true);
        setUpdated(false);
    }

    const validateCreds = async () => {
        let statusCode = await validateCredentials(appUser)
        console.log(statusCode);
        if(statusCode == 200){
            setUserPineconeLink(generateUserPineconeLink(appUser));
            setUpdated(true);
            await updateUser(appUser);
            setUserCallable(appUser);
        }else{
            setUpdated(false);
            setValid(false);
        }
    }

    return (
        <div>
            <div className="flex flex-row justify-between mb-5">
                <p className="head_text_6">Settings</p>
                <button onClick={closeCallable}>
                    <Image
                        src={"/assets/icons/x.svg"}
                        alt="Close"
                        width={20}
                        height={20}
                    >
                    </Image>
                </button>
            </div>
            <hr className="" ></hr>
            { !valid &&
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-red-600 dark:text-white">Invalid Credentials</label>
            }
            {updated &&
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-600 dark:text-white">Successfully Updated</label>
            }
            <div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Open AI Api Key</label>
                    <input onChange={setOpenAIApiKey} value={userOpenAIApiKey} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="KsgueKseJ3Kd9" required=""/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pinecone Api Key</label>
                    <input onChange={setPineconeApiKey} value={userPineconeApiKey} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kdfg8JKsdrf78Jur8" required=""/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pinecone Link</label>
                    <input onChange={setPineconeLink} value={userPineconeLink} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kdfg8JKsdrf78Jur8" required=""/>
                </div>
                {valid && 
                <div className = "mt-16">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Token</label>
                    <div className="flex flex-row">
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kdfg8JKsdrf78Jur8" required="">{appUser.Uid}</p>
                        {!copied &&
                            <button onClick={() => {navigator.clipboard.writeText(appUser.Uid); setCopied(true);}} className="bg-gray-50 border hover:bg-gray-300/90  border-gray-300 rounded-lg w-10 flex flex-center">
                                <svg x-show="!copyNotification" class="w-4 h-4 ml-1.5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>                  
                            </button>
                        }
                        {copied &&
                            <button onClick={() => {navigator.clipboard.writeText(appUser.Uid); setCopied(true);}} className="bg-gray-50 border hover:bg-gray-300/90  border-gray-300 rounded-lg w-10 flex flex-center">
                                <svg x-show="copyNotification" class="w-6 h-6 ml-1.5 text-green-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" x-cloak><path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" /></svg>
                            </button>
                        }
                    </div>
                </div>
                }
            </div>
            <div className="flex items-end mt-7">
                <div className="ml-[83%]">
                    <button onClick={validateCreds} className="black_btn_same px-10 self-end">
                        Update
                    </button>
                </div>
            </div>
        </div>

    );
}

export default SettingsModal;