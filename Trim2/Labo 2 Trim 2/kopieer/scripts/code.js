const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;

    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerText = tekst;
}


const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);

}
window.addEventListener("load", setup);