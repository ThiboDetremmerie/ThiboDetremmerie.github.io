const setup = () => {
    function toonSubstring() {
        // Haal de waarden op van de tekst, startpositie en lengte
        let inputText = document.getElementById("inputText").value;
        let startPos = parseInt(document.getElementById("startPos").value);
        let length = parseInt(document.getElementById("length").value);

        // Controleer of de waarden geldig zijn
        if (isNaN(startPos) || isNaN(length) || startPos < 0 || length <= 0 || startPos >= inputText.length) {
            alert("Ongeldige invoer. Zorg ervoor dat de startpositie binnen de lengte van de tekst ligt en dat de lengte positief is.");
            return;
        }

        // Gebruik substring om het gewenste deel van de tekst te halen
        let substringResult = inputText.substring(startPos, startPos + length);

        // Toon de substring in het output element op de HTML-pagina
        document.getElementById("output").innerHTML = "<strong>Resultaat:</strong> " + substringResult;
    }
}
window.addEventListener("load", setup);