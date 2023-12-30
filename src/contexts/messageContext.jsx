import {createContext, useContext} from "react";

const MessageContext = createContext();
export function MessageProvoider() {

}

export const useMessageContext = () => useContext(MessageContext);