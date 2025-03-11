const setup = () => {
    update()


}

const update = () => {
    let red=document.getElementById("sldRed").value;
    let green=document.getElementById("sldGreen").value;
    let blue=document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblRed").innerHTML=green;
    document.getElementById("lblRed").innerHTML=blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb(red, bue, green)";

}


window.addEventListener("load", setup);


