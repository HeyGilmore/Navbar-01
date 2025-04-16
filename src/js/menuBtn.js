export default function menuBtn() {

  // grab menu button id
  const menuButtonContainer = document.getElementById("menuButton");

  // Create a div
  const menuBtn = document.createElement("div");
  menuBtn.classList.add("menu-btn"); // Creating a class

  // Create line div
  const btnLine1 = document.createElement("div");
  btnLine1.classList.add("btn-line");
  const btnLine2 = document.createElement("div");
  btnLine2.classList.add("btn-line");
  const btnLine3 = document.createElement("div");
  btnLine3.classList.add("btn-line");

  // Append the btn-line divs to the menu-btn div
  menuBtn.appendChild(btnLine1);
  menuBtn.appendChild(btnLine2);
  menuBtn.appendChild(btnLine3);

  menuButtonContainer.appendChild(menuBtn);
}
