// preloader

window.onload = function() {
    document.querySelector('.preloader').style.display = "none"
}

// ------------------ TOGGLE FUNCTION ---------------------
// dropdown menu toggle -----------------------------------
document.querySelector('.menu-toggle').addEventListener('click', openMenu);

function openMenu() {
    document.querySelector('.menu').classList.toggle("active");
}
