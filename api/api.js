async function default_post(data, path, json, statuscode = false) {
    try {
        var endpoint = "http://localhost:3323/" + path
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
        if(statuscode){
            return response.status;
        }
        if(json) {
            return response.json();
        }

    } catch {

    }
}

export async function message(uid, message) {
    return await default_post({uid: uid, message: message}, "message", true);
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