import {Button, Form, Modal} from "react-bootstrap";
import {PersonAvatar} from "./PersonAvatar";

export function PersonFormEdit(props) {
    const { personSelected, setPersonSelected, onSave } = props;
    if (!personSelected) return;

    const close = () => {
        setPersonSelected();
    }

    const save = (person) => {
        const success = onSave(personSelected);
        if (success) setPersonSelected();
    }

    return <Modal show={personSelected!==undefined} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title>
                <PersonAvatar person={personSelected} />
                <span className="ms-2">Update person</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Label>Name:</Form.Label>
                <Form.Control value={personSelected.name}
                              onChange={(e) => setPersonSelected({...personSelected, name: e.target.value})} />
                <Form.Label>Age:</Form.Label>
                <Form.Control type="number" value={personSelected.age || ""}
                              onChange={(e) => setPersonSelected({...personSelected, age: parseInt(e.target.value)})} />
                <Form.Label>City:</Form.Label>
                <Form.Control value={personSelected.city}
                              onChange={(e) => setPersonSelected({...personSelected, city: e.target.value})} />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={close}>
                Cancel
            </Button>
            <Button variant="primary" onClick={save}>
                Save Person
            </Button>
        </Modal.Footer>
    </Modal>
}