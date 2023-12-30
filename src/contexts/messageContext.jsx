import {createContext, useCallback, useContext, useState} from "react";

const MessageContext = createContext();
export function MessageProvoider() {
    const [message, setMessage] = useState("");

    const clearMessage = useCallback(() => {
        setMessage("");
    }, [message]);
}

export const useMessageContext = () => useContext(MessageContext);