const setup = () => {
    let button = document.getElementById("btnToon");
        button.addEventListener("click", () => toontrigram);
}

const toontrigram = () => {

    let txtTekst = document.getElementById("txtTekst");
    let tekst=txtTekst.value;
    let lstTrigrams = document.getElementById("trigram");
    let trigram = getTrigram(tekst);
    let output = "";
    for (let i = 0; i < trigram.length; i++){
        output += "<li>" + trigram[i] + "</li>";
    }

    const getTrigram = (tekst) => {
        let result = [];
        let trigram;
        for (let i = 0; i <= tekst.length -3; i++){
            trigram = tekst.slice(i, i+3);
            result.push(trigram);
        }
        return result;
    }
}
window.addEventListener("load", setup);