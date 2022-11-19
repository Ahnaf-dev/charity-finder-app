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

function changePageBasedOnRoute() {
  let url = utils.parseURLFromHash(location.hash);
  let notHome = url !== "/";

  if (notHome) {
    resetPage();
    utils.renderHTML("header", header);
    utils.renderHTML("#content__entry", routes[url]);
  } else {
    homePage.generateHTML();
  }
}

window.addEventListener("hashchange", changePageBasedOnRoute);

$(window).on("load", function () {
  // default page = home / splash landing page
  homePage.generateHTML();

  // $.ajax({
  //   method: "get",
  //   url: globalGivingAPI.organization(),
  //   dataType: "JSON",
  // }).done((data) => {
  //   console.log(data);
  // });
});

function resetPage() {
  $("body").html(` 
  <header></header>
  <section id="content__entry">
    <p class="loading">Loading...</p>
  </section>
  <footer id="footer__container"></footer>
  `);
}
