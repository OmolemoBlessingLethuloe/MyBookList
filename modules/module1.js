// adding external stylesheet
// let element = document.createElement("link");
// element.setAttribute("rel", "stylesheet");
// element.setAttribute("type", "text/css");
// element.setAttribute("href", "main.css");
// document.getElementsByTagName("head")[0].appendChild(element);

// parent nodes
const landingPage = document.getElementById("landingPage");

// creating DOM elements
let corner1 = document.createElement("div");
let corner2 = document.createElement("div");
let banner = document.createElement("section");
let heading = document.createElement("h1");
let span = document.createElement("span");
let headingLastPart = document.createElement("span");
let description = document.createElement('p');
let listButton = document.createElement("button");

let nav = document.createElement("div");
let signUp = document.createElement("button");
let logIn = document.createElement("button");
let logo = document.createElement("i");

// adding classList attributes for styling
corner1.classList = "corner1";
corner2.classList = "corner2";
banner.classList = "landingPageBanner";
heading.classList = "heading";
description.classList ="description";
listButton.classList ="listButton";
span.classList = "headingSpan";
headingLastPart.classList = "headingEnd";

nav.classList = "navigation";
signUp.classList = "signUp";
logIn.classList = "logIn";
logo.classList = "fas fa-book-open";

// assigning text to element variables
heading.textContent = "My";
span.textContent = "Book"; 
description.textContent = " “A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.” ― George R.R. Martin";
listButton.textContent = "MyList";
headingLastPart.textContent = "List.";

signUp.textContent = "SignUp";
logIn.textContent = "LogIn";

// appending elements to parent div
nav.appendChild(logo);
nav.appendChild(signUp);
nav.appendChild(logIn);
banner.appendChild(nav);
banner.appendChild(corner2);
heading.appendChild(headingLastPart);
heading.insertBefore(span,headingLastPart);
banner.appendChild(heading);
banner.appendChild(description);
banner.appendChild(listButton);
landingPage.appendChild(banner);
banner.appendChild(corner1);
 


    
