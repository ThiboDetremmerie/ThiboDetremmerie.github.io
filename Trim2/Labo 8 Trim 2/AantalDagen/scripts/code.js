const setup = () => {
    berekenDagen();
}


const berekenDagen = () => {
    let datum = new Date();
    let verjaardag = new Date(2025, 7, 25)
    let dag= 1000*60*60*24;
    let millieseconden = verjaardag - datum;
    let verschilindagen = millieseconden/dag;
    console.log(verschilindagen);


}
window.addEventListener("load", setup);