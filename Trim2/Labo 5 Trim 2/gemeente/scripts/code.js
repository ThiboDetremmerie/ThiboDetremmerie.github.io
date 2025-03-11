const setup = () => {
    sorteerGemeentes();
}
const sorteerGemeentes = () => {

    const gemeentes = [];

    let input = prompt("Voer de naam van een gemeente in (typ 'stop' om te stoppen):");

    while (input !== "stop") {

        gemeentes.push(input);

        input = prompt("Voer de naam van een gemeente in (typ 'stop' om te stoppen):");
    }

    gemeentes.sort();
    const dropdown = document.getElementById("gemeentesDropdown");
    gemeentes.forEach((gemeente, i) => {dropdown.add(new Option(gemeente))})

}
window.addEventListener("load", setup);