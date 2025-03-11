const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className="invalid"; // invalid class instellen
        errVoornaam.innerHTML = "max. 30 karakters";
        txtVoornaam.className="kleurtje";
        errVoornaam.className="kleurtje2";

    } else {
        txtVoornaam.className=""; // alle classes verwijderen
        errVoornaam.innerHTML = "";
        errVoornaam.className="";
    }

};
const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if (familienaam.length === 0) {
        txtFamilienaam.className="invalid"; // invalid class instellen
        errFamilienaam.innerHTML = "Verplicht veld!";
        txtFamilienaam.className="kleurtje";
        errFamilienaam.className="kleurtje2";
    } else if(familienaam.length > 50) {
        txtFamilienaam.className="invalid"; // invalid class instellen
        errFamilienaam.innerHTML = "max 50 karakters";
        txtFamilienaam.className="kleurtje";
        errFamilienaam.className="kleurtje2";
    }
    else {
        txtFamilienaam.className=""; // alle classes verwijderen
        errFamilienaam.innerHTML = "";
        errFamilienaam.className="";

    }

};

const valideerGeboortedatum = () => {
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();
    if (geboortedatum.length === 0) {
        txtGeboortedatum.className="invalid"; // invalid class instellen
        errGeboortedatum.innerHTML = "Verplicht veld!";
        txtGeboortedatum.className="kleurtje";
        errGeboortedatum.className="kleurtje2";
    } else if(geboortedatum[4] !== '-' || geboortedatum[7] !== '-') {
        txtGeboortedatum.className="invalid"; // invalid class instellen
        errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
        txtGeboortedatum.className="kleurtje";
        errGeboortedatum.className="kleurtje2";
    }
    else {
        txtGeboortedatum.className=""; // alle classes verwijderen
        errGeboortedatum.innerHTML = "";
        errGeboortedatum.className="";

    }

};

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();
    if (email === "") {
        txtEmail.className="invalid"; // invalid class instellen
        errEmail.innerHTML = "Verplicht veld!";
        txtEmail.className="kleurtje";
        errEmail.className="kleurtje2";

    } else if(!email.includes('@')){
        txtEmail.className="invalid"; // invalid class instellen
        errEmail.innerHTML = "geen geldig email adres!";
        txtEmail.className="kleurtje";
        errEmail.className="kleurtje2";
    } else if(email.indexOf('@') <= 0 || email.lastIndexOf('@') === email.length -1){
        txtEmail.className="invalid"; // invalid class instellen
        errEmail.innerHTML = "geen geldig email adres!";
        txtEmail.className="kleurtje";
        errEmail.className="kleurtje2";
    }
    else {
        txtEmail.className=""; // alle classes verwijderen
        errEmail.innerHTML = "";
        errEmail.className="";
    }

};

const valideerAantalKinderen = () => {
    let txtaantalkinderen = document.getElementById("txtaantalkinderen");
    let erraantalkinderen = document.getElementById("erraantalkinderen");
    let aantalkinderen = txtaantalkinderen.value.trim();
    if (isNaN(aantalkinderen)) {
        txtaantalkinderen.className="invalid";
        erraantalkinderen.innerHTML = "Is geen positief getal!";
        txtaantalkinderen.className="kleurtje";
        erraantalkinderen.className="kleurtje2";
    } else if(parseInt(aantalkinderen) > 99) {
        erraantalkinderen.innerHTML = "is te vruchtbaar";
        txtaantalkinderen.className="kleurtje";
        erraantalkinderen.className = "kleurtje2";
    } else if(parseInt(aantalkinderen) < 0) {
        txtaantalkinderen.className="invalid";
        erraantalkinderen.innerHTML = "Is geen positief getal!";
        txtaantalkinderen.className="kleurtje";
        erraantalkinderen.className="kleurtje2";
    }


    else {
        txtaantalkinderen.className=""; // alle classes verwijderen
        erraantalkinderen.innerHTML = "";
        erraantalkinderen.className="";
    }

};
window.addEventListener("load", setup);