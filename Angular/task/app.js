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
    // counter for pagination
    $scope.counter = 1;
    // index for showing limited records
    $scope.startFrom = 0;
    // calculate number of pages
    $scope.pages = Math.ceil(employees.length / 5);

    $scope.nextClick = function () {
      $scope.counter = $scope.counter + 1;
      if ($scope.counter == Math.ceil(employees.length / 5)) {
        document.querySelector(".next").classList.add("disabled");
        document.querySelector(".prev").classList.remove("disabled");
      } else if ($scope.counter == 1) {
        document.querySelector(".prev").classList.add("disabled");
        document.querySelector(".next").classList.remove("disabled");
      } else {
        document.querySelector(".prev").classList.remove("disabled");
        document.querySelector(".next").classList.remove("disabled");
      }
      // for showing selected li
      document
        .querySelector(".active")
        .nextElementSibling.classList.add("active");
      document.querySelector(".active").classList.remove("active");
      // show data by increasing index
      $scope.startFrom += 5;
    };
    $scope.prevClick = function () {
      $scope.counter = $scope.counter - 1;
      if ($scope.counter == Math.ceil(employees.length / 5)) {
        document.querySelector(".next").classList.add("disabled");
        document.querySelector(".prev").classList.remove("disabled");
      } else if ($scope.counter == 1) {
        document.querySelector(".prev").classList.add("disabled");
        document.querySelector(".next").classList.remove("disabled");
      } else {
        document.querySelector(".prev").classList.remove("disabled");
        document.querySelector(".next").classList.remove("disabled");
      }
      // for showing selected li
      document
        .querySelector(".active")
        .previousElementSibling.classList.add("active");
      document
        .querySelector(".active")
        .nextElementSibling.classList.remove("active");
      // show data by decreasing index
      $scope.startFrom -= 5;
    };
    $scope.goToPage = function (index) {
      $scope.counter = index;
      if ($scope.counter == Math.ceil(employees.length / 5)) {
        document.querySelector(".next").classList.add("disabled");
        document.querySelector(".prev").classList.remove("disabled");
      } else if ($scope.counter == 1) {
        document.querySelector(".prev").classList.add("disabled");
        document.querySelector(".next").classList.remove("disabled");
      } else {
        document.querySelector(".prev").classList.remove("disabled");
        document.querySelector(".next").classList.remove("disabled");
      }
      document.querySelector(".active").classList.remove("active");
      event.target.parentElement.classList.add("active");
      $scope.startFrom = (index - 1) * 5;
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
            // check if new page needed
            $scope.pages = Math.ceil(employees.length / 5);
            // reset form
            form.reset();
            // reset form-styles
            form.classList.remove("was-validated");
            // close modal & Show success message
            document.querySelector(".btn-close").click();
            document.querySelector(".alert-success").classList.toggle("fade");
            setTimeout(function () {
              document.querySelector(".alert-success").classList.add("fade");
            }, 2000);
            return;
          }
          form.classList.add("was-validated");
        },
        false
      );
    })();
  })
  .filter("range", function () {
    return function (input, total) {
      total = parseInt(total);

      for (var i = 2; i <= total; i++) {
        input.push(i);
      }

      return input;
    };
  });
