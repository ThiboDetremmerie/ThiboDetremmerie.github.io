const setup = () => {

    let student1={
        voornaam : "Johan",
        achternaam : "Demeester",
        geboorteDatum : new Date("1993-12-31"),
        adres : {
            straat : "Kortrijkstraat",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        aantalFietsen : 2
    }

    let tekst = JSON.stringify(student1);
    console.log(tekst);

    let tekstJS = JSON.parse(tekst);
    console.log("JasonParse " + tekstJS.voornaam);
}
window.addEventListener("load", setup);