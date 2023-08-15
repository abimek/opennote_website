async function default_post(data, path, json, statuscode = false) {
    try {
        var endpoint = "https://opennote-production.up.railway.app/" + path
        const response = await fetch(endpoint, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            body: JSON.stringify(data)
        });
        if(statuscode && json){
            return [response.status, response];
        }
        if(statuscode){
            return response.status;
        }
        if(json) {
            return await response.json();
        }

    } catch {

    }
}

export async function sendMessage(uid, message) {
    let resp = await default_post({uid: uid, chat: message}, "message", true, true);
    if(resp[0] == 200){
        resp[1] = await resp[1].text()
    }else{
        resp[1] = await resp[1].json()
    }
    return resp;
}

export async function createEmptyUser(uids) {
    return await default_post({uid: uids}, "api/createEmptyUser");
}

export async function getUser(uid) {
    return await default_post({uid: uid}, "api/getUser", true);
}

export async function updateUser(user) {
    return await default_post(user, "api/updateUser", true);
}

export async function validateCredentials(user) {
    return await default_post(user, "api/validateCredentials", false, true);
}