import PropTypes from "prop-types";
import {Section} from "./Section";
import {MyCard} from "./MyCard";
import {Element} from "./Element";
import {MyButton} from "./MyButton";

function Drink(props) {
    const {drink} = props;
    const {bestelling} = {};

    return <MyCard title={drink.name}>
        <h5>{drink.name}</h5>
        <Element name="prijs" value={drink.price}/>
        <Element name="opm" value={drink.note}/>
        <Element name="alcoholisch" value={drink.alcoholic === true ? "JA" : "NEEN"}/>
        <MyButton onClick={() => bestelling.push(drink.name)}> BESTEL </MyButton>
    </MyCard>;
}

export function Drinks(props) {
    const {drinks, title, initOpen} = props

    return <Section title={title} initOpen={initOpen}>
        {drinks.map(d => <Drink key={d.name} drink={d}/>)}
    </Section>;
}

Drinks.propTypes = {
    drinks: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};
