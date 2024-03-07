const setup = () => {
    var belangrijkeElementen = document.querySelectorAll('.belangrijk');

// Voeg de class "opvallend" toe aan alle belangrijke elementen
    belangrijkeElementen.forEach(function(element) {
        element.classList.add('opvallend');
    });
}

window.addEventListener("load", setup);