'use client';
import { createEmptyUser, getUser, validateCredentials, sendMessage } from "@api/api";
import SettingsModal from "@components/SettingsModal";
import Sidebard from "@components/Sidebard";
import ChatPortion from "@ChatPortion";
import firebase_app from "@config";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactModal from "react-modal";
import { fetchEventSource } from "@microsoft/fetch-event-source";

const anyFieldsEmpty = (user) => {


    console.log(user);
    for (var prop in user) {
        console.log(prop)
        console.log(user[prop])
        if(user[prop] == "") {
            return true;
        }
    }
    return false;
}

const auth = getAuth(firebase_app);

const Chat = () => {
    const bottomEl = useRef(null);
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const [user] = useAuthState(auth);
    const [appUser, setAppUser] = useState(null);
    const [appUserUpdated, setAppUserUpdated] = useState(false);
    const router = useRouter();
    const [messages, setMessages] = useState([]);
    const [waiting, setWaiting] = useState(false);
    const [input, setInput] = useState("");
    const [messageAdd, setMessageAdd] = useState(null);
    const [usingNotes, setUsingNotes] = useState(false);
    let [currentMessage, setCurrentMessage] = useState([]);

    const scrollToBottom = () => {
        bottomEl?.current?.scrollIntoView({behavior: 'smooth'});
    }

    const changeInput = (event) => {
        setInput(event.target.value);
    }

    function toggleNotes() {
        setUsingNotes(!usingNotes);
    }

    useEffect(() => {
        if(messageAdd == null) {
            return;
        }
        console.log("WA")
        let cl = input;
        let inp = input;
        setInput("")
        setWaiting(true);
        setMessages(messages => [...messages, cl]);
        setCurrentMessage([])
        currentMessage = []
        const fetchData = async () => {
            let msg = [];
            if (usingNotes) {
                console.log("USING NOTES")
                inp += " [Admin Message: Use The Users Notes TO Answer, Send Direct Quotations of The Relevant Notes Near The Bottom]"
            }
            await fetchEventSource(messageAdd, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Accept": "text/event-stream",
                    "ChatData": JSON.stringify({uid: user.uid, chat: inp})
                },
                onopen(res) {
                    if(res.ok && res.status === 200){
                        console.log("Connection Made", res)
                    }
                },
                onerror(err) {
                    setMessages(messages => [...messages, "Failed to get chat"])
                },
                onmessage(e) {
                    msg = [...msg, e.data];
                    setCurrentMessage(currentMessage => [...currentMessage, e.data]);
                    scrollToBottom()
                },
                onclose() {
                    if(currentMessage != null){
                        setMessages(messages => [...messages, msg.join(" ").replaceAll(" ,", ",").replaceAll(" .", "").replaceAll(" '", "'")])
                    }
                    setCurrentMessage(null);
                    setMessageAdd(null);
                    setWaiting(false);
                }
            })

        }
        fetchData();
    }, [messageAdd])

    let showMessages = messages
    if(currentMessage != null){
        showMessages = [...messages, currentMessage.join(" ").replaceAll(" ,", ",").replaceAll(" .", ".").replaceAll(" '", "'")]
    }

    async function onRequestCloseSettings() {
        if(!isOpenSettings){
            return
        }
        console.log("Intresting")
        console.log(appUser)
        if(anyFieldsEmpty(appUser)){
            console.log("RETURNED")
            return
        }
        setIsOpenSettings(false)
        let statusCode = await validateCredentials(appUser)
        if(statusCode !== 200){
            setIsOpenSettings(true);
        }
    }

    async function onRequestToggleSettings() {
        if(isOpenSettings == false){
            setIsOpenSettings(true);
        }else {
            onRequestCloseSettings()
        }
    }

    useEffect(() => {
        if(user == null){
            return;
        }
        if(appUserUpdated){
            return;
        }
        const fetchData = async () => {
            const uid = user.uid;
            await createEmptyUser(uid);
            var data = await getUser(uid);
            if(data.hasOwnProperty("errorCode")){
                router.push("/");
            }
            if(anyFieldsEmpty(data)){
                setIsOpenSettings(true);
            }
            let statusCode = await validateCredentials(appUser)
            if(statusCode != 200){
                setIsOpenSettings(true);
            }
            setAppUser(data);
            setAppUserUpdated(true);
        }
        fetchData();
    }, [user]);

    function toggleSettings() {
        console.log('TOGG')
        setIsOpenSettings(!isOpenSettings);
    }

    function handleSubmit(e) {
        if(e.key === "Enter"){
            transmitMessage()
        }
    }

    async function transmitMessage() {
        if(waiting || input == ""){
            return;
        }
        setMessageAdd("https://opennote-production.up.railway.app/messager");
        return;
    }

    return (
        <div className="flex justify-start flex-row content-start w-full">
            <Sidebard toggleSettings={onRequestToggleSettings} closeSettings={onRequestCloseSettings}/>
            {appUser !== null &&
            <div className="relative w-full mr-8">
                <div className="mt-24 flex items-end self-start w-full h-[80%]"> 
                    <ReactModal
                        isOpen={isOpenSettings}
                        style={formStyle}
                        onRequestClose={() => onRequestCloseSettings()}
                    >
                        <SettingsModal 
                            appUser={appUser}
                            setUserCallable={setAppUser}
                            closeCallable={onRequestCloseSettings}
                        />
                    </ReactModal>
                    <div className="w-full flex flex-col h-full">
                        <div className="h-[78vh] no-scrollbar overflow-y-auto rounded-lg ">
                            {showMessages.map((message, index) => {
                                if(index%2==0){
                                    return (
                                        <ChatPortion chatType="user" message={message} photoUrl={user.photoURL} />
                                    )
                                }else{
                                    return (
                                        <ChatPortion chatType="ai" message={message} photoUrl={null}/>
                                    )
                                }
                            })
                            }
                            <div className="w-[80%]" ref={bottomEl}/>
                        </div>
                        <div>
                            <label class="inline-flex right-0 mr-[50%] flex flex-center fixed items-center bottom-0 md:mb-24 mb-16 mt-auto cursor-pointer">
                                <input type="checkbox" onClick={toggleNotes} value="true" class="sr-only peer"/>
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Use Notes</span>
                            </label>
                        </div>
                        <div className="flex flex-col fixed bottom-0 items-center md:mr-20 md:mb-10 mb-4 w-[70vw] ">
                            <div className="relative w-full md:w-[50%] mt-auto align-bottom md:ml-20 md:mr-0 mr-16 shadow-lg">
                                <input value={input} onKeyPress={e => handleSubmit(e)} onChange={changeInput} id="search-dropdown" className="block p-2.5 z-20 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-100 border-l-2 border border-gray-300 " placeholder="Send a Chat"/>
                                {waiting || input == "" &&
                                    <button type="submit" onClick={transmitMessage} className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-gray-700 rounded-r-lg border border-gray-700 hover:bg-gray-800">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    </button>
                                }
                                {!waiting && input != "" &&
                                    <button type="submit" onClick={transmitMessage} className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            }
        </div>
    );
}

const formStyle = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
        width: "80%",
        height: "62%",
        top: '50%',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

export default Chat;