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
submitContactForm = () => {
    event.preventDefault(); //Prevent Form Refresh

    //Get Values
    const contactForm = document.querySelector("section#contact > div#form > form");
    const name = document.querySelector("section#contact > div#form > form > input[name=name]").value;
    const email = document.querySelector("section#contact > div#form > form > input[name=email]").value;
    const subject = document.querySelector("section#contact > div#form > form > input[name=subject]").value;
    const message = document.querySelector("section#contact > div#form > form > textarea[name=message]").value;

    //Array of Rejected Swear Words
    const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
    let containsSwearWords = false;

    //Check for swearWords
    for (const swearWord of swearWords) {
        if (subject.includes(swearWord) || message.includes(swearWord)) {
            containsSwearWords = true;
        }
    }

    //Check if swearWords is present
    if (containsSwearWords == false) {
        window.location.href = encodeURI(`mailto:Tosin Raphael Olaniyi<hello@tosinraphaelolaniyi.com>?subject=${subject}&body=${message}`);
    }
    else {
        alert("Let's be professional! No swear words can be used.");
    }

    contactForm.reset();//Reset Form
}

//Add Event Listener to Menu Icon
const menuIcon = document.querySelector("header > nav > i");
menuIcon.addEventListener("click", menuToggle);

//Add Event Listener to Navigation List
const navigationList = document.querySelector("header > nav > ul");
navigationList.addEventListener("click", menuToggle);

//Add Event Listener to Form
const contactForm = document.querySelector("section#contact > div#form > form");
contactForm.addEventListener("submit", submitContactForm);