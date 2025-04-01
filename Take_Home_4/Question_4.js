const allNotes = document.querySelectorAll(".container .note");
console.log(allNotes.length);  // 2 (both `<span class="note">` elements)
allNotes.forEach(note => console.log(note.innerText)); 
// Logs: "Note 1" then "Note 2"















const firstNote = document.querySelector(".container .note");
console.log(firstNote.textContent); // "Note 1"








const emailInputs = document.getElementsByName("email");
console.log(emailInputs.length); // 2 (both input fields have `name="email"`)










const listItems = document.getElementsByTagName("li");
console.log(listItems.length);  // 2 (two `<li>` elements)
console.log(listItems[1].innerText); // "Item 2"












const highlights = document.getElementsByClassName("highlight");
console.log(highlights.length); // 2 (two elements found)
console.log(highlights[0].textContent); // "First paragraph"






const title = document.getElementById("main-title");
console.log(title.textContent);  // Logs: "Welcome to My Page"
