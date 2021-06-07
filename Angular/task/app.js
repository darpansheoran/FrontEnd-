// create a module (myApp); create controller(myController) & register controller with module.
var myApp = angular
  .module("myModule", [])
  .filter("capitalize", function () {
    return function (input) {
      return angular.isString(input) && input.length > 0
        ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()
        : input;
    };
  })
  .factory("PagerService", function PagerService() {
    // service definition
    var service = {};

    service.GetPager = GetPager;

    return service;

    // service implementation
    function GetPager(totalItems, currentPage, pageSize) {
      // default to first page
      currentPage = currentPage || 1;

      // default page size is 5
      pageSize = pageSize || 5;

      // calculate total pages
      var totalPages = Math.ceil(totalItems / pageSize);

      var startPage, endPage;
      if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
      } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
        } else {
          startPage = currentPage - 5;
          endPage = currentPage + 4;
        }
      }

      // calculate start and end item indexes
      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // create an array of pages to ng-repeat in the pager control
      var pages = _.range(startPage, endPage + 1);

      // return object with all pager properties required by the view
      return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
      };
    }
  })
  .controller("myController", function ($scope, $filter, PagerService) {
    $scope.data = [
      {
        name: "Darpan",
        email: "darpansheoran@gmail.com",
        phone: 9050607050,
        gender: "male",
        age: 22,
        address: "1324 Main St.",
        dob: "1998-09-07",
        degrees: [
          {
            education: "High school",
            institute: "SVPS",
            startDate: new Date("2006-06-15"),
            endDate: new Date("2017-06-12"),
            marks: "89%",
          },
          {
            education: "Bachelor's degree",
            institute: "Chitkara University",
            startDate: new Date("2018-08-13"),
            endDate: new Date("2022-07-20"),
            marks: "9CGPA",
          },
        ],
      },
      {
        name: "Martin",
        email: "martin@patientbond.com",
        phone: 1234567890,
        gender: "male",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: 4576981245,
        gender: "male",
        age: 21,
        address: "1234 Main St.",
        dob: "1999-09-07",
      },
      {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: 5483695124,
        gender: "male",
        age: 20,
        address: "1234 Main St.",
        dob: "2000-09-07",
      },
      {
        name: "Alex",
        email: "alex@hotmail.com",
        phone: 9863245781,
        gender: "male",
        age: 23,
        address: "1234 Main St.",
        dob: "1997-09-09",
      },
      {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: 7892453698,
        gender: "female",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Joe",
        email: "joe@patientbond.com",
        phone: 6457847890,
        gender: "male",
        age: 32,
        address: "1234 Main St.",
        dob: "1988-09-07",
      },
      {
        name: "Phyllis",
        email: "phyllis@hotmail.com",
        phone: 7457893645,
        gender: "female",
        age: 42,
        address: "1234 Main St.",
        dob: "1978-09-07",
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
        name: "Martin",
        email: "martin@patientbond.com",
        phone: 1234567891,
        gender: "male",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: 4576981240,
        gender: "male",
        age: 21,
        address: "1234 Main St.",
        dob: "1999-09-07",
      },
      {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: 5483695125,
        gender: "male",
        age: 20,
        address: "1234 Main St.",
        dob: "2000-09-07",
      },
      {
        name: "Alex",
        email: "alex@hotmail.com",
        phone: 9863245782,
        gender: "male",
        age: 23,
        address: "1234 Main St.",
        dob: "1997-09-09",
      },
      {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: 7892453690,
        gender: "female",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Joe",
        email: "joe@patientbond.com",
        phone: 6457847891,
        gender: "male",
        age: 32,
        address: "1234 Main St.",
        dob: "1988-09-07",
      },
      {
        name: "Phyllis",
        email: "phyllis@hotmail.com",
        phone: 7457893646,
        gender: "female",
        age: 42,
        address: "1234 Main St.",
        dob: "1978-09-07",
      },
      {
        name: "Chris",
        email: "chris@hotmail.com",
        phone: 5111115120,
        gender: "male",
        age: 28,
      },
      {
        name: "Dwight",
        email: "dwight@hotmail.com",
        phone: 9878457782,
        gender: "male",
        age: 29,
      },
      {
        name: "Emily",
        email: "emily@hotmail.com",
        phone: 7110003690,
        gender: "female",
        age: 20,
      },
      {
        name: "Abdul",
        email: "abdul@patientbond.com",
        phone: 1787877891,
        gender: "male",
        age: 35,
      },
      {
        name: "David",
        email: "dav@hotmail.com",
        phone: 4444481246,
        gender: "male",
        age: 33,
      },
      {
        name: "Monica",
        email: "mon@hotmail.com",
        phone: 7895695129,
        gender: "female",
        age: 27,
      },
      {
        name: "Andy",
        email: "ndy@hotmail.com",
        phone: 4789153698,
        gender: "male",
        age: 31,
      },
      {
        name: "Martin",
        email: "martin@patientbond.com",
        phone: 1234567892,
        gender: "male",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: 4576981241,
        gender: "male",
        age: 21,
        address: "1234 Main St.",
        dob: "1999-09-07",
      },
      {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: 5483695126,
        gender: "male",
        age: 20,
        address: "1234 Main St.",
        dob: "2000-09-07",
      },
      {
        name: "Alex",
        email: "alex@hotmail.com",
        phone: 9863245783,
        gender: "male",
        age: 23,
        address: "1234 Main St.",
        dob: "1997-09-09",
      },
      {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: 7892453691,
        gender: "female",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Joe",
        email: "joe@patientbond.com",
        phone: 6457847892,
        gender: "male",
        age: 32,
        address: "1234 Main St.",
        dob: "1988-09-07",
      },
      {
        name: "Phyllis",
        email: "phyllis@hotmail.com",
        phone: 7457893647,
        gender: "female",
        age: 42,
        address: "1234 Main St.",
        dob: "1978-09-07",
      },
      {
        name: "Chris",
        email: "chris@hotmail.com",
        phone: 5111115122,
        gender: "male",
        age: 28,
      },
      {
        name: "Dwight",
        email: "dwight@hotmail.com",
        phone: 9878457789,
        gender: "male",
        age: 29,
      },
      {
        name: "Emily",
        email: "emily@hotmail.com",
        phone: 7110003691,
        gender: "female",
        age: 20,
      },
      {
        name: "Abdul",
        email: "abdul@patientbond.com",
        phone: 1787877892,
        gender: "male",
        age: 35,
      },
      {
        name: "David",
        email: "dav@hotmail.com",
        phone: 4444481247,
        gender: "male",
        age: 33,
      },
      {
        name: "Monica",
        email: "mon@hotmail.com",
        phone: 7895695125,
        gender: "female",
        age: 27,
      },
      {
        name: "Andy",
        email: "ndy@hotmail.com",
        phone: 4789493698,
        gender: "male",
        age: 31,
      },
      {
        name: "Martin",
        email: "martin@patientbond.com",
        phone: 1234567893,
        gender: "male",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: 4576981242,
        gender: "male",
        age: 21,
        address: "1234 Main St.",
        dob: "1999-09-07",
      },
      {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: 5483695127,
        gender: "male",
        age: 20,
        address: "1234 Main St.",
        dob: "2000-09-07",
      },
      {
        name: "Alex",
        email: "alex@hotmail.com",
        phone: 9863245784,
        gender: "male",
        age: 23,
        address: "1234 Main St.",
        dob: "1997-09-09",
      },
      {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: 7892453693,
        gender: "female",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Joe",
        email: "joe@patientbond.com",
        phone: 6457847893,
        gender: "male",
        age: 32,
        address: "1234 Main St.",
        dob: "1988-09-07",
      },
      {
        name: "Phyllis",
        email: "phyllis@hotmail.com",
        phone: 7457893648,
        gender: "female",
        age: 42,
        address: "1234 Main St.",
        dob: "1978-09-07",
      },
      {
        name: "Chris",
        email: "chris@hotmail.com",
        phone: 5111115125,
        gender: "male",
        age: 28,
      },
      {
        name: "Dwight",
        email: "dwight@hotmail.com",
        phone: 9878457788,
        gender: "male",
        age: 29,
      },
      {
        name: "Emily",
        email: "emily@hotmail.com",
        phone: 7110003692,
        gender: "female",
        age: 20,
      },
      {
        name: "Abdul",
        email: "abdul@patientbond.com",
        phone: 1787877893,
        gender: "male",
        age: 35,
      },
      {
        name: "David",
        email: "dav@hotmail.com",
        phone: 4444481248,
        gender: "male",
        age: 33,
      },
      {
        name: "Monica",
        email: "mon@hotmail.com",
        phone: 7898695124,
        gender: "female",
        age: 27,
      },
      {
        name: "Andy",
        email: "ndy@hotmail.com",
        phone: 4789253698,
        gender: "male",
        age: 31,
      },
      {
        name: "Martin",
        email: "martin@patientbond.com",
        phone: 1234567894,
        gender: "male",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Harry",
        email: "harry@hotmail.com",
        phone: 4576981243,
        gender: "male",
        age: 21,
        address: "1234 Main St.",
        dob: "1999-09-07",
      },
      {
        name: "Pat",
        email: "pat@hotmail.com",
        phone: 5483695128,
        gender: "male",
        age: 20,
        address: "1234 Main St.",
        dob: "2000-09-07",
      },
      {
        name: "Alex",
        email: "alex@hotmail.com",
        phone: 9863245785,
        gender: "male",
        age: 23,
        address: "1234 Main St.",
        dob: "1997-09-09",
      },
      {
        name: "Nora Smith",
        email: "nora@hotmail.com",
        phone: 7892453695,
        gender: "female",
        age: 22,
        address: "1234 Main St.",
        dob: "1998-09-07",
      },
      {
        name: "Joe",
        email: "joe@patientbond.com",
        phone: 6457847894,
        gender: "male",
        age: 32,
        address: "1234 Main St.",
        dob: "1988-09-07",
      },
      {
        name: "Phyllis",
        email: "phyllis@hotmail.com",
        phone: 7457893649,
        gender: "female",
        age: 42,
        address: "1234 Main St.",
        dob: "1978-09-07",
      },
      {
        name: "Chris",
        email: "chris@hotmail.com",
        phone: 5111115128,
        gender: "male",
        age: 28,
      },
      {
        name: "Dwight",
        email: "dwight@hotmail.com",
        phone: 9878457787,
        gender: "male",
        age: 29,
      },
      {
        name: "Emily",
        email: "emily@hotmail.com",
        phone: 7110003693,
        gender: "female",
        age: 20,
      },
      {
        name: "Abdul",
        email: "abdul@patientbond.com",
        phone: 1787877894,
        gender: "male",
        age: 35,
      },
      {
        name: "David",
        email: "dav@hotmail.com",
        phone: 4444481249,
        gender: "male",
        age: 33,
      },
      {
        name: "Monica",
        email: "mon@hotmail.com",
        phone: 7895695724,
        gender: "female",
        age: 27,
      },
      {
        name: "Andy",
        email: "ndy@hotmail.com",
        phone: 4789453608,
        gender: "male",
        age: 31,
      },
    ];
    // for-pagination
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.pageSize = 5;

    initController();
    function initController() {
      // initialize to page 1
      $scope.setPage(1);
    }

    function setPage(page, pageSize = 5) {
      // if (page < 1 || page > $scope.pager.totalPages) {
      //   return;
      // }
      // get pager object from service
      $scope.pager = PagerService.GetPager(
        $filter("filter")($scope.data, $scope.searchText).length,
        page,
        pageSize
      );

      // get current page of items for view
      $scope.employees = $filter("filter")(
        $scope.data,
        $scope.searchText
      ).slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
    }

    $scope.searchText = "";
    $scope.selectedEmployee = {};

    // goTo page 1 if searching
    $scope.$watch(
      "searchText",
      function (newValue, oldValue) {
        if (oldValue != newValue) {
          $scope.setPage(1);
        }
      },
      true
    );

    $scope.setEmployee = function (employee) {
      $scope.selectedEmployee = employee;
    };

    // reset form when it is opened/closed
    $scope.resetForm = function () {
      var form = document.querySelector(".needs-validation");
      // reset form
      form.reset();
      // reset form-styles
      form.classList.remove("was-validated");
      // qualifications
      $scope.degrees = [];
      // selected employee
      $scope.selectedEmployee = {};
      // calculated age
      $scope.dob = new Date();
    };

    // set max date on dob and startDate of degree
    setMaxAtt();
    function setMaxAtt() {
      // date selector set max date
      let today = new Date();
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
      $scope.today = today;
      document.getElementById("userDob").setAttribute("max", today);
      document.getElementById("startDate").setAttribute("max", today);
    }

    // calculate age
    $scope.dob = new Date();
    $scope.calcAge = function () {
      var Bday = +new Date($scope.dob);
      var usrAge = ~~((Date.now() - Bday) / 31557600000);
      if (usrAge == 0) usrAge = 1;
      return usrAge;
    };

    // set min date
    $scope.startDate = new Date();
    // start date changed so change min attr of endDate
    $scope.dateChanged = function () {
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
      document.getElementById("endDate").value = "";
    };

    // add qualifications
    $scope.degrees = [];
    $scope.addRow = function () {
      let edu = document.getElementById("education").value;
      let inst = document.getElementById("institute").value;
      let strt = document.getElementById("startDate").value;
      let end = document.getElementById("endDate").value;
      let marks = document.getElementById("marks").value;
      // error
      if (edu == "" || inst == "" || strt == "" || end == "" || marks == "") {
        document.getElementById("error").style.display = "block";
        setTimeout(function () {
          document.getElementById("error").style.display = "none";
        }, 2000);
      }
      // add degree
      else {
        $scope.degrees.unshift({
          education: edu,
          institute: inst,
          startDate: new Date(strt),
          endDate: new Date(end),
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

    // if user wants to edit start/end date after adding a degree
    $scope.dateChangeDegree = function (index) {
      let today = $scope.degrees[index].startDate;
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
      document.getElementById(`endDate-${index}`).setAttribute("min", today);
      document.getElementById(`endDate-${index}`).value = "";
    };

    // edit user
    $scope.editUser = function (user) {
      if (user.dob) {
        $scope.dob = new Date(user.dob);
      } else {
        $scope.dob = new Date();
      }
      if (user.degrees) {
        $scope.degrees = user.degrees;
      }
    };
    // delete user
    $scope.deleteUser = function (user) {
      $scope.data.forEach((item, index) => {
        if (item.phone == user.phone) {
          $scope.data.splice(index, 1);
        }
      });
      // check pages
      if (
        $scope.pager.currentPage >
        Math.ceil(
          $filter("filter")($scope.data, $scope.searchText).length /
            $scope.pageSize
        )
      ) {
        $scope.pager.currentPage--;
      }
      // reload
      setPage($scope.pager.currentPage, $scope.pageSize);
      document.querySelector(".alert-danger").style.display = "block";
      setTimeout(function () {
        document.querySelector(".alert-danger").style.display = "none";
      }, 3000);
    };

    // format date
    $scope.getDate = function (date) {
      let today = date;
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
      return today;
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
            // edit employee in employees
            if ($scope.selectedEmployee.name) {
              $scope.data.forEach((item, index) => {
                if (item.phone == $scope.selectedEmployee.phone) {
                  $scope.data[index] = {
                    name: document.getElementById("userName").value,
                    email: document.getElementById("userEmail").value,
                    phone: document.getElementById("userPhone").value,
                    gender: document.getElementById("userGender").value,
                    age: document.getElementById("userAge").textContent,
                    address: document.getElementById("userAddress").value,
                    dob: document.getElementById("userDob").value,
                  };
                  // add degree to employee
                  if ($scope.degrees.length >= 1) {
                    $scope.data[index].degrees = [];
                    $scope.degrees.forEach((element) => {
                      $scope.data[index].degrees.unshift(element);
                    });
                  }
                }
              });
            }
            // add new employee
            else {
              $scope.data.unshift({
                name: document.getElementById("userName").value,
                email: document.getElementById("userEmail").value,
                phone: document.getElementById("userPhone").value,
                gender: document.getElementById("userGender").value,
                age: document.getElementById("userAge").textContent,
                address: document.getElementById("userAddress").value,
                dob: document.getElementById("userDob").value,
              });
              // add degree to employee
              if ($scope.degrees.length >= 1) {
                $scope.data[0].degrees = [];
                $scope.degrees.forEach((element) => {
                  $scope.data[0].degrees.unshift(element);
                });
              }
            }

            // close modal & Show success message
            // update message
            if ($scope.selectedEmployee.name) {
              document.querySelector(".alert-info").style.display = "block";
              setTimeout(function () {
                document.querySelector(".alert-info").style.display = "none";
              }, 3000);
            }
            // new user added message
            else {
              document.querySelector(".alert-primary").style.display = "block";
              setTimeout(function () {
                document.querySelector(".alert-primary").style.display = "none";
              }, 3000);
            }
            document.querySelector(".form-modal-close").click();
            // reload
            setPage($scope.pager.currentPage, $scope.pageSize);

            return;
          }
          form.classList.add("was-validated");
        },
        false
      );
    })();
  });
