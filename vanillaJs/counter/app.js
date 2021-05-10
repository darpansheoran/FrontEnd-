var counter = 0;
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var reset = document.getElementById("reset");
var count = document.querySelector(".count");

count.innerHTML = `<h1>  ${counter} </h1>`;

inc.addEventListener("click", () => {
  counter++;
  count.innerHTML = `<h1>  ${counter} </h1>`;
  if (counter > 0) {
    count.childNodes[0].style.color = "#008000";
  } else if (counter < 0) {
    count.childNodes[0].style.color = "#ff0000";
  }
});
dec.addEventListener("click", () => {
  counter--;
  count.innerHTML = `<h1>  ${counter} </h1>`;
  if (counter > 0) {
    count.childNodes[0].style.color = "#008000";
  } else if (counter < 0) {
    count.childNodes[0].style.color = "#ff0000";
  }
});
reset.addEventListener("click", () => {
  counter = 0;
  count.innerHTML = `<h1>  ${counter} </h1>`;
});
