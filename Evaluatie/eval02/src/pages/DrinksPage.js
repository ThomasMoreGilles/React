import {Drinks} from "../components/Drinks";
import {Form} from "react-bootstrap";
import {useState} from "react";
import {Order} from "../components/Order";

export function DrinksPage(props) {
    const {drinks} = props;
    const [alcoholic, setAlcoholic] = useState(0);

    return (
        <div className="mx-3">
            <Form>
                <Form.Label>Alcoholische dranken?</Form.Label><br/>
                <Form.Check inline checked={alcoholic === 0} label="geen voorkeur" name="alcohol" type="radio"
                            id="alcohol-1" onChange={() => setAlcoholic(0)}/>
                <Form.Check inline checked={alcoholic === 1} label="neen" name="alcohol" type="radio" id="alcohol-2"
                            onChange={() => setAlcoholic(1)}/>
                <Form.Check inline checked={alcoholic === 2} label="ja" name="alcohol" type="radio" id="alcohol-3"
                            onChange={() => setAlcoholic(2)}/>
            </Form>
            <Drinks
                drinks={drinks.filter(d => alcoholic === 2 ? d.alcoholic === true : alcoholic === 1 ? d.alcoholic !== true : true)}
                title={"Drankenkaart " + (alcoholic === 1 ? "(niet alcoholisch)" : alcoholic === 2 ? "(alcoholisch)" : "")}
                initOpen={true}/>
            <Order title={"Volgende bestelling werd genoteerd:"} initOpen={true} />
        </div>
    );
}
