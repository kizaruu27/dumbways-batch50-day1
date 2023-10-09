let hamburgerIsOpen = false;

const openHamburgerMenu = () => {
    let hamburgerMenu = document.getElementById("hamburger-menu");

    if (!hamburgerIsOpen) {
        hamburgerMenu.style.display = "block";
        hamburgerIsOpen = true;
    }
    else {
        hamburgerMenu.style.display = "none";
        hamburgerIsOpen = false;
    }
}