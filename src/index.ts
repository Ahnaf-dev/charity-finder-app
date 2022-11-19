import globalGivingAPI from "./api/apiConfig";
import "./sass/style.scss";
import home from "./pages/home";
import header from "./components/header";
import charity from "./pages/charity";
import utils from "./utilities/utils";
const routes: any = {
  "/": home,
  "/charity": charity,
  "/charity/:id": 1,
};
const homePage = routes["/"];

async function changePageBasedOnRoute() {
  let url = utils.parseURLFromHash(location.hash);
  let notHome = url !== "/";

  if (notHome) {
    resetPage();
    await utils.renderHTML("header", header);
    await utils.renderHTML("#content__entry", routes[url]);
  } else {
    homePage.generateHTML();
  }
}

window.addEventListener("hashchange", changePageBasedOnRoute);

$(window).on("load", changePageBasedOnRoute);

function resetPage() {
  $("body").html(` 
  <header></header>
  <section id="content__entry">
    <p class="loading">Loading...</p>
  </section>
  <footer id="footer__container"></footer>
  `);
}
