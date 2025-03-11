const setup = () => {
    let button = document.getElementById("btnToon");
        button.addEventListener("click", () => pasaan("onoorbaar"));
}

const pasaan = (tekst) => {
    for(let i = 0; i < tekst.length - 3; i++){
    console.log(tekst.slice(i, i + 3));

    }
}
window.addEventListener("load", setup);