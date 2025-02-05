const setup = () => {

    tree();
}

const tree = () => {
    let limit = 6;
    let teken = "";
    for (let i = 0; i <6; i++) {
    teken += "*";
    console.log(teken);
}
}
window.addEventListener("load", setup);