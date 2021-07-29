// adding external stylesheet
let element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "main.css");
document.getElementsByTagName("head")[0].appendChild(element);

// parent nodes
const myHeader = document.getElementById("main-header");
const myBody = document.getElementsByTagName("body");

// creating elements
let headerPicture = document.createElement("div");
let header1 = document.createElement("h1");
let header2 = document.createElement("span");
let header3 = document.createElement("span");
let smallDescription = document.createElement("p");

let searchContainer = document.createElement("form");
let searchBar = document.createElement("input");

let bookForm = document.createElement("form");
let titleDiv = document.createElement("div");
let titleLabel = document.createElement("label");
let titleInput = document.createElement("input");
let authorDiv = document.createElement("div");
let authorLabel = document.createElement("label");
let authorInput = document.createElement("input");
let ISBNDiv = document.createElement("div");
let ISBNLabel = document.createElement("label");
let ISBNInput = document.createElement("input");
let addButton = document.createElement("button");

// adding classList
headerPicture.classList = "headerPicture";
header1.classList = "heading1";
header2.classList = "headingSpan1";
header3.classList = "heading2";
smallDescription.classList = "smallDescription";

searchContainer.classList = "searchContainer";
searchBar.classList = "searchBar";

bookForm.id = "bookForm";
titleDiv.classList = "form-group";
titleLabel.classList = "titleLabel";
titleInput.id = "title";
titleInput.classList = "titleInput";
authorDiv.classList = "form-group";
authorLabel.classList = "authorLabel";
authorInput.id = "author";
authorInput.classList = "authorInput";
ISBNDiv.classList = "form-group";
ISBNLabel.classList = "ISBNLabel";
ISBNInput.id = "ISBN";
ISBNInput.classList = "ISBNInput";
addButton.classList = "addButton";

// setting attributes to elements
searchBar.setAttribute("type","text");
searchBar.setAttribute("placeholder","Search for books..")

titleLabel.setAttribute("for","title");
titleInput.setAttribute("type","text");
authorLabel.setAttribute("for","author");
authorInput.setAttribute("type","text");
ISBNLabel.setAttribute("for","ISBN#");
ISBNInput.setAttribute("type","text");
addButton.setAttribute("type","submit");

// assigning text to element variables
header1.textContent = "My";
header2.textContent = "Book"; 
header3.textContent = "List";
smallDescription.textContent = "A personal book collection."
titleLabel.textContent = "Book Title";
authorLabel.textContent = "Book Author";
ISBNLabel.textContent = "ISBN Number";
addButton.textContent = "Add Book";

// heading.appendChild(headingLastPart);
// heading.insertBefore(span,headingLastPart);

myHeader.appendChild(headerPicture);
headerPicture.appendChild(header1);
header1.appendChild(header3);
header1.insertBefore(header2,header3);
headerPicture.appendChild(smallDescription);
searchContainer.appendChild(searchBar);
headerPicture.appendChild(searchContainer);

titleDiv.appendChild(titleLabel);
titleDiv.appendChild(titleInput);
bookForm.appendChild(titleDiv);


authorDiv.appendChild(authorLabel);
authorDiv.appendChild(authorInput);
bookForm.appendChild(authorDiv);

ISBNDiv.appendChild(ISBNLabel);
ISBNDiv.appendChild(ISBNInput);
bookForm.appendChild(ISBNDiv);
bookForm.appendChild(addButton);

myHeader.appendChild(bookForm);




