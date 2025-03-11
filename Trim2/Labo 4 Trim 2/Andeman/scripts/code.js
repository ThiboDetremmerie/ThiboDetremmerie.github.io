const setup = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let tezoeken = "an";
    let aantal = 0;
    let index = tekst.toLowerCase().indexOf(tezoeken);

    while (index !== -1){
        aantal++;
        index = tekst.toLowerCase().indexOf(tezoeken, index +1);
    }

    console.log(aantal);

}
window.addEventListener("load", setup);