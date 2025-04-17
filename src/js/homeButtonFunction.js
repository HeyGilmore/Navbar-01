import homeIMG from "../img/home.svg";
import aboutIMG from "../img/about.svg";
import blogIMG from "../img/blog.svg";
import contactIMG from "../img/contact.png";

export default function menuOptionsAppear() {
  //DOM baseline Div
  const baseline = document.getElementById("baseLine");
  const menuButton = document.getElementById("menuButtonContainer");

  // Making Multiple Divs with similar Icons styles
  const createDivWithImage = (id, imgSrc, styles) => {
    let div = document.getElementById(id);
    //If there is no div with that ID, lets create it
    if (!div) {
      // Creation of Div with ID && Style
      div = document.createElement("div");
      div.id = id;
      Object.assign(div.style, styles);
      // Image Creation with Style
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `${id} icon`;
      Object.assign(img.style, {
        width: "45px",
        height: "45px",
      });

      // Add Image to Div
      div.appendChild(img);
      // Add div to DOM
      baseline.appendChild(div);
    }
    return div;
  };

  //-------- Checks if menu Button has a "open" Class ----------
  if (menuButton.classList.contains("open")) {
    //----- The Menu Section
    const homeDiv = createDivWithImage("homeDiv", homeIMG, {
      top: "-60px",
      left: "17px",
    });
    //----- The About Section
    const aboutDiv = createDivWithImage("aboutDiv", aboutIMG, {
      top: "-60px",
      left: "90px",
    });
    //----- The Blog Section
    const blogDiv = createDivWithImage("blogDiv", blogIMG, {
      top: "-60px",
      left: "164px",
    });
    //----- The Contact Section
    const contactDiv = createDivWithImage("contactDiv", contactIMG, {
      top: "-60px",
      left: "236px",
    });

    // Force reflow to synchronize animations
    // eslint-disable-next-line no-unused-vars
    const reflow = baseline.offsetHeight;

    // Adding a class to all divs
    homeDiv.classList.add("menu-option");
    aboutDiv.classList.add("menu-option");
    blogDiv.classList.add("menu-option");
    contactDiv.classList.add("menu-option");

    //Add animation to Divs
    aboutDiv.classList.add("animate-up");
    homeDiv.classList.add("animate-up");
    blogDiv.classList.add("animate-up");
    contactDiv.classList.add("animate-up");
  } else {
    //-------- If the MenuButton does NOT has Open ----------
    // Closing the menu Section
    const removeDivWithAnimation = (id) => {
      const div = document.getElementById(id);
      // If there is a div with id
      if (div) {
        div.classList.remove("animate-up");
        div.classList.add("animate-down");
        div.addEventListener("animationend", () => {
          div.remove();
        });
      }
    };
    removeDivWithAnimation("homeDiv");
    removeDivWithAnimation("aboutDiv");
    removeDivWithAnimation("blogDiv");
    removeDivWithAnimation("contactDiv");
  }
}
