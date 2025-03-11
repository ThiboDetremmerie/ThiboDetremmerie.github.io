const setup = () => {
    let btn = document.getElementsByClassName("button");
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener( "click", aanpassen)

    }
}

const aanpassen = () => {
    let clickedButton = event.target;
    clickedButton.classList.add("colorRed");


}


window.addEventListener("load", setup);