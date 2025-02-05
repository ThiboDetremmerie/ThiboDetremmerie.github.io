const setup = () => {
    window.addEventListener("load", setup);

    var familieleden = ["Thibo", "Laurens", "Jeroen", "Maarten", "Louis"];


    console.log("Aantal elementen in de array: " + familieleden.length);

    console.log("Eerste element: " + familieleden[0]);
    console.log("Derde element: " + familieleden[2]);
    console.log("Vijfde element: " + familieleden[4]);

    function VoegNaamToe(arr, nieuweNaam) {
        arr.push(nieuweNaam);
    }

    var nieuweNaam = prompt("Voer een nieuwe naam in:");

    VoegNaamToe(familieleden, nieuweNaam);

    console.log("Nieuwe array na toevoeging van extra naam: " + familieleden);


    var arrayString = familieleden.join(", ");
    console.log("Array als string: " + arrayString);
}
window.addEventListener("load", setup);

