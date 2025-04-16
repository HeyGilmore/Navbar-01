// StyleSheet
import "../css/styles.css";
// User Profile Image
import profileImage from "../img/user01.jpg";
// Menu Button
import menuBtn from "../js/menuBtn";

// Image Wrapper
const imgWrapper = document.createElement("section");
imgWrapper.style.border = "2px solid black"; // Add a border to the wrapper
imgWrapper.style.display = "inline-block"; // Ensures the wrapper sizes to the image
imgWrapper.style.width = "55px";
imgWrapper.style.height = "55px";
imgWrapper.style.display = "flex";
imgWrapper.style.justifyContent = "center";
imgWrapper.style.alignContent = "center";
imgWrapper.style.overflow = "hidden";
imgWrapper.style.border = "3px solid #FBFEF9";
imgWrapper.style.borderRadius = "20px";

// Profile Image
const img01 = document.createElement("img");
img01.src = profileImage; // sets the source
img01.id = "profileImg"; // Sets the id

//Style Profile Image
img01.style.width = "100%"; // Ensure the image scales to the width of the wrapper
img01.style.height = "100%"; // Ensure the image scales to the height of the wrapper
img01.style.objectFit = "cover";
img01.style.objectPosition = "100% 10%";
//
// Append the image to the wrapper
imgWrapper.appendChild(img01);
document.getElementById("profileImg").appendChild(imgWrapper);

menuBtn();
