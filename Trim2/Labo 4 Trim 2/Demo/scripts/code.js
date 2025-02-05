const setup = () => {
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("txtName").focus();
    });
}
window.addEventListener("load", setup);