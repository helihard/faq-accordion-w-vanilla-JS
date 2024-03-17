let buttons = document.querySelectorAll("button");

const smallerScreen = window.matchMedia("(max-width: 375px)");

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", () => {
    buttons[i].classList.add("hover");
  });

  buttons[i].addEventListener("mouseleave", () => {
    buttons[i].classList.remove("hover");
  });

  buttons[i].addEventListener("click", () => {
    buttons[i].classList.add("active");
    buttons[i].classList.add("transform");

    let answer = buttons[i].nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      buttons[i].classList.remove("active");
      buttons[i].classList.remove("transform");
      if (smallerScreen.matches) {
        buttons[i].classList.remove("hover");
      }
    } else {
      answer.style.display = "block";
    }    
  });
}