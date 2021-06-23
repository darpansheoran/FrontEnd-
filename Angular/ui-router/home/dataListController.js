app.controller(
  "dataListController",
  function ($scope, $filter, PagerService, $http) {
    // get random users from api
    $http
      .get("https://randomuser.me/api/?results=100")
      .then(function (response) {
        $scope.data = response.data.results;
        // assign id's
        for (let i = $scope.data.length - 1, j = 1; i >= 0; i--, j++) {
          $scope.data[i].id = j;
        }

        initController();
        function initController() {
          // initialize to page 1
          $scope.setPage(1);
        }
      });

    // for-pagination
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.pageSize = 5;

    function setPage(page, pageSize = 5) {
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
      document.getElementById("endDate").setAttribute("min", "");
      document.getElementById("endDate").value = "";
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

    // set min attr on endDate
    $scope.$watch(
      "startDate",
      function (newValue, oldValue) {
        if (oldValue != newValue) {
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
        }
      },
      true
    );

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
      } else if (new Date(end) - new Date(strt) < 0) {
        document.getElementById("dateError").style.display = "block";
        setTimeout(function () {
          document.getElementById("dateError").style.display = "none";
        }, 2000);
      } else if (new Date() - new Date(strt) < 0) {
        document.getElementById("dateError2").style.display = "block";
        setTimeout(function () {
          document.getElementById("dateError2").style.display = "none";
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
    $scope.setMin = function (index) {
      let today = $scope.degrees[index].startDate;
      if (typeof today == "undefined") {
        today = new Date();
      }
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
        if (item.id == user.id) {
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
      if (typeof date == "undefined") {
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
        return today;
      }
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
              if (item.id == $scope.selectedEmployee.id) {
                $scope.data[index] = {
                  name: document.getElementById("userName").value,
                  email: document.getElementById("userEmail").value,
                  phone: document.getElementById("userPhone").value,
                  gender: document.getElementById("userGender").value,
                  age: document.getElementById("userAge").textContent,
                  address: document.getElementById("userAddress").value,
                  dob: document.getElementById("userDob").value,
                  id: $scope.selectedEmployee.id,
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
            let temp = $scope.data[0].id + 1;
            $scope.data.unshift({
              name: document.getElementById("userName").value,
              email: document.getElementById("userEmail").value,
              phone: document.getElementById("userPhone").value,
              gender: document.getElementById("userGender").value,
              age: document.getElementById("userAge").textContent,
              address: document.getElementById("userAddress").value,
              dob: document.getElementById("userDob").value,
              id: temp,
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
  }
);

app.filter("capitalize", function () {
  return function (input) {
    return angular.isString(input) && input.length > 0
      ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()
      : input;
  };
});

app.factory("PagerService", function PagerService() {
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
});
