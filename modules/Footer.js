export const CreateFooter = (() => {
    const myBody = document.querySelector("body");
    const myScript = document.querySelector("script");
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
    return {footer};
})();
