import PropTypes from "prop-types";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

function Number(props) {
    const {nr, onSelectNumber, favoriteNumber} = props;
    return <MyCard onSelect={onSelectNumber && (() => onSelectNumber(nr))}
                   extraClass={favoriteNumber===nr ? "bg-warning" : ""}>
        {nr}
    </MyCard>;
}

export function Numbers(props) {
    const {numbers, title, initOpen, onSelectNumber, favoriteNumber} = props
    return <Section title={title} initOpen={initOpen}>
        {numbers.map((n, i) =>
            <Number key={i} nr={n} onSelectNumber={onSelectNumber}
                    favoriteNumber={favoriteNumber}/>)}
    </Section>;
}

Numbers.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number),
    title: PropTypes.string
};