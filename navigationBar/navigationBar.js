document.getElementById("Mumbai-btn").addEventListener("click", deleteMum);
function deleteMum() {
  document.getElementById("Mumbai-input").value = "";
}

document.getElementById("searchButton5").addEventListener("click", changedName);

function changedName() {
  document.getElementById("changed-name").textContent =
    "Hi Abusaeed have a good day..";
  document.getElementById("Login-span").textContent = "Abusaeed";
}
