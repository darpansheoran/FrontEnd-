var simp = document.getElementById("simp");
var hex = document.getElementById("hex");
var colorVal = document.querySelector(".colorVal");
var simpleColors = ["tomato", "teal", "blueviolet", "chocolate", "crimson"];
var hexColors = ["#a83731", "#fbe274", "#b0e57c", "#a32761", "#01767d"];
var btn = document.getElementById("btn");
var showcase = document.querySelector(".showcase");
var counter = 0;

hex.addEventListener("click", () => {
  simp.classList.remove("active");
  hex.classList.add("active");
  colorVal.innerHTML = "#ffffff";
  showcase.style.backgroundColor = "#ffffff";
});
simp.addEventListener("click", () => {
  hex.classList.remove("active");
  simp.classList.add("active");
  colorVal.innerHTML = "white";
  showcase.style.backgroundColor = "white";
});

btn.addEventListener("click", () => {
  if (counter > 4) {
    counter = 0;
  }
  if (simp.classList.contains("active")) {
    showcase.style.backgroundColor = simpleColors[counter];
    colorVal.innerText = simpleColors[counter];
    counter++;
  } else {
    showcase.style.backgroundColor = hexColors[counter];
    colorVal.innerText = hexColors[counter];
    counter++;
  }
});
