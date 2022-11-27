// Script for App X
document.getElementById("appX").addEventListener("dblclick", () => {
  alert("Opening App X");
});

// Script for App Y
document.getElementById("appY").addEventListener("dblclick", () => {
  alert("Opening App Y");
});

// Script for App Z
document.getElementById("appZ").addEventListener("dblclick", () => {
  alert("Opening App Z");
});

// Use arrow syntax to declare functions!

const clock = document.getElementById("clock");

// Desktop Clock
let deskClock = () => {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const timeOfDay = `${hour < 12 ? "am" : "pm"}`;

  const timeDisplay = `${hour}:${minute}:${second} ${timeOfDay}`;

  const timeNode = document.createTextNode(timeDisplay);

  clock.appendChild(timeNode);

  setTimeout(deskClock, 1000);
};
