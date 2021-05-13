// create a module (myApp); create controller(myController) & register controller with module.
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    // create an array of objects
    var employees = [
      {
        name: "Martin",
        email: "martin@patientbond.com",
        phone: 1234567890,
        gender: "male",
        age: 24,
      },
      {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: 4576981245,
        gender: "male",
        age: 22,
      },
      {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: 5483695124,
        gender: "male",
        age: 21,
      },
      {
        name: "Alex",
        email: "alex@hotmail.com",
        phone: 9863245781,
        gender: "male",
        age: 23,
      },
      {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: 7892453698,
        gender: "female",
        age: 23,
      },
      {
        name: "Joe",
        email: "joe@patientbond.com",
        phone: 6457847890,
        gender: "male",
        age: 32,
      },
      {
        name: "Phyllis",
        email: "phyllis@hotmail.com",
        phone: 7457893645,
        gender: "female",
        age: 30,
      },
      {
        name: "Chris",
        email: "chris@hotmail.com",
        phone: 5111115124,
        gender: "male",
        age: 28,
      },
      {
        name: "Dwight",
        email: "dwight@hotmail.com",
        phone: 9878457781,
        gender: "male",
        age: 29,
      },
      {
        name: "Emily",
        email: "emily@hotmail.com",
        phone: 7110003698,
        gender: "female",
        age: 20,
      },
      {
        name: "Abdul",
        email: "abdul@patientbond.com",
        phone: 1787877890,
        gender: "male",
        age: 35,
      },
      {
        name: "David",
        email: "dav@hotmail.com",
        phone: 4444481245,
        gender: "male",
        age: 33,
      },
      {
        name: "Monica",
        email: "mon@hotmail.com",
        phone: 7895695124,
        gender: "female",
        age: 27,
      },
      {
        name: "Andy",
        email: "ndy@hotmail.com",
        phone: 4789453698,
        gender: "male",
        age: 31,
      },
      {
        name: "Andy",
        email: "ndy@hotmail.com",
        phone: 4789453698,
        gender: "male",
        age: 31,
      },
    ];
    // link scope variable with array of employees
    $scope.employees = employees;
    // create another array to store search results afterwards
    $scope.filteredEmployees = employees;
    // to check and disable prev and next buttons
    $scope.onPage = 1;
    // index for showing limited records; for each iteration increase by 5 for next page
    $scope.startFrom = 0;
    // initial number of pages
    $scope.pages = Math.ceil(employees.length / 5);

    // calculate number of pages
    $scope.calcPages = function (results) {
      $scope.pages = Math.ceil(results / 5);
      return $scope.pages;
    };

    $scope.nextClick = function () {
      $scope.onPage = $scope.onPage + 1;
      // if on last page disable next
      if ($scope.onPage == $scope.pages) {
        document.querySelector(".next").classList.add("disabled");
        document.querySelector(".prev").classList.remove("disabled");
      }
      // else remove disabled class
      else {
        document.querySelector(".prev").classList.remove("disabled");
        document.querySelector(".next").classList.remove("disabled");
      }
      // add active class to current link and remove from previous
      document
        .querySelector(".active")
        .nextElementSibling.classList.add("active");
      document.querySelector(".active").classList.remove("active");
      // show data by increasing index
      $scope.startFrom += 5;
      // disable search if needed
      let input = document.querySelector(".input-group").firstElementChild;
      if ($scope.onPage != 1) {
        input.disabled = true;
      } else {
        input.disabled = false;
      }
    };
    $scope.prevClick = function () {
      $scope.onPage = $scope.onPage - 1;
      // if on first page disable previous button
      if ($scope.onPage == 1) {
        document.querySelector(".prev").classList.add("disabled");
        document.querySelector(".next").classList.remove("disabled");
      } else {
        document.querySelector(".prev").classList.remove("disabled");
        document.querySelector(".next").classList.remove("disabled");
      }
      // for showing selected li and remove active from previous
      document
        .querySelector(".active")
        .previousElementSibling.classList.add("active");
      document
        .querySelector(".active")
        .nextElementSibling.classList.remove("active");
      // show data by decreasing index
      $scope.startFrom -= 5;
      // disable search if needed
      let input = document.querySelector(".input-group").firstElementChild;
      if ($scope.onPage != 1) {
        input.disabled = true;
      } else {
        input.disabled = false;
      }
    };
    $scope.goToPage = function (index) {
      $scope.onPage = index;
      if ($scope.onPage == $scope.pages) {
        document.querySelector(".next").classList.add("disabled");
        document.querySelector(".prev").classList.remove("disabled");
      } else if ($scope.onPage == 1) {
        document.querySelector(".prev").classList.add("disabled");
        document.querySelector(".next").classList.remove("disabled");
      } else {
        document.querySelector(".prev").classList.remove("disabled");
        document.querySelector(".next").classList.remove("disabled");
      }
      document.querySelector(".active").classList.remove("active");
      event.target.parentElement.classList.add("active");
      // show content of that page
      $scope.startFrom = (index - 1) * 5;
      // disable search if needed
      let input = document.querySelector(".input-group").firstElementChild;
      if ($scope.onPage != 1) {
        input.disabled = true;
      } else {
        input.disabled = false;
      }
    };

    // reset form when it is closed
    $scope.resetForm = function () {
      var form = document.querySelector(".needs-validation");
      // reset form
      form.reset();
      // reset form-styles
      form.classList.remove("was-validated");
    };

    // form-validation
    (function () {
      "use strict";
      // Fetch the form we want to apply custom Bootstrap validation styles to
      var form = document.querySelector(".needs-validation");
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            employees.unshift({
              name: document.getElementById("validationCustom01").value,
              email: document.getElementById("validationCustom02").value,
              phone: document.getElementById("validationCustom03").value,
              gender: document.getElementById("validationCustom04").value,
              age: document.getElementById("validationCustom05").value,
            });
            // if new page enable next
            $scope.pages = Math.ceil($scope.filteredEmployees / 5);
            if ($scope.onPage != $scope.pages) {
              document.querySelector(".next").classList.remove("disabled");
            }
            // reset form
            form.reset();
            // reset form-styles
            form.classList.remove("was-validated");
            // close modal & Show success message
            document.querySelector(".btn-close").click();
            document.querySelector(".alert").classList.toggle("fade");
            setTimeout(function () {
              document.querySelector(".alert").classList.add("fade");
            }, 3000);
            return;
          }
          form.classList.add("was-validated");
        },
        false
      );
    })();
  })
  .filter("range", function () {
    // RETURNS ARRAY FOR RANGE IN NG-REPEAT
    return function (input, total) {
      total = parseInt(total);
      for (var i = 2; i <= total; i++) {
        input.push(i);
      }

      return input;
    };
  });
