import {MyCard} from "./MyCard";
import {Element} from "./Element";
import {Section} from "./Section";
import PropTypes from "prop-types";
import {MyButton} from "./MyButton";
import {MdDelete, MdEdit} from "react-icons/md";
import {PersonAvatar} from "./PersonAvatar";

function Person(props) {
    const { person, showButtons, onDelete, onEdit } = props;

    return <MyCard title={person.name}>
        <h5>{person.name}</h5>
        <div><PersonAvatar person={person} /></div>
        <Element value={person.age} />
        <Element value={person.city} />
        {showButtons && <>
            <hr />
            <div>
                <MyButton variant="outline-primary" onClick={() => onDelete(person)}><MdDelete/></MyButton>
                <MyButton variant="outline-primary" onClick={() => onEdit(person)}><MdEdit/></MyButton>
            </div>
        </>}
    </MyCard>;
}

export function Persons(props) {
    const {persons, title, initOpen, showButtons, onDelete, onEdit} = props
    if (!persons) return;

    return <Section title={title} initOpen={initOpen}>
        {persons.map(p => <Person key={p.id} person={p} showButtons={showButtons}
                    onDelete={onDelete} onEdit={onEdit}/>)}
    </Section>;
}

Persons.propTypes = {
    persons: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};