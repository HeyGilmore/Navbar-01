import homeIMG from "../img/home.svg";

export default function homeButton() {
  const baseline = document.getElementById("baseLine");
  const menuBtn = document.getElementById("menuButtonContainer");

  if (menuBtn.classList.contains("open")) {
    // Opening  the menu section

    // Create a div with image
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("animate-up");
    homeDiv.id = "homeDiv";
    homeDiv.style.height = "70px";
    homeDiv.style.weight = "70px";
    homeDiv.style.position = "absolute";
    homeDiv.style.top = "-60px";
    homeDiv.style.left = "17px";
    homeDiv.style.border = "2px solid #fbfef9";
    homeDiv.style.borderRadius = "20px 20px 0 0";
    homeDiv.style.padding = "5px 10px";
    homeDiv.style.backgroundColor = "#0e79b2";

    // Create img with src
    const homeIcon = document.createElement("img");
    homeIcon.src = homeIMG;
    //Style Profile Image
    homeIcon.style.width = "45px";
    homeIcon.style.height = "45px";

    // Add Home Icon to div
    homeDiv.appendChild(homeIcon);
    // Add Home Div to DOM
    baseline.appendChild(homeDiv);
  } else {
    // Closing the menu section
    alert("wowowowowo");
  }
}
