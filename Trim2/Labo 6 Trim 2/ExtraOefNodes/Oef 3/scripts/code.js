const setup = () => {
    let button = document.getElementById("button")
    button.addEventListener("click", ola);
}

const ola = () => {
    let div = document.querySelector("div");
    let pa = document.createElement("p");
    let tekst = document.createTextNode("beetje tekst");
    pa.appendChild(tekst);
    div.appendChild(pa);
    
}
window.addEventListener("load", setup);