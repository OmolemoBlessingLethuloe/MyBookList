function element (){

let element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "main.css");
document.getElementsByTagName("head")[0].appendChild(element)};

export {element}

function submit1(){
    addEventListener('submit', addItem);
};

export {submit1}