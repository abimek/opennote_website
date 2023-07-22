
import { updateUser, validateCredentials } from "@api/api";
import Image from "next/image";
import { useState } from "react";

const SettingsModal = ({appUser, setUserCallable, closeCallable}) => {
    const [userOpenAIApiKey, setUserOpenAIApiKey] = useState(appUser.OpenAIApiKey);
    const [userPineconeApiKey, setUserPineconeApiKey] = useState(appUser.PineconeApiKey);
    const [userPineconeIndex, setUserPineconeIndex] = useState(appUser.PineconeIndex);
    const [userPineconeEnvironment, setUserPineconeEnvironment] = useState(appUser.PineconeEnvironment);
    const [userPineconeProjectName, setUserPineconeProjectName] = useState(appUser.PineconeProjectName);

    const [valid, setValid] = useState(true);
    const [updated, setUpdated] = useState(false);
    console.log(appUser);
    appUser.TopK = 5

    const setOpenAIApiKey = (event) => {
        setUserOpenAIApiKey(event.target.value);
        appUser.OpenAiApiKey = event.target.value
        setValid(true);
        setUpdated(false);
    }

    const setPineconeApiKey = (event) => {
        setUserPineconeApiKey(event.target.value);
        appUser.PineconeApiKey = event.target.value
        setValid(true);
        setUpdated(false);
    }

    const setPineconeIndex = (event) => {
        setUserPineconeIndex(event.target.value);
        appUser.PineconeIndex = event.target.value
        setValid(true);
        setUpdated(false);
    }

    const setPineconeEnvironment = (event) => {
        setUserPineconeEnvironment(event.target.value);
        appUser.PineconeEnvironment = event.target.value
        setValid(true);
        setUpdated(false);
    }

    const setPineconeProjectName = (event) => {
        setUserPineconeProjectName(event.target.value);
        appUser.PineconeProjectName = event.target.value
        setValid(true);
        setUpdated(false);
    }

    const validateCreds = async () => {
        let statusCode = await validateCredentials(appUser)
        console.log(statusCode);
        if(statusCode == 200){
            setUpdated(true);
            await updateUser(appUser);
            setUserCallable(appUser);
        }else{
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
                <div className="flex flex-row gap-8 mt-5">
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pinecone Index Name</label>
                        <input onChange={setPineconeIndex} value={userPineconeIndex} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pinecone Index Name" required=""/>
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pinecone Environment Name</label>
                        <input onChange={setPineconeEnvironment} value={userPineconeEnvironment} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pinecone Environment Name" required=""/>
                    </div>
                </div>
                <div className="flex flex-row gap-8 mt-5">
                    <div className="w-[50%]">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pinecone Project Name</label>
                        <input onChange={setPineconeProjectName} value={userPineconeProjectName} type="email" name="email" id="email" className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-red-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="SomeVal" required=""/>
                    </div>
                </div>
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