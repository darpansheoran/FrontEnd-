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
    ];
    // link scope variable with array of employees
    $scope.employees = employees;
  });
