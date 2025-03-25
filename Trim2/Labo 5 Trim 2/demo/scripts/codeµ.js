const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", replace);

}

const replace = () => {
    let image = document.getElementById("imgPhoto");
    let nieuwetekst = document.getElementById("txtText");
    nieuwetekst.innerHTML = "my pookie wookie";
    image.src = "img/without-egg.png";

}

window.addEventListener("load", setup);