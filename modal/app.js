const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".closeModal");
const modal = document.querySelector(".modalContainer");

openModal.addEventListener("click", function() {
  modal.classList.add("active");
});

closeModal.addEventListener("click", function() {
  modal.classList.remove("active");
});