/* 	De card.jsx component is verantwoordelijk voor het weergeven van de inhoud van een enkel item in de applicatie.
 	Dit kan bijvoorbeeld een product, een trainer of een ander soort item zijn.
 	De component verwacht een aantal props, zoals een afbeelding, een titel en een beschrijving, die gebruikt worden om de inhoud van de kaart weer te geven.
 	De component kan ook optioneel props voor knoppen of links ontvangen die worden weergegeven onderaan de kaart.
 	De uiteindelijke weergave van de kaart is gedaan met HTML en CSS. 	*/

import React from "react";

const Card = ({ className, children }) => {
	return <article className={`card ${className}`}>{children}</article>;
};

export default Card;
