const counterText = document.getElementById("value");
const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");
const reset = document.getElementById("reset");

let value = 0;

window.onload = function () {
  counterText.textContent = value;
}

inc.addEventListener("click", function () {
  value++;
  counterText.textContent = value;
});

dec.addEventListener("click", function () {
  value--;
  counterText.textContent = value;
});

reset.addEventListener("click", function () {
  value = 0;
  counterText.textContent = value;
});
