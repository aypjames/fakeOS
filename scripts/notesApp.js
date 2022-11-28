const notesAppOpen = document.getElementById("notesApp");

const notesAppClose = document.getElementById("notesAppClose");
const notesAppWindow = document.getElementById("notesAppWindow");

const noteSaveBtn = document.getElementById("noteSaveBtn");
const displayNotes = document.getElementById("displayNotes");

/// Opening App.
notesAppOpen.addEventListener("click", () => {
  notesAppWindow.style.display = "block";
});

// Closing App.
notesAppClose.addEventListener("click", () => {
  notesAppWindow.style.display = "none";
});

noteSaveBtn.addEventListener("click", () => {
  const noteHeading = document.getElementById("noteHeading").value;
  const noteContent = document.getElementById("noteContent").value;

  if (noteHeading === "" && noteContent === "") {
    return;
  }

  const headingInput = document.createTextNode(noteHeading);
  const contentInput = document.createTextNode(noteContent);

  const newNoteHeader = document.createElement("h5");
  newNoteHeader.className = "individual-note__header";
  newNoteHeader.appendChild(headingInput);

  const newNotePara = document.createElement("p");
  newNotePara.className = "individual-note__para";
  newNotePara.appendChild(contentInput);

  // create div with class individual-note
  const newNoteDiv = document.createElement("div");
  newNoteDiv.className = "individual-note";
  newNoteDiv.appendChild(newNoteHeader);
  newNoteDiv.appendChild(newNotePara);

  // append the inidivual notes div to the container div.
  displayNotes.appendChild(newNoteDiv);

  // empty inputs
  document.getElementById("noteHeading").value = "";
  document.getElementById("noteContent").value = "";
});
