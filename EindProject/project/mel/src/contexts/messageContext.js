import {createContext, useCallback, useContext, useMemo, useState} from "react";

const MessageContext = createContext();

export function MessageProvider(props) {
    const [messages, setMessages] = useState([]);
    console.log(messages)

    const clearMessages = useCallback(() => setMessages([]), [setMessages]);

    const addMessage = useCallback((message) => {
        setMessages([...messages, message])
        }
        , [setMessages]);

    const api = useMemo(() => ({
        messages, setMessages, clearMessages, addMessage
    }), [messages, setMessages, clearMessages, addMessage]);

    return <MessageContext.Provider value={api}>
        {props.children}
    </MessageContext.Provider>
}

export const useMessageContext = () => useContext(MessageContext);