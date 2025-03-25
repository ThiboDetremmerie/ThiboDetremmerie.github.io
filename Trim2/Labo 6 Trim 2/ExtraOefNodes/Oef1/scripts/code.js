const setup = () => {

    let element = document.querySelectorAll("p")[0];
    let y = element.childNodes[0];
    element.removeChild(y);
    let textNode = document.createTextNode("Good Job!");
    element.appendChild(textNode);

}

window.addEventListener("load", setup);