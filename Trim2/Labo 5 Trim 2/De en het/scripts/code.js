const setup = () => {
    zin();
}
window.addEventListener("load", setup);

const zin = () => {
    function vervang() {
        const zin = document.getElementById("zinInput").value;
        const woordTeVervangen = "de";
        const woorden = zin.split(" ");

        for (let i = 0; i < woorden.length; i++) {
            if (woorden[i] === woordTeVervangen) {
                woorden[i] = "het";
            }
        }

        const resultaat = woorden.join(" ");
        document.getElementById("resultaat").innerText = resultaat;
    }

    // Event listener voor de knop
    const button = document.getElementById("vervangButton");
    button.addEventListener("click", vervang); // Voeg deze regel toe
}

const vervangAlles = (bronTekst, oud, nieuw) => {
    let result=bronTekst;
    let idx=result.indexOf(oud);
    while (idx!=-1) {
        let voor=result.slice(0, idx);
        let na=result.slice(idx+oud.length, result.length);
        result=voor+nieuw+na;
        idx=result.indexOf(oud, idx+nieuw.length);
    }
    return result;
}
// const setup = () => {
// let inputTekst ='gisteren zat de jongen op de stoep en at de helft van de";

// let outputTekst = vervangAlles(inputTekst, "de", "het");
// console.log(outputTekst);
// }
//
//
//
//
//
//
//









































