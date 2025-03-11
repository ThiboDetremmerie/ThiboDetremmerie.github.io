const setup = () => {
    let listItems = document.getElementsByTagName('p');
    for(let i=0; i<listItems.length; i += 2) {
        listItems[i+1].className = "opvallend"
    }



}


window.addEventListener("load", setup);