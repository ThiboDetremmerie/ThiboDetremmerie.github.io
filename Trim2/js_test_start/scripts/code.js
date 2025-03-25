const setup = () => {
    document.getElementById("kipStaat").addEventListener("change", verander);
    document.getElementById("txtLetter").addEventListener("input", teller);
}
const verander = () => {
    let tekst = document.getElementById("kipStaat").options;
    let image = document.getElementById("img");
    let note = document.getElementById("note");
    if(tekst[1].selected){
        image.className = "";
        image.innerHTML =`<img src="img/with-egg.png" alt="Met ei">`;
        note.innerHTML = "Hierboven, een kip met een ei";

    } else if(tekst[2].selected){
        image.className = "";
        image.innerHTML = `<img src="img/without-egg.png" alt="Met ei">`;
        note.innerHTML = "Hierboven, een kip zonder een ei";

    }
}

const teller = () => {
    verander();
    let input = document.getElementById("txtLetter").value;
    let note = document.getElementById("note").innerHTML;
    let count = 0;
    let teller = note.indexOf(input);
    while(teller !== -1 && teller < note.length){
        count++;
        teller = note.indexOf(input, teller + 1);
    }
    document.getElementById("note").innerHTML += `<br> Letter "${input}" komt ${count} keer voor in bovenstaande zin.`;
}

window.addEventListener("load", setup);