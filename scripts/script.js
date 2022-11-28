const deviceMenu = document.getElementById("deviceMenu");
const menuCard = document.getElementById("menuCard");
const menuSysPref = document.getElementById("menuSysPref");
const menuLockScreen = document.getElementById("menuLockScreen");
const lockScreen = document.getElementById("lockScreen");
const sysPref = document.getElementById("sysPrefWindow");

deviceMenu.addEventListener("click", () => {
  menuCard.style.display = "block";
});

menuSysPref.addEventListener("click", () => {
  menuCard.style.display = "none";
  sysPref.style.display = "block";
});

menuLockScreen.addEventListener("click", () => {
  menuCard.style.display = "none";
  lockScreen.style.display = "flex";
});
