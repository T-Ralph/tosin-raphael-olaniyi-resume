//Declare Functions
menuToggle = () => {
    const menuIcon = document.querySelector("header > nav > i"); //DOM Query Menu Icon
    const navigationList = document.querySelector("header > nav > ul"); //DOM Query Navigation UL
    //Check if Menu is Displayed
    if (navigationList.classList.contains("show")) {
        //Hide Menu
        menuIcon.className = "fas fa-bars fa-2x";
        navigationList.classList.remove("show");
        navigationList.classList.add("hide");
    }
    else {
        //Show Menu
        menuIcon.className = "fas fa-times fa-2x";
        navigationList.classList.remove("hide");
        navigationList.classList.add("show");
    }
}

//Add Event Listener to Menu Icon
const menuIcon = document.querySelector("header > nav > i");
menuIcon.addEventListener("click", menuToggle);

//Add Event Listener to Navigation List
const navigationList = document.querySelector("header > nav > ul");
navigationList.addEventListener("click", menuToggle);