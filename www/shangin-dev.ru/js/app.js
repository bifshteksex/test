document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const blockID = anchor.getAttribute("href").substr(1);
    if (document.getElementById(blockID)) {
      e.preventDefault();

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const updateButton = document.getElementById("updateDetails");
const updateButton2 = document.getElementById("updateDetails2");

const favDialog = document.getElementById("favDialog");
const favDialog2 = document.getElementById("favDialog2");

if (typeof favDialog.showModal !== "function") {
  favDialog.hidden = true;
}

if (typeof favDialog2.showModal !== "function") {
  favDialog2.hidden = true;
}

// "Update details" button opens the <dialog> modally
updateButton.addEventListener("click", () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value =
      "Sorry, the <dialog> API is not supported by this browser.";
  }
});

// "Update details" button opens the <dialog> modally
updateButton2.addEventListener("click", () => {
  if (typeof favDialog2.showModal === "function") {
    favDialog2.showModal();
  } else {
    outputBox.value =
      "Sorry, the <dialog> API is not supported by this browser.";
  }
});

window.addEventListener("scroll", (e) => {
  document.documentElement.style.setProperty(
    "--scrollTop",
    `${this.scrollY}px`
  ); // Update method
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
