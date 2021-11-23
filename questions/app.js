const cardToggle = document.querySelectorAll("button");

cardToggle.forEach(button => {
  button.addEventListener("click", function() {
    const card = button.parentElement.parentElement;
    card.classList.toggle("card__open");
    //button.parentElement.classList.toggle("card__open");
  });
})