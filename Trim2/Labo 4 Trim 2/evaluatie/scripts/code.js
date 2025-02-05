const setup = () => {
    // Voeg de event listeners toe
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.addEventListener('mouseover', changeImage);
    imageContainer.addEventListener('mouseout', restoreImage);
}

const changeImage = () => {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = 'image/cat.png';
    mainImage.alt = 'Cat';
    document.getElementById('hoverText').innerText = 'School of cats';
}

const restoreImage = () => {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = 'image/vives.png';
    mainImage.alt = 'Vives';
    document.getElementById('hoverText').innerText = 'hogeschool Vives';
}
window.addEventListener("load", setup);