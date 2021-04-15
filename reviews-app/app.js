var surpriseBtn = document.getElementById("surprise-btn");
var left = document.querySelector(".fa-chevron-left");
var right = document.querySelector(".fa-chevron-right");
var persons = [
  document.querySelector(".box-1"),
  document.querySelector(".box-2"),
  document.querySelector(".box-3"),
  document.querySelector(".box-4"),
];
var counter = 0;

right.addEventListener("click", () => {
  if (counter == 3) {
    persons[counter].style.display = "none";
    persons[0].style.display = "";
    counter = 0;
  } else {
    persons[counter].style.display = "none";
    persons[counter + 1].style.display = "";
    counter++;
  }
});

left.addEventListener("click", () => {
  if (counter == 0) {
    persons[counter].style.display = "none";
    persons[persons.length - 1].style.display = "";
    counter = persons.length - 1;
  } else {
    persons[counter].style.display = "none";
    persons[counter - 1].style.display = "";
    counter--;
  }
});

surpriseBtn.addEventListener("click", () => {
  persons[counter].style.display = "none";
  counter = Math.floor(Math.random() * 4);
  persons[counter].style.display = "";
});
