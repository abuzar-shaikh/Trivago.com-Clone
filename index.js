import footer from "./components/footer.js";
let mainFooter = document.getElementById("imported-footer");
mainFooter.innerHTML = footer();

import navbar from "./components/navbar.js";
let HeadNavbar = document.getElementById("MainNavbar");
HeadNavbar.innerHTML = navbar();

document.getElementById("Mumbai-btn").addEventListener("click", deleteMum);
function deleteMum() {
  document.getElementById("Mumbai-input").value = "";
}

document.getElementById("login-span");
document.getElementById("detail-span");

document.getElementById("searchButton5");
