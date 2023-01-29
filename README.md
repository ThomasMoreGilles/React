# Eindopdracht React App
Dit is een React app waarmee gebruikers lid kunnen worden van een fitnesscentrum. Gebruikers kunnen lidmaatschapsplannen bekijken, trainingsschema's bekijken en persoonlijke trainers ontmoeten.

## Functies
- Bekijk beschikbare lidmaatschapsplannen en hun prijzen.
- Bekijk de trainingsschema's van de week.
- Bekijk informatie over persoonlijke trainers, zoals hun naam, baan en sociale media-links.

## Technologieën
- React
- CSS
- JavaScript

## Aan de slag
Om de app te starten, moet u eerst de vereiste modules installeren door het uitvoeren van de volgende opdracht in de terminal:

``
npm i
``

Daarna kunt u de app starten met de volgende opdracht:

``
npm start
``

De app zou nu moeten worden geopend in uw browser op http://localhost:3000/

## Bestandenstructuur
De belangrijkste bestanden en mappen in deze app zijn:

- src/: Hier bevinden zich alle bronbestanden voor de app, zoals React-componenten, afbeeldingen en stijlen.
- src/App.js: Dit is de hoofdcomponent van de app waarmee de navigatie wordt geconfigureerd.
- src/pages/: Hier bevinden zich de pagina-specifieke componenten die worden gebruikt in de app, zoals de Home, Plans en Trainers pagina's.
- src/components/: Hier bevinden zich alle React-componenten die worden gebruikt in de app, zoals de Header, Card en Trainer componenten.
- src/images/: Hier bevinden zich alle afbeeldingen die worden gebruikt in de app.
- src/data/: Hier bevinden zich de gegevensbestanden die worden gebruikt in de app, zoals informatie over lidmaatschapsplannen en persoonlijke trainers.

## Componenten
De componenten in deze React applicatie zijn onderverdeeld in verschillende categorieën:

- Header component: Dit component wordt gebruikt om de header van de pagina weer te geven, inclusief een achtergrondafbeelding en een titel. Het component accepteert twee props: image en title.
- Trainers component: Dit component toont de informatie over de trainers van de sportschool. Het component maakt gebruik van de Trainer component en de data van de trainers in de data.js file.
- Trainer component: Dit component toont de informatie van een specifieke trainer, inclusief een foto, naam, baan en social media links. Het component accepteert vier props: image, name, job en socials.
- Socials component: Dit component toont de social media links van een trainer. Het component accepteert een prop genaamd socials, die een lijst is van objecten met de properties icon en link.
- Footer component: Dit component toont een standaard footer voor de pagina met informatie over de auteur en links naar de social media accounts.
- data.js file: Dit bestand bevat de data voor de trainers, inclusief hun ID, afbeelding, naam, baan en social media links.
- index.js: Dit bestand is de ingangspunt van de applicatie en bevat de configuratie voor de React Router en het renderen van de componenten op de juiste URL's.
- App.js: Dit bestand bevat de logische structuur van de applicatie, waar de routes van de applicatie worden gedefinieerd en de componenten worden weergegeven op de juiste locaties.
- trainers.css: Dit bestand bevat de CSS voor de trainers component en de bijbehorende subcomponenten.

Al deze componenten werken samen om een gebruiksvriendelijke en visueel aantrekkelijke applicatie te creëren die informatie toont over de trainers van een sportschool. De data voor de trainers wordt ingeladen uit de data.js file en getoond met behulp van de Trainer component, met de social media links worden weergegeven met behulp van de Socials component. De Header en Footer componenten zorgen voor de navigatie en layout van de pagina.

## Auteur
- Rousseaux Gilles

## Licentie
Deze React applicatie is ontwikkeld met inspiratie van verschillende bronnen en met hulp van StackOverflow voor specifieke code oplossingen. 
De cursus die gevolgd is, heeft ook bijgedragen aan de ontwikkeling van de app. 
De afbeeldingen gebruikt in de app zijn copyright free van de website Unsplash en het logo is gegenereerd met Logo.com. 
Html/CSS/Bootstrap is gebruikt van een vorig eindproject.



