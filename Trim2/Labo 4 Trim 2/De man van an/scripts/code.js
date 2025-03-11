const setup = () => {
    var tekst = "De man van An geeft geen hand aan ambetante verwanten";
    var aantal = "an";
    var tellerIndexOf = 0;
    var tellerLastIndexOf = 0;
    var index = tekst.indexOf(aantal);

    while (index !== -1) {
        tellerIndexOf++;
        index = tekst.indexOf(aantal, index + 1);
    }

    index = tekst.lastIndexOf(aantal, tekst.length - 1);
    while (index !== -1) {
        tellerLastIndexOf++;
        index = tekst.lastIndexOf(aantal, index - 1);
    }

    console.log("Aantal keer 'an' met indexOf: " + tellerIndexOf);
    console.log("Aantal keer 'an' met lastIndexOf: " + tellerLastIndexOf);
}



window.addEventListener("load", setup);



