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
const page = routes["/"];

function changePageBasedOnRoute() {
  utils.renderHTML(".header", header);
  let url = utils.parseURLFromHash(location.hash);
  console.log(routes[url]);
}

window.addEventListener("hashchange", changePageBasedOnRoute);

$(window).on("load", function () {
  // default page = home / splash landing page
  page.generateHTML();

  // $.ajax({
  //   method: "get",
  //   url: globalGivingAPI.organization(),
  //   dataType: "JSON",
  // }).done((data) => {
  //   console.log(data);
  // });
});
