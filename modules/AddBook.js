// parent nodes
    const myHeader = document.getElementById("main-header");
    const myBody = document.querySelector("body");
    const myScript = document.querySelector("script");

// form submit event
    myBody.addEventListener('submit', addItem);

// delete event
    myBody.addEventListener('click', removeItem);

// creating elements
    let headerPicture = document.createElement("div");
    let header1 = document.createElement("h1");
    let header2 = document.createElement("span");
    let header3 = document.createElement("span");
    let smallDescription = document.createElement("p");

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


    let bookTable = document.createElement("table");
    let tableRow = document.createElement("tr");
    let titleHeading = document.createElement("th")
    let authorHeading = document.createElement("th");
    let ISBNHeading = document.createElement("th");
    let emptySpace = document.createElement("th");

    let homeButton = document.createElement("a");

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


// adding classList
    headerPicture.id = "header";
    headerPicture.classList = "headerPicture";
    header1.classList = "heading1";
    header2.classList = "headingSpan1";
    header3.classList = "heading2";
    smallDescription.classList = "smallDescription";


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


// setting attributes to elements

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


    joinInput.setAttribute("type","text");
    joinInput.setAttribute("required","");
    joinInput.setAttribute("placeholder","Email*");
    joinButton.setAttribute("type","submit");

    anchor.setAttribute("href","#header");

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

    footerBottom.textContent = "© 2021 by MyBookList. Proudly created by Omolemo & Rethabile.";
    joinUs.textContent = "JoinUs!";
    joinButton.textContent = "Subscribe"


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

        tableRow2.classList = "bookRow";

   // adding text node with input value
        tdTitle.textContent= newTitle;
        tdAuthor.textContent= newAuthor;
        tdISBN.textContent = newISBN

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
        alert("Book successfully added.");
    }

// removing books
    function removeItem(e) {
    // this makes sure that the function only runs when the delete button is clicked and not when the whole list item is clicked
        if (e.target.classList.contains("deleteButton")) {
            if (confirm("Are you sure?")) {
                let row = e.target.parentElement;
                bookTable.removeChild(row);
                alert("Book successfully removed.")
            }
        }
    }

// appending elements
    myBody.insertBefore(headerPicture,myScript);
    headerPicture.appendChild(header1);
    header1.appendChild(header3);
    header1.insertBefore(header2,header3);
    headerPicture.appendChild(smallDescription);

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
    myBody.insertBefore(bookForm,myScript);


    tableRow.appendChild(titleHeading);
    tableRow.appendChild(authorHeading);
    tableRow.appendChild(ISBNHeading);
    tableRow.appendChild(emptySpace);
    bookTable.appendChild(tableRow);
    myBody.insertBefore(bookTable,myScript);
    bookTable.appendChild(lineBreaks);
    bookTable.appendChild(lineBreaks);


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


