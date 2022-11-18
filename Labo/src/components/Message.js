import {useMessageContext} from "../contexts/messageContext";
import {Toast, ToastContainer} from "react-bootstrap";

export function Message(props) {
    const { messages, clearMessages } = useMessageContext();
    if (!messages || messages.length===0) return;

    let showMessage = "";
    messages.forEach(m => showMessage += m);

    return <ToastContainer position="top-end" className="position-fixed" style={{zIndex: 2000}} >
        <Toast onClose={clearMessages}>
            <Toast.Header>
                showMessage
            </Toast.Header>
            <Toast.Body>{messages}</Toast.Body>
        </Toast>
    </ToastContainer>
}