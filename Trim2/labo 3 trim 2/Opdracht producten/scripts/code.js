// Plaats de herbereken functie buiten de setup functie
function herbereken() {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwTarieven = document.getElementsByClassName("btw");
    let subtotaalCellen = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].textContent);
        let aantal = parseFloat(aantallen[i].value); // Verander parseInt naar parseFloat
        let btwTarief = parseFloat(btwTarieven[i].textContent) / 100;

        let subtotaal = (prijs * aantal) * (1 + btwTarief);
        subtotaalCellen[i].textContent = subtotaal.toFixed(2) + " EUR";

        totaal += subtotaal;
    }

    document.getElementById("totaal").textContent = totaal.toFixed(2) + " EUR";
}

// Plaats de setup functie om te wachten tot de DOM is geladen
const setup = () => {
    // Voeg de herbereken functie toe aan de click event van de knop
    document.getElementById("herberekenButton").addEventListener("click", herbereken);
}

// Wacht tot de DOM is geladen voordat de setup functie wordt uitgevoerd
window.addEventListener("load", setup);