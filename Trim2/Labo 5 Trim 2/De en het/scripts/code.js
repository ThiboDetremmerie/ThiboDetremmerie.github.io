const setup = () => {
    let button = document.getElementById("vervangButton");
    button.addEventListener("click", zin);
}


const zin = () => {
    let txtTekst = document.getElementById("zinInput");
    let tekst = txtTekst.value;
    let index = 0;
    let tevervangen = "";
    while((index = tekst.indexOf("de", index)) !== -1){
        tevervangen += tekst.substring(0, index) + "het";
        tekst = tekst.substring(index + 2);
    }
    tevervangen += tekst;
    console.log(tevervangen);

}
window.addEventListener("load", setup);










































