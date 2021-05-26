// create a module (myApp); create controller(myController) & register controller with module.
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope, $filter) {
    // data
    $scope.employees = [
      {
        name: "Martin",
        email: "martin@patientbond.com",
        phone: 1234567890,
        gender: "male",
        age: 24,
        degrees: [
          {
            education: "Bachelor's degree",
            institute: "Chitkara University",
            startDate: "08-12-2018",
            endDate: "07-15-2022",
            marks: "9CGPA",
          },
          {
            education: "High school",
            institute: "Swami Vivekanand Public School",
            startDate: "08-12-2005",
            endDate: "07-06-2017",
            marks: "10CGPA",
          },
          {
            education: "Post Graduation",
            institute: "Thapar University",
            startDate: "08-12-2022",
            endDate: "07-06-2024",
            marks: "60%",
          },
          {
            education: "Phd",
            institute: "Thapar University",
            startDate: "08-12-2024",
            endDate: "07-06-2026",
            marks: "50%",
          },
        ],
      },
      {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: 4576981245,
        gender: "male",
        age: 22,
        degrees: [
          {
            education: "Bachelor's degree",
            institute: "Chitkara University",
            startDate: "08-12-2018",
            endDate: "07-15-2022",
            marks: "9CGPA",
          },
          {
            education: "High school",
            institute: "Swami Vivekanand Public School",
            startDate: "08-12-2005",
            endDate: "07-06-2017",
            marks: "10CGPA",
          },
          {
            education: "Post Graduation",
            institute: "Thapar University",
            startDate: "08-12-2022",
            endDate: "07-06-2024",
            marks: "60%",
          },
          {
            education: "Phd",
            institute: "Thapar University",
            startDate: "08-12-2024",
            endDate: "07-06-2026",
            marks: "50%",
          },
        ],
      },
      {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: 5483695124,
        gender: "male",
        age: 21,
        degrees: [
          {
            education: "Bachelor's degree",
            institute: "Chitkara University",
            startDate: "08-12-2018",
            endDate: "07-15-2022",
            marks: "9CGPA",
          },
          {
            education: "High school",
            institute: "Swami Vivekanand Public School",
            startDate: "08-12-2005",
            endDate: "07-06-2017",
            marks: "10CGPA",
          },
          {
            education: "Post Graduation",
            institute: "Thapar University",
            startDate: "08-12-2022",
            endDate: "07-06-2024",
            marks: "60%",
          },
          {
            education: "Phd",
            institute: "Thapar University",
            startDate: "08-12-2024",
            endDate: "07-06-2026",
            marks: "50%",
          },
        ],
      },
      {
        name: "Alex",
        email: "alex@hotmail.com",
        phone: 9863245781,
        gender: "male",
        age: 23,
        degrees: [
          {
            education: "Bachelor's degree",
            institute: "Chitkara University",
            startDate: "08-12-2018",
            endDate: "07-15-2022",
            marks: "9CGPA",
          },
          {
            education: "High school",
            institute: "Swami Vivekanand Public School",
            startDate: "08-12-2005",
            endDate: "07-06-2017",
            marks: "10CGPA",
          },
          {
            education: "Post Graduation",
            institute: "Thapar University",
            startDate: "08-12-2022",
            endDate: "07-06-2024",
            marks: "60%",
          },
          {
            education: "Phd",
            institute: "Thapar University",
            startDate: "08-12-2024",
            endDate: "07-06-2026",
            marks: "50%",
          },
        ],
      },
      {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: 7892453698,
        gender: "female",
        age: 23,
        degrees: [
          {
            education: "Bachelor's degree",
            institute: "Chitkara University",
            startDate: "08-12-2018",
            endDate: "07-15-2022",
            marks: "9CGPA",
          },
          {
            education: "High school",
            institute: "Swami Vivekanand Public School",
            startDate: "08-12-2005",
            endDate: "07-06-2017",
            marks: "10CGPA",
          },
          {
            education: "Post Graduation",
            institute: "Thapar University",
            startDate: "08-12-2022",
            endDate: "07-06-2024",
            marks: "60%",
          },
          {
            education: "Phd",
            institute: "Thapar University",
            startDate: "08-12-2024",
            endDate: "07-06-2026",
            marks: "50%",
          },
        ],
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
    ];
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.searchText = "";
    $scope.selectedEmployee = {};
    $scope.getEmployees = function () {
      return $filter("filter")($scope.employees, $scope.searchText);
    };

    $scope.numberOfPages = function () {
      return Math.ceil($scope.getEmployees().length / $scope.pageSize);
    };
    $scope.$watch(
      "searchText",
      function (newValue, oldValue) {
        if (oldValue != newValue) {
          $scope.currentPage = 0;
        }
      },
      true
    );
    $scope.$watch(
      "currentPage",
      function (newValue, oldValue) {
        let temp = document.querySelectorAll(".page-number");
        temp[oldValue].classList.remove("active");
        temp[newValue].classList.add("active");
      },
      true
    );
    $scope.goToPage = function (page) {
      $scope.currentPage = page;
    };
    $scope.setEmployee = function (employee) {
      $scope.selectedEmployee = employee;
    };

    // reset form when it is closed
    $scope.resetForm = function () {
      var form = document.querySelector(".needs-validation");
      // reset form
      form.reset();
      // reset form-styles
      form.classList.remove("was-validated");
      // qualifications
      $scope.degrees = [];
    };

    // calculate age
    $scope.age = new Date();
    $scope.calcAge = function () {
      var Bday = +new Date($scope.age);
      var usrAge = ~~((Date.now() - Bday) / 31557600000);
      if (usrAge == 0) usrAge = 1;
      return usrAge;
    };

    // add qualifications
    $scope.degrees = [];
    $scope.addRow = function () {
      let edu = document.getElementById("education").value;
      let inst = document.getElementById("institute").value;
      let strt = document.getElementById("startDate").value;
      let end = document.getElementById("endDate").value;
      let marks = document.getElementById("marks").value;
      if (edu == "" || inst == "" || strt == "" || end == "" || marks == "") {
        document.getElementById("error").style.display = "block";
        setTimeout(function () {
          document.getElementById("error").style.display = "none";
        }, 2000);
      } else {
        $scope.degrees.unshift({
          education: edu,
          institute: inst,
          startDate: strt,
          endDate: end,
          marks: marks,
        });
        document.getElementById("education").value = "";
        document.getElementById("institute").value = "";
        document.getElementById("startDate").value = "";
        document.getElementById("endDate").value = "";
        document.getElementById("marks").value = "";
      }
    };
    $scope.delRow = function (index) {
      $scope.degrees.splice(index, 1);
    };

    // set min date
    $scope.startDate = new Date();
    $scope.changed = function () {
      let today = $scope.startDate;
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = yyyy + "-" + mm + "-" + dd;
      document.getElementById("endDate").setAttribute("min", today);
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
            $scope.employees.unshift({
              name: document.getElementById("userName").value,
              email: document.getElementById("userEmail").value,
              phone: document.getElementById("userPhone").value,
              gender: document.getElementById("userGender").value,
              age: document.getElementById("userAge").textContent,
              address: document.getElementById("userAddress").value,
              dob: document.getElementById("dob").value,
            });
            // add degree to employee
            if ($scope.degrees.length >= 1) {
              $scope.employees[0].degrees = [];
              $scope.degrees.forEach((element) => {
                $scope.employees[0].degrees.unshift(element);
              });
            }
            // close modal & Show success message
            document.querySelector(".form-modal-close").click();
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
      // date selector set max date
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = yyyy + "-" + mm + "-" + dd;
      document.getElementById("dob").setAttribute("max", today);
      document.getElementById("startDate").setAttribute("max", today);
    })();
  });
myApp.filter("startFrom", function () {
  return function (input, start) {
    start = +start;
    return input.slice(start);
  };
});
myApp.filter("range", function () {
  // RETURNS ARRAY FOR RANGE IN NG-REPEAT
  return function (input, total) {
    total = parseInt(total);
    for (var i = 2; i <= total; i++) {
      input.push(i);
    }
    return input;
  };
});
