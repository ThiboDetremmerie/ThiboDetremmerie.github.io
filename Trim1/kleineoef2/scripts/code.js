const setup = () => {
    document.getElementById("selStaat").addEventListener("change", selstaat);
    document.getElementById("txtLetter").addEventListener("input", selTeller);
}
const selstaat = () => {
    tekst = document.getElementById("selStaat").options;
    image = document.getElementById("img");
    node = document.getElementById("note");
    if(tekst[1].selected){
        image.className = "";
        image.innerHTML = `<img src="img/with-egg.png" alt="Met ei">`;
        node.innerHTML = "Hierboven zie je een kip met ei";
    } else if(tekst[2].selected){
        image.className = "";
        image.innerHTML = `<img src="img/without-egg.png" alt="Met ei">`;
        node.innerHTML = "Hierboven zie je een kip zonder ei";
    }
}

const selTeller = () => {
    let input = document.getElementById("txtLetter").value;
    let note = document.getElementById("note").innerHTML;
    let count = 0;
    let teller = note.indexOf(input);
    while(teller !== -1 && teller < note.length){
        count++;
        teller = note.indexOf(input, teller + 1);
    }
    document.getElementById("note").innerHTML = "";
    selstaat();
    document.getElementById("note").innerHTML += `<br> Letter "${input}" komt ${count} keer voor in bovenstaande zin.`;
}




window.addEventListener("load", setup);