const setup = () => {
    document.getElementById("selStaat").addEventListener('change', selstaat);
    document.getElementById("txtLetter").addEventListener('input', verander);
}

const selstaat = () => {
    let tekst = document.getElementById("selStaat").options;
    let img = document.getElementById("img");
    let note = document.getElementById("note");
    if(tekst[1].selected){
        img.className = "";
        img.innerHTML = `<img src="img/with-egg.png" alt="Met ei">`;
        note.innerHTML = "Hierboven, een kip met een ei"
    } else if(tekst[2].selected){
        img.className = "";
        img.innerHTML = `<img src="img/without-egg.png" alt="zonder ei">`;
        note.innerHTML = "Hierboven, een kip zonder ei"
    }
}

const verander = () => {
    selstaat();
    let input = document.getElementById("txtLetter").value;
    let note = document.getElementById("note").innerText;
    let count = 0;
    let tekst = note.indexOf(input);
    while(tekst !== -1 && tekst < note.length){
        count++;
        tekst = note.indexOf(input, tekst + 1);
    }
    document.getElementById("note").innerHTML += "<br>De letter " + input + " komt " + count + " keer voor in bovenstaande zin"
}



window.addEventListener("load", setup);