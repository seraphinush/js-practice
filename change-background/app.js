const hex = [
  "0", "1", "2", "3",
  "4", "5", "6", "7",
  "8", "9", "A", "B",
  "C", "D", "E", "F"
];

const button = document.getElementById("button");
const valueText = document.getElementById("value");

function changeColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++)
    hexColor += getRandomHex();
  
  document.body.style.backgroundColor = hexColor;
  valueText.textContent = hexColor;
}

function getRandomHex() {
  let index = Math.floor(Math.random() * hex.length);
  return hex[index];
}

window.onload = function() {
  changeColor();
}

button.addEventListener('click', () => {
  changeColor();
});
