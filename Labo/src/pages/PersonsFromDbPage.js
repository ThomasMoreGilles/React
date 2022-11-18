import {Persons} from "../components/Persons";
import {Form} from "react-bootstrap";
import {useState} from "react";
import {MyButton} from "../components/MyButton";
import {PersonFormEdit} from "../components/PersonFormEdit";
import {MdEdit, MdEditOff} from "react-icons/md";
import {usePersonsFromDbContext} from "../contexts/personsFromDbContext";

export function PersonsFromDbPage() {
    const { persons, deleteDummies, addDummyPerson,
        incrementAllAges, decrementAllAges,
        deletePerson, savePerson } = usePersonsFromDbContext();
    const [ search, setSearch ] = useState("");
    const [ personSelected, setPersonSelected ] = useState();
    const [ editMode, setEditMode ] = useState(false);

    const editPerson = (person) => {
        console.log(person.name);
        setPersonSelected(person);
    }

    return <div className="mx-3" >
        <Form>
            <Form.Label>search:</Form.Label>
            <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} />
        </Form>
        <div className="d-flex justify-content-between">
            <div>
                {editMode && <div>
                    <MyButton onClick={addDummyPerson}>+dummy</MyButton>
                    <MyButton onClick={incrementAllAges}>age+1</MyButton>
                    <MyButton onClick={decrementAllAges}>age-1</MyButton>
                    <MyButton onClick={deleteDummies}>delete all dummies</MyButton>
                </div>}
            </div>
            <div className="float-end me-1">
                <MyButton onClick={() => setEditMode(!editMode)}>
                    {editMode ? <MdEditOff /> : <MdEdit />}
                </MyButton>
            </div>
        </div>
        {personSelected &&
            <div style={{backgroundColor: "orange"}}>EDIT PERSON {personSelected.name}</div>}
        <Persons persons={persons && persons.filter(p =>
            p.name?.toLowerCase().includes(search.toLowerCase()) ||
            p.city?.toLowerCase().includes(search.toLowerCase()))}
                 title="Persons From DB" initOpen={true}
                 showButtons={editMode} onDelete={deletePerson} onEdit={editPerson}
        />
        <PersonFormEdit personSelected={personSelected}
                        setPersonSelected={setPersonSelected}
                        onSave={savePerson}/>
    </div>
}