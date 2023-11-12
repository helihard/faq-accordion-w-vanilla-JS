let buttons = document.querySelectorAll("button");


for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", () => {
    buttons[i].classList.add("hover");
  });

  buttons[i].addEventListener("mouseout", () => {
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
    } else {
      answer.style.display = "block";
    }    
  });
}