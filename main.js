import { HomePage } from "./modules/Home.js";
import { CreateFooter } from "./modules/Footer.js";

const indexBody = document.querySelector("#index-body");
const landingPage = document.querySelector("#landingPage");

indexBody.appendChild(HomePage.myBody);
landingPage.appendChild(indexBody);


