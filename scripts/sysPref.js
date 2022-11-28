//Sys Pref Icon
const sysPrefOpen = document.getElementById("sysPref");

// Sys Pref Window Close Button
const sysPrefClose = document.getElementById("sysPrefClose");

// Sys Pref Window
const sysPrefWindow = document.getElementById("sysPrefWindow");

// Sys Pref Save
const nameSaveBtn = document.getElementById("nameSaveBtn");
const wallpaperSaveBtn = document.getElementById("wallpaperSaveBtn");

/// Opening App.
sysPrefOpen.addEventListener("click", () => {
  sysPrefWindow.style.display = "block";
});

// Closing App.
sysPrefClose.addEventListener("click", () => {
  sysPrefWindow.style.display = "none";
});

// Changing User Name
nameSaveBtn.addEventListener("click", () => {
  const userName = document.getElementById("userName").value;

  if (userName === "") {
    return;
  }

  const removeName = document.getElementById("userGreeting");
  removeName.innerHTML = "";

  const greetings = document.createTextNode(`Hello, ${userName}`);
  document.getElementById("userGreeting").appendChild(greetings);
  alert(`Your user name has been updated to ${userName}.`);
});

// Changing Wallpaper
wallpaperSaveBtn.addEventListener("click", () => {
  const wallpaperURL = document.getElementById("wallpaperURL").value;

  if (wallpaperURL === "") {
    return;
  }
  const removeName = document.getElementById("userGreeting");
  removeName.innerHTML = "";

  const desktop = document.getElementById("desktop");
  desktop.style.backgroundImage = `url(${wallpaperURL})`;
});
