// buttons
var add = document.querySelector(".add-btn");
var square = document.querySelector(".fa-square");
var remove = document.querySelector(".fa-times");
var tasksBtn = document.getElementById("tasks");
var completedTasksBtn = document.getElementById("completed");
var showBtn = document.querySelector(".fa-eye-slash");
// other ui elements
var list = document.querySelector(".items");
var liNode = document.createElement("li");
var info = document.querySelector(".info");
var counter = 1;

// events on initial li
// remove li
remove.addEventListener(
  "click",
  (e) => {
    e.currentTarget.parentNode.remove();
    if (e.currentTarget.parentNode.classList.contains("not-completed")) {
      counter--;
    }
    if (showBtn.classList.contains("fa-eye")) {
      showBtn.classList.add("fa-eye-slash");
      showBtn.click();
    }
  },
  false
);
// mark/unmark completed
square.addEventListener(
  "click",
  function (e) {
    if (
      this.classList.contains("fa-square") &&
      this.parentNode.children[1].value != ""
    ) {
      this.classList.remove("fa-square");
      this.classList.add("fa-check-square");
      this.parentNode.classList.remove("not-completed");
      this.parentNode.classList.add("completed");
      counter--;
      this.parentNode.children[1].readOnly = "true";
      if (!showBtn.classList.contains("fa-eye")) {
        setTimeout(() => {
          tasksBtn.click();
        }, 800);
      } else {
        showBtn.classList.add("fa-eye-slash");
        showBtn.click();
      }
    } else if (this.parentNode.children[1].value != "") {
      this.classList.remove("fa-check-square");
      this.classList.add("fa-square");
      this.parentNode.classList.remove("completed");
      this.parentNode.classList.add("not-completed");
      this.parentNode.children[1].readOnly = "";
      counter++;
      if (!showBtn.classList.contains("fa-eye")) {
        setTimeout(() => {
          completedTasksBtn.click();
        }, 800);
      } else {
        showBtn.classList.add("fa-eye-slash");
        showBtn.click();
      }
    } else {
      info.innerText = "Write Something in your to-do.";
      info.classList.add("error-message");
      setTimeout(() => {
        info.innerText = "";
        info.classList.remove("error-message");
        info.innerHTML = `<span>&#9135;&#9135;</span> Get Started <span>&#9135;&#9135;</span>`;
      }, 2500);
    }
  },
  false
);

// add new task
add.addEventListener("click", () => {
  if (counter > 0 && list.children[0].children[1].value == "") {
    info.innerText = "Write Something in your to-do.";
    info.classList.add("error-message");
    setTimeout(() => {
      info.innerText = "";
      info.classList.remove("error-message");
      info.innerHTML = `<span>&#9135;&#9135;</span> Get Started <span>&#9135;&#9135;</span>`;
    }, 2500);
  } else {
    counter++;
    // create element
    liNode.innerHTML = `<i class="far fa-square"></i>
      <input type="text" class="scroll-content" placeholder="Task goes here" />
      <i class="fas fa-times"></i>`;
    // add class to created element
    liNode.classList.add("list-item", "not-completed");
    // prepend to list
    list.prepend(liNode);

    // add events to created element
    // to remove
    liNode.lastChild.addEventListener(
      "click",
      (e) => {
        e.currentTarget.parentNode.remove();
        if (e.currentTarget.parentNode.classList.contains("not-completed")) {
          counter--;
        }
        if (showBtn.classList.contains("fa-eye")) {
          showBtn.classList.add("fa-eye-slash");
          showBtn.click();
        }
      },
      false
    );
    // to mark/unmark
    liNode.firstChild.addEventListener(
      "click",
      function (e) {
        if (
          this.classList.contains("fa-square") &&
          this.parentNode.children[1].value != ""
        ) {
          this.classList.remove("fa-square");
          this.classList.add("fa-check-square");
          this.parentNode.classList.remove("not-completed");
          this.parentNode.classList.add("completed");
          this.parentNode.children[1].readOnly = "true";
          counter--;
          if (!showBtn.classList.contains("fa-eye")) {
            setTimeout(() => {
              tasksBtn.click();
            }, 800);
          } else {
            showBtn.classList.add("fa-eye-slash");
            showBtn.click();
          }
        } else if (this.parentNode.children[1].value != "") {
          this.classList.remove("fa-check-square");
          this.classList.add("fa-square");
          this.parentNode.classList.remove("completed");
          this.parentNode.classList.add("not-completed");
          this.parentNode.children[1].readOnly = "";
          counter++;
          if (!showBtn.classList.contains("fa-eye")) {
            setTimeout(() => {
              completedTasksBtn.click();
            }, 800);
          } else {
            showBtn.classList.add("fa-eye-slash");
            showBtn.click();
          }
        } else {
          info.innerText = "Write Something in your to-do.";
          info.classList.add("error-message");
          setTimeout(() => {
            info.innerText = "";
            info.classList.remove("error-message");
            info.innerHTML = `<span>&#9135;&#9135;</span> Get Started <span>&#9135;&#9135;</span>`;
          }, 2500);
        }
      },
      false
    );
    // add scroll effect;
    let interval_val = 2;
    let timeout_ = null;
    liNode.children[1].addEventListener("mouseover", function () {
      var this_ = this;
      timeout_ = setInterval(function () {
        $(this_).scrollLeft(interval_val);
        interval_val++;
      }, 20);
    });
    liNode.children[1].addEventListener("mouseout", function () {
      clearInterval(timeout_);
      $(this).scrollLeft(0);
      interval_val = 2;
    });

    liNode = document.createElement("li");
  }
});

// show incomplete tasks
tasksBtn.addEventListener("click", () => {
  showBtn.classList.add("fa-eye-slash");
  showBtn.classList.remove("fa-eye");
  for (let i = 0; i < list.childElementCount; i++) {
    if (list.children[i].classList.contains("completed")) {
      list.children[i].style.display = "none";
    } else {
      list.children[i].style.display = "";
    }
  }
  tasksBtn.style.backgroundColor = "slateblue";
  tasksBtn.style.color = "#fff";
  completedTasksBtn.style.backgroundColor = "whitesmoke";
  completedTasksBtn.style.color = "slateblue";
  add.style.display = "";
  info.innerHTML = `<span>&#9135;&#9135;</span> Get Started <span>&#9135;&#9135;</span>`;
});
tasksBtn.click();

// show completeed tasks
completedTasksBtn.addEventListener("click", () => {
  showBtn.classList.add("fa-eye-slash");
  showBtn.classList.remove("fa-eye");
  for (let i = 0; i < list.childElementCount; i++) {
    if (list.children[i].classList.contains("not-completed")) {
      list.children[i].style.display = "none";
    } else {
      list.children[i].style.display = "";
    }
  }
  completedTasksBtn.style.backgroundColor = "slateblue";
  completedTasksBtn.style.color = "#fff";
  tasksBtn.style.backgroundColor = "whitesmoke";
  tasksBtn.style.color = "slateblue";
  add.style.display = "none";
  info.innerText = "";
});

// scroll effect
var input = document.querySelector(".scroll-content");
let interval_val = 2;
let timeout_ = null;
input.addEventListener("mouseover", function () {
  var this_ = this;
  timeout_ = setInterval(function () {
    $(this_).scrollLeft(interval_val);
    interval_val++;
  }, 20);
});

input.addEventListener("mouseout", function () {
  clearInterval(timeout_);
  $(this).scrollLeft(0);
  interval_val = 2;
});

//show everything
showBtn.addEventListener("click", () => {
  if (showBtn.classList.contains("fa-eye-slash")) {
    showBtn.classList.remove("fa-eye-slash");
    showBtn.classList.add("fa-eye");
    let pending = 0;
    let done = 0;
    for (let i = 0; i < list.childElementCount; i++) {
      if (list.children[i].classList.contains("completed")) {
        done++;
      } else if (list.children[i].children[1].value != "") {
        pending++;
      }
      if (list.children[i].children[1].value != "") {
        list.children[i].style.display = "";
      } else {
        list.children[i].style.display = "none";
      }
    }
    tasksBtn.style.backgroundColor = "whitesmoke";
    tasksBtn.style.color = "slateblue";
    completedTasksBtn.style.backgroundColor = "whitesmoke";
    completedTasksBtn.style.color = "slateblue";
    add.style.display = "none";
    info.innerText = `${pending} tasks pending and ${done} tasks done.`;
  } else {
    showBtn.classList.remove("fa-eye");
    showBtn.classList.add("fa-eye-slash");
    tasksBtn.click();
  }
});
