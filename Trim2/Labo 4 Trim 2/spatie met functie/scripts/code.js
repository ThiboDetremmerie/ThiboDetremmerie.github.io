const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        // Voeg het huidige karakter toe aan het resultaat
        result += inputText[i];

        // Voeg een spatie toe als het huidige karakter geen spatie is en het volgende karakter ook geen spatie is
        if (inputText[i] !== " " && inputText[i + 1] !== " ") {
            result += " ";
        }
    }

    return result;
};

const zoekWoord = (tekst, woord) => {
    const index = tekst.indexOf(woord);

    if (index !== -1) {
        console.log(`"${woord}" gevonden op positie ${index}`);
    } else {
        console.log(`"${woord}" niet gevonden in de tekst`);
    }
};

const setup = () => {
    // Test de functie met een voorbeeldtekst
    const inputTekst = "Man bijt hond met valse tanden";
    const tekstMetSpaties = maakMetSpaties(inputTekst);

    // Geef het resultaat weer op de console
    console.log(tekstMetSpaties);

    // Test de zoekWoord-functie
    const voorbeeldTekst = "Man bijt hond met valse tanden";
    zoekWoord(voorbeeldTekst, "hond");
};

window.addEventListener("load", setup);