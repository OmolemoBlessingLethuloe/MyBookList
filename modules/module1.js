// adding external stylesheet
// let element = document.createElement("link");
// element.setAttribute("rel", "stylesheet");
// element.setAttribute("type", "text/css");
// element.setAttribute("href", "main.css");
// document.getElementsByTagName("head")[0].appendChild(element);

// export const Home = (() => {
//     const homePage = () => {
// parent nodes
const landingPage = document.getElementById("landingPage");
const myBody = document.querySelector("body");
const myScript = document.querySelector("script");

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

let middleSection = document.createElement("article");
let aboutBookList = document.createElement("h1");
let straightLine = document.createElement("div");
let aboutSection = document.createElement("div");
let aboutSectionPicture = document.createElement("div");
let aboutSectionWriting = document.createElement("div");

let quoteSection = document.createElement("section");
let sectionQuote = document.createElement("h1");
let sectionQuote2 = document.createElement("h1");
let sectionQuote3 = document.createElement("h1");
let sectionQuote4 = document.createElement("p");




// adding classList attributes for styling
corner1.classList = "corner1";
corner2.classList = "corner2";
banner.classList = "landingPageBanner";
heading.classList = "heading";
description.classList ="description";
listButton.classList ="listButton";
span.classList = "headingSpan";
headingLastPart.classList = "headingEnd";

nav.id = "header";
nav.classList = "navigation";
signUp.classList = "signUp";
logIn.classList = "logIn";
logo.classList = "fas fa-book-open";

middleSection.classList = "middleSection";
aboutBookList.classList = "aboutBookList";
straightLine.classList = "straightLine";
aboutSection.classList = "aboutSection";
aboutSectionPicture.classList = "aboutSectionPicture";
aboutSectionWriting.classList = "aboutSectionWriting";

quoteSection.classList = "quote";
sectionQuote.classList = "sectionQuote";
sectionQuote2.classList = "sectionQuote2";
sectionQuote3.classList = "sectionQuote3";
sectionQuote4.classList = "sectionQuote4";



// assigning text to element variables
heading.textContent = "My";
span.textContent = "Book"; 
description.textContent = " “A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.” ― George R.R. Martin";
listButton.textContent = "AddBook";
headingLastPart.textContent = "List.";

signUp.textContent = "SignUp";
logIn.textContent = "LogIn";

aboutBookList.textContent = "About MyBookList";
aboutSectionWriting.textContent = "Plan what to read next. \n Keep track of what you've read. \n Read more books.";

sectionQuote.textContent = "\"";
sectionQuote2.textContent= "MY PROBLEM WITH READING BOOKS IS THAT I GET DISTRACTED.";
sectionQuote3.textContent = "BY OTHER BOOKS.";
sectionQuote4.textContent = "/ Every reader."



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

myBody.insertBefore(middleSection,myScript);
middleSection.appendChild(aboutBookList);
middleSection.appendChild(straightLine);

aboutSection.appendChild(aboutSectionPicture);
aboutSection.appendChild(aboutSectionWriting);
middleSection.appendChild(aboutSection);

myBody.insertBefore(quoteSection,myScript);
quoteSection.appendChild(sectionQuote);
quoteSection.appendChild(sectionQuote2);
quoteSection.appendChild(sectionQuote3);
quoteSection.appendChild(sectionQuote4);
// return myBody;

// };

// return {homePage};
// })();



// export const Footer = (() => {
//     const createFooter = () => {
        let footer = document.createElement("footer");
        let footerPicture = document.createElement("div");
        let footerBottom = document.createElement("div");
        let subscription = document.createElement("div");
        let joinUs = document.createElement("p");
        let joinForm = document.createElement("form");
        let joinInput = document.createElement("input");
        let joinButton = document.createElement("button");
        let lineBreaks = document.createElement("br");

        let jumpToTop = document.createElement("button");
        let anchor = document.createElement("a");
        let arrow = document.createElement("i");

        let icons = document.createElement("div");
        let facebook = document.createElement("i");
        let twitter = document.createElement("i");
        let instagram = document.createElement("i");

        footer.classList = "footer";
        footerPicture.classList = "footerPicture";
        footerBottom.classList = "footerBottom";
        subscription.classList = "subscription";
        joinUs.classList = "joinUs";
        joinForm.classList = "joinForm";
        joinInput.classList = "joinInput";
        joinButton.classList = "joinButton";

        jumpToTop.id = "jumpToTop";
        arrow.classList = "fa fa-angle-up";

        icons.classList = "icons";
        facebook.classList = "fab fa-facebook";
        twitter.classList = "fab fa-twitter";
        instagram.classList = "fab fa-instagram";

// adding attributes 
        joinInput.setAttribute("type","text");
        joinInput.setAttribute("required","");
        joinInput.setAttribute("placeholder","Email*");
        joinButton.setAttribute("type","submit");

        anchor.setAttribute("href","#header");

        footerBottom.textContent = "© 2021 by MyBookList. Proudly created by Omolemo & Rethabile.";
        joinUs.textContent = "JoinUs!";
        joinButton.textContent = "Subscribe"

        myBody.insertBefore(footer,myScript);
        footer.appendChild(footerPicture);
        footer.appendChild(footerBottom);

        subscription.appendChild(joinUs);
        subscription.appendChild(joinForm);
        icons.appendChild(facebook);
        icons.appendChild(twitter);
        icons.appendChild(instagram);
        subscription.appendChild(icons);
        joinForm.appendChild(joinInput);
        joinForm.appendChild(lineBreaks);
        joinForm.appendChild(joinButton);
        footerPicture.appendChild(subscription);

        myBody.insertBefore(jumpToTop,myScript);
        jumpToTop.appendChild(anchor);
        anchor.appendChild(arrow);
//         return footer;
// };
// return {createFooter};
// });


 


    
