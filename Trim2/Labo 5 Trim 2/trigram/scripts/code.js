const setup = () => {
    document.getElementById('btnToon').addEventListener("click", toonTrigrams);
}

const getTrigrams = (tekst) => {
    let result = []
    let trigram;
    for (let i = 0; i <= tekst.length - 3; i++) {
        trigram = tekst.slice(i, i + 3);
        result.push(trigram);
    }
    return result;
}

const toonTrigrams = () => {
    let txtTekst = document.getElementById("txtTekst");
    let tekst = txtTekst.value;
    let trigramElement = document.getElementById("trigram");
    let trigrams = getTrigrams(tekst);
    let output = "";
    for (let i = 0; i < trigrams.length; i++) {
        output += "<li>" + trigrams[i] + "</li>";
    }
    trigramElement.innerHTML = output;
};

window.addEventListener("load", setup);