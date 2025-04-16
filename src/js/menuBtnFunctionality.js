import homeButtonFunction from "../js/homeButtonFunction";

export default function menuBtnFunctionality() {
  const menuBtn = document.getElementById("menuButtonContainer");

  menuBtn.addEventListener("click", () => {
    // Menu Button Lines
    const topLine = menuBtn.children[0]; // The first line
    const middleLine = menuBtn.children[1]; // The second line
    const bottomLine = menuBtn.children[2]; // The bottom line

    if (menuBtn.classList.contains("open")) {
      // change status of menu button to close
      menuBtn.classList.remove("open");
      menuBtn.classList.add("closed");

      topLine.style.transform = "none";
      topLine.style.height = "3px";
      topLine.style.backgroundColor = "#fbfef9";
      topLine.style.transition = "all 0.3s ease";

      middleLine.style.visibility = "visible";

      bottomLine.style.transform = "none";
      bottomLine.style.height = "3px";
      bottomLine.style.backgroundColor = "#fbfef9";
      bottomLine.style.transition = "all 0.3s ease";
    } else {
      // change status of menu button to close
      menuBtn.classList.remove("closed");
      menuBtn.classList.add("open");

      middleLine.style.visibility = "hidden";

      // Transform the top and bottom lines to form an X
      topLine.style.transform = "rotate(45deg) translate(5px, 5px)";
      topLine.style.height = "40px";
      topLine.style.backgroundColor = "#BF1363";

      topLine.style.transition = "all 0.3s ease"; // Smooth animation

      bottomLine.style.transform = "rotate(-45deg) translate(5px, -5px)";
      bottomLine.style.height = "40px";
      bottomLine.style.backgroundColor = "#BF1363";
      bottomLine.style.transition = "all 0.3s ease"; // Smooth animation";

      // Showcase of Home Button
      homeButtonFunction();
    }
  });
}
