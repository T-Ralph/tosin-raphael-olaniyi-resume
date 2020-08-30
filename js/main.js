//Declare Constants
let menuMobileDisplay = true; //Set menuMobileDisplay

//Declare Functions
menuToggle = () => {
    const menuIcon = document.querySelector("header > nav > i"); //DOM Query Menu Icon
    const navigationList = document.querySelector("header > nav > ul"); //DOM Query Navigation UL
    if (menuMobileDisplay) {
        //Show Menu
        menuIcon.className = "fas fa-times fa-2x";
        navigationList.style.display = "block";
        menuMobileDisplay = false; //Set menuMobileDisplay
    }
    else {
        //Hide Menu
        menuIcon.className = "fas fa-bars fa-2x";
        navigationList.style.display = "none";
        menuMobileDisplay = true; //Set menuMobileDisplay
    }
}

//Add Event Listener to Menu Icon
const menuIcon = document.querySelector("header > nav > i");
menuIcon.addEventListener("click", menuToggle);

//Add Event Listener to Navigation List
const navigationList = document.querySelector("header > nav > ul");
navigationList.addEventListener("click", menuToggle);