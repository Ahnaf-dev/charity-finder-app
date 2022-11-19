import globalGivingAPI from "./api/apiConfig";
import "./sass/style.scss";
import home from "./pages/home";
import header from "./components/header";
import utils from "./utilities/utils";
const routes = {
  "/": home,
  "/header": header,
};
const page = routes["/"];

function changePageBasedOnRoute() {
  console.log("h1");
}

$(window).on("hashchange", changePageBasedOnRoute);

$(window).on("load", function () {
  page.generateHTML();

  $.ajax({
    method: "get",
    url: globalGivingAPI.organization(),
    dataType: "JSON",
  }).done((data) => {
    console.log(data);
  });
});
