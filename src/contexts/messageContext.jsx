"use client"
import {createContext, useCallback, useContext, useMemo, useState} from "react";

const MessageContext = createContext();

export function MessageProvoider(props) {
    const [message, setMessage] = useState("");

    const clearMessage = useCallback(() => {
        setMessage("");
    }, [message]);

    const api = useMemo(() => ({
        message, setMessage, clearMessage
    }), [message, setMessage, clearMessage]);

    return <MessageContext.Provider value={api}>
        {props.children}
    </MessageContext.Provider>
}

export const useMessageContext = () => useContext(MessageContext);