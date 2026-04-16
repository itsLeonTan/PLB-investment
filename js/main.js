let menuOpen = false;
function menuFunction(x) {
    menuOpen = !menuOpen;
    x.classList.toggle("change");

    if (menuOpen) {
        document.querySelector("nav").style.height = "100vh";
        document.getElementById("nav-bottom").style.display = "grid";
    }
    else {
        document.querySelector("nav").style.height = "fit-content";
        document.getElementById("nav-bottom").style.display = "none";
    }
    
}
