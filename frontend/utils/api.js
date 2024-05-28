import fetch from "unfetch";

const fetchAPI = async (url, method = "GET", body = null) => {

    const response = await fetch(url, {
        credentials: "include",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: body == null ? undefined : JSON.stringify(body)
    });


    if (response.status !== 200) {
        const messages = response.statusText
        const defaultMessages =
            messages != null ? [messages] : ["An unknown error has occured."];
        if (messages == null) {
            throwAPIError(defaultMessages, response);
        } else if (Array.isArray(messages)) {
            if (messages.length === 0) {
                throwAPIError(defaultMessages, response);
            } else {
                throwAPIError(messages, response);
            }
        } else if (typeof messages == "string") {
            throwAPIError(messages, response);
        } else {
            throwAPIError(Object.values(messages).flat(), response);
        }
    } else {
        const json = await response.json();
        return json;
    }
};



export const getItems = (endpoint, params) => {
    return fetchAPI(endpoint, 'POST', params)
        .then(items => {
            return { items }
        })
        .catch(e => {
            console.log(e.messages);
            return {
                error: e.messages,
                items: []
            }
        });
};
