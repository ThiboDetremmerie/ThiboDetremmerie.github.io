const setup = () => {
    let buttn = document.getElementById("btnToon")
    buttn.addEventListener("click", maakmetspaties);
};
const maakmetspaties = () => {
    let txtInput=document.getElementById("txtInput");
    let tekst=txtInput.value;
    let nieuwetekst = tekst.split("").join(" ");
    console.log(nieuwetekst);
}

document.addEventListener('DOMContentLoaded', setup);