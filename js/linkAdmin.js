let adminLink2 = document.querySelector("#adminLink");
let us2 = JSON.parse(sessionStorage.getItem("user"));
if (us2 && us2.admin) {
  adminLink2.style.display = "block";
}