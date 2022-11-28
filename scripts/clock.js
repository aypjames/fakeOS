const clock = document.getElementById("clock");

// Desktop Clock
let deskClock = () => {
  // const showIn24 = document.getElementById("showIn24").value;
  // const showSeconds = document.getElementById("showSeconds").value;

  clock.innerHTML = "";

  const date = new Date();

  let hour = () => {
    let normalHours = 0;

    if (date.getHours() === 0) {
      normalHours = 12;
    } else if (date.getHours() > 12) {
      normalHours = date.getHours() - 12;
    } else {
      normalHours = date.getHours();
    }

    return normalHours;
  };

  const minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const timeOfDay = `${date.getHours() < 12 ? "am" : "pm"}`;

  const timeDisplay = `${hour()}:${minute} ${timeOfDay}`;
  const timeDisplay24 = `${hour()}:${minute}:${second} ${timeOfDay}`;

  clock.innerHTML = `<p>${timeDisplay}</p>`;
};

setInterval(deskClock, 1000);

// System Preferences
// System info
// User Name
// Date, 24 format (no am or pm), show seconds or not.
// change background
