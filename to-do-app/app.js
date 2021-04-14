var add = document.querySelector(".add-btn");
var square = document.querySelectorAll(".fa-square");
var close = document.querySelectorAll(".fa-times");
var list_items = document.querySelectorAll(".list-item");
var list = document.querySelector(".items");
var node = document.createElement("li");
var tasks = document.getElementById("tasks");
var completedTasks = document.getElementById("completed");

add.addEventListener("click", () => {
  node.innerHTML = `<i class="far fa-square fa-2x"></i>
      <input type="text" placeholder="Task goes here" />
      <i class="fas fa-times fa-2x"></i>`;
  node.classList.add("list-item", "not-completed");
  list.appendChild(node);
  close = document.querySelectorAll(".fa-times");
  addCloseEvent();
  list_items = document.querySelectorAll(".list-item");
  square = document.querySelectorAll(".fa-square");
  changeIcon();
  node = document.createElement("li");
});

tasks.addEventListener("click", () => {
  for (let i = 0; i < list_items.length; i++) {
    if (list_items[i].classList.contains("completed")) {
      list_items[i].style.display = "none";
    } else {
      list_items[i].style.display = "";
    }
  }
  add.style.display = "";
});

completedTasks.addEventListener("click", () => {
  for (let i = 0; i < list_items.length; i++) {
    if (list_items[i].classList.contains("not-completed")) {
      list_items[i].style.display = "none";
    } else {
      list_items[i].style.display = "";
    }
  }
  add.style.display = "none";
});

changeIcon();
function changeIcon() {
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener(
      "click",
      function (e) {
        this.classList.remove("fa-square");
        this.classList.add("fa-check-square");
        this.parentNode.classList.remove("not-completed");
        this.parentNode.classList.add("completed");
      },
      false
    );
  }
}
addCloseEvent();
function addCloseEvent() {
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener(
      "click",
      function (e) {
        e.currentTarget.parentNode.remove();
        count--;
      },
      false
    );
  }
}
