const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let wijzigButton = document.getElementById("wijzigButton");

    wijzigButton.addEventListener("click", () => {
        pElement.innerHTML = "Welkom!";
    });
}
window.addEventListener("load", setup);