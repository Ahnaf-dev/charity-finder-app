import globalGivingAPI from "./api/apiConfig";
import "./sass/style.scss";
import home from "./pages/home";
import header from "./components/header";
import utils from "./utilities/utils";
const routes = {
  "/": home,
  "/charity": 1,
  "/charity/:id": 1,
};
const page = routes["/"];

function changePageBasedOnRoute() {
  console.log(location.hash);
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
