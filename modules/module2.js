// adding external stylesheet
let element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "main.css");
document.getElementsByTagName("head")[0].appendChild(element);

// parent nodes
const myHeader = document.getElementById("main-header");
const myBody = document.querySelector("body");
// const js = document.querySelector("script");

let form = document.getElementById("bookForm");
let itemList = document.getElementById("bookAdded");
let filter = document.getElementById("filter");

// form submit event
myBody.addEventListener('submit', addItem);

// delete event
myBody.addEventListener('click', removeItem);

// filter event
// myBody.addEventListener('keyup', filterItems);

// creating elements
let headerPicture = document.createElement("div");
let header1 = document.createElement("h1");
let header2 = document.createElement("span");
let header3 = document.createElement("span");
let logo = document.createElement("i");
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

let addedBookSection = document.createElement("section");
let bookTable = document.createElement("table");
let tableRow = document.createElement("tr");
let titleHeading = document.createElement("th")
let authorHeading = document.createElement("th");
let ISBNHeading = document.createElement("th");
let emptySpace = document.createElement("th");


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

addedBookSection.classList = "addedBookSection";
bookTable.classList = "bookTable";


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
titleInput.setAttribute("required", '');
authorInput.setAttribute("required", '');
ISBNInput.setAttribute("required", '');

// assigning text to element variables
header1.textContent = "My";
header2.textContent = "Book"; 
header3.textContent = "List";
smallDescription.textContent = "A personal book collection."
titleLabel.textContent = "Book Title";
authorLabel.textContent = "Book Author";
ISBNLabel.textContent = "ISBN Number";
addButton.textContent = "Add Book";

titleHeading.textContent = "Title";
authorHeading.textContent = "Author";
ISBNHeading.textContent = "ISBN Number";


// functions
// add item function
function addItem(e) {
    // this stops the program from submitting to an external file, which it does by default
    e.preventDefault();

    // getting input value
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newISBN = document.getElementById("ISBN").value;

    // creating new td element
    let tdTitle = document.createElement("td");
    let tdAuthor = document.createElement("td");
    let tdISBN = document.createElement("td");
    let tableRow2 = document.createElement("tr");

   // adding text node with input value
   tdTitle.textContent= newTitle;
   tdAuthor.textContent= newAuthor;
   tdISBN.textContent = newISBN

//    tdTitle.appendChild(document.createTextNode(newTitle));
//    tdAuthor.appendChild(document.createTextNode(newAuthor));
//    tdISBN.appendChild(document.createTextNode(newISBN));

   // creating delete button
   let deleteButton = document.createElement("button");

   // adding classes to the delete button 
   deleteButton.classList = "deleteButton";

   // adding text node to delete button
   deleteButton.appendChild(document.createTextNode("X"));

   tableRow2.appendChild(tdTitle);
   tableRow2.appendChild(tdAuthor);
   tableRow2.appendChild(tdISBN);
   tableRow2.appendChild(deleteButton);
   bookTable.appendChild(tableRow2);
}

// removing books
function removeItem(e) {
    // this makes sure that the function only runs when the delete button is clicked and not when the whole list item is clicked
    if (e.target.classList.contains("deleteButton")) {
        if (confirm("Are you sure?")) {
            let row = e.target.parentElement;
            bookTable.removeChild(row);
        }
    }
}

// appending elements
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
searchContainer.appendChild(searchBar);
myHeader.appendChild(searchContainer);

tableRow.appendChild(titleHeading);
tableRow.appendChild(authorHeading);
tableRow.appendChild(ISBNHeading);
tableRow.appendChild(emptySpace);
bookTable.appendChild(tableRow);
myHeader.appendChild(bookTable);











