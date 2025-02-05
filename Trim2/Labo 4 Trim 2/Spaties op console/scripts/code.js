const setup = () => {
    document.getElementById("btnToon")
    document.querySelector('button').addEventListener('click', toon);
    btnToon.addEventListener("click", toon);
};
const toon = () => {
    let txtInput=document.getElementById("txtInput");
    let tekst=txtInput.value;
    let tekstMetSpaties="";

    for (let i=0; i<tekst.length;i++) {
        tekstMetSpaties+=tekst.charAt(i);
        tekstMetSpaties+=" ";
    }
    console.log(tekstMetSpaties);
}

document.addEventListener('DOMContentLoaded', setup);