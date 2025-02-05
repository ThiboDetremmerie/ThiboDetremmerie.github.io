const setup = () => {
    // Haal de elementen op
    let redSlider = document.getElementById("red");
    let greenSlider = document.getElementById("green");
    let blueSlider = document.getElementById("blue");
    let colorBlock = document.getElementById("colorBlock");

    // Voeg event listeners toe aan de sliders
    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);

    // Initialiseer de kleur
    updateColor();
}

const updateColor = () => {
    // Haal de waarden op van de sliders
    let redValue = document.getElementById("red").value;
    let greenValue = document.getElementById("green").value;
    let blueValue = document.getElementById("blue").value;

    // Creëer een RGB kleurstring
    let rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // Update de achtergrondkleur van het kleurblok
    document.getElementById("colorBlock").style.backgroundColor = rgbColor;
}
window.addEventListener("load", setup);