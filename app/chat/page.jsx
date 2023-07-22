'use client'
import { createEmptyUser, getUser, validateCredentials } from "@api/api";
import SettingsModal from "@components/SettingsModal";
import Sidebard from "@components/Sidebard";
import firebase_app from "@config";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactModal from "react-modal";

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
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const [user] = useAuthState(auth);
    const [appUser, setAppUser] = useState(null);
    const [appUserUpdated, setAppUserUpdated] = useState(false);
    const router = useRouter();

    async function onRequestCloseSettings() {
        if(anyFieldsEmpty(appUser)){
            return
        }
        let statusCode = await validateCredentials(appUser)
        if(statusCode == 200){
            setIsOpenSettings(false);
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
            if(statusCode !== 200){
                setIsOpenSettings(true);
            }
            setAppUser(data);
            setAppUserUpdated(true);
        }
        fetchData();
    }, [user]);

    function toggleSettings() {
        setIsOpenSettings(!isOpenSettings);
    }

    return (
        <div className="flex justify-start flex-row content-start">
            <Sidebard />
            {appUser !== null &&
                <div className="mt-24 flex self-start"> 
                    <button className="black_btn_same" onClick={toggleSettings}>Open Modal</button>
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
                    <button className="black_btn_same" onClick={toggleSettings}>Open Modal</button>
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
        width: "50%",
        height: "64%",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

export default Chat;