const setup = () => {
    let button = document.getElementById("vervangButton");
    button.addEventListener("click", zin);
}


const zin = () => {
    let txtTekst = document.getElementById("zinInput");
    let tekst = txtTekst.value;
    let tevervangen = tekst.replaceAll("de", "het");
    console.log(tevervangen);
}
window.addEventListener("load", setup);
s









































