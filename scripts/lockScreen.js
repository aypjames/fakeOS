// Lock Screen Feature
document.getElementById("lockScreenPass").addEventListener("keypress", (e) => {
  const lockScreen = document.getElementById("lockScreen");
  const passHint = document.getElementById("lockScreenHint");

  if (e.key === "Enter") {
    if (e.target.value === "qwerty") {
      passHint.innerHTML = "";
      lockScreen.style.display = "none";
      e.target.value = "";
    } else {
      passHint.innerHTML =
        "<p>Incorrect Password. Password Hint: Keyboard Type (6)</p>";
    }
  }
});
