const setup = () => {
    let drukken = document.getElementById("submit");
    drukken.addEventListener("click", validate);

}

function validate(){
let remember = document.getElementById("roker")
    if(remember.checked == 1){
        console.log("is een roker");
    }  else {
        console.log("is geen roker");
    }

    const talen =document.querySelectorAll(".taal");
    let geselecteerdetalen = [];
    talen.forEach(taal => {
        if (taal.checked){
            geselecteerdetalen.push(taal.value);
        }
    });
    console.log("moedertaal is", geselecteerdetalen.join(", "))

    const dropdown = document.getElementById("buurlanddropdown");
    let landen = [dropdown.value]
    for(let i = 0; i < landen.length; i++){
        if(landen[i] === "Nederland"){
            console.log("favoriete buurland is Nederland");
        } else if(landen[i] === "Frankrijk"){
            console.log("favoriete buurland is Frankrijk");
        } else if(landen[i] === "Duitsland"){
            console.log("favoriete buurland is Duitsland");
        }
    }

    const drop = document.getElementById("bestelling");
    let bestelling = Array.from(drop.selectedOptions);
    let waarden = []
    for(let i = 0; i < bestelling.length; i++){
            waarden.push(bestelling[i].value);

    }
    console.log("bestelling bestaat uit", waarden.join(", "));

}


window.addEventListener("load", setup);