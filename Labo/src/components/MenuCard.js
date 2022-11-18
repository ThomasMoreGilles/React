import {MenuProduct} from "./MenuProduct";
import PropTypes from "prop-types";
import {Container} from "react-bootstrap";

MenuCard.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}

export function MenuCard(props) {
    const { products } = props;
    if (!products) return;

    return (
        <div>
            <h1>Menu</h1>
            <Container className="p-0">
                {products.map(p => <MenuProduct key={p.name} product={p}/>)}
            </Container>
        </div>
    );
}