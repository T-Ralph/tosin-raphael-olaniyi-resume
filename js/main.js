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
filterPortfolios = (portfolioClass) => {
    //Get Portfolios Filter Buttons
    const portfolioFilterButtons = document.querySelectorAll("main > article > section#portfolio > div.portfolios-filters > button.filter-button");

    //Get Portfolios Containers
    const portfolioContainers = document.querySelectorAll("main > article > section#portfolio > div.portfolios > div.portfolio-container");

    //Remove 'active' Class From All Buttons, Then, Add 'active' Class To The Clicked Button
    for (const portfolioFilterButton of portfolioFilterButtons) {
        if (portfolioFilterButton.classList.contains("active")) {
            portfolioFilterButton.classList.remove("active");
        }
        if (portfolioFilterButton.classList.contains(`filter-${portfolioClass}`)) {
            portfolioFilterButton.classList.add("active");
        }
    }

    //Add 'hide' Class To All Portfolios Containers and Add 'show' Class To The Filtered Portfolio
    for (const portfolioContainer of portfolioContainers) {
        if (portfolioContainer.classList.contains("show")) {
            portfolioContainer.classList.remove("show");
        }
        if (portfolioContainer.classList.contains("hide")) {
            portfolioContainer.classList.remove("hide");
        }
        portfolioContainer.classList.add("hide");
        if (portfolioContainer.classList.contains(portfolioClass)) {
            portfolioContainer.classList.remove("hide");
            portfolioContainer.classList.add("show");
        }
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
        if (subject.toLowerCase().includes(swearWord.toLowerCase()) || message.toLowerCase().includes(swearWord.toLowerCase())) {
            containsSwearWords = true;
        }
    }

    //Check if swearWords is present
    if (containsSwearWords == false) {
        window.location.href = encodeURI(`mailto:Tosin Raphael Olaniyi<hello@tosinraphaelolaniyi.com>?subject=${subject}&body=${message}`);
    }
    else {
        alert("Please, be professional! No swear words can be used.");
    }

    contactForm.reset();//Reset Form
}

//Add Event Listener to Menu Icon
const menuIcon = document.querySelector("header > nav > i");
menuIcon.addEventListener("click", menuToggle);

//Add Event Listener to Navigation List
const navigationList = document.querySelector("header > nav > ul");
navigationList.addEventListener("click", menuToggle);

//Add Event Listener to Portfolio Filter Buttons
const portfolioFilterButtons = document.querySelectorAll("main > article > section#portfolio > div.portfolios-filters > button.filter-button");
portfolioFilterButtons[0].addEventListener("click", function(){filterPortfolios(portfolioClass = "all")}, false);
portfolioFilterButtons[1].addEventListener("click", function(){filterPortfolios(portfolioClass = "websites")}, false);
portfolioFilterButtons[2].addEventListener("click", function(){filterPortfolios(portfolioClass = "windows")}, false);
portfolioFilterButtons[3].addEventListener("click", function(){filterPortfolios(portfolioClass = "android")}, false);
portfolioFilterButtons[4].addEventListener("click", function(){filterPortfolios(portfolioClass = "github")}, false);

//Add Event Listener to Form
const contactForm = document.querySelector("section#contact > div#form > form");
contactForm.addEventListener("submit", submitContactForm);