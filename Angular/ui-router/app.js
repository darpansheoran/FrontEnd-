var app = angular.module("myApp", ["ui.router"]);

app.config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state("login", {
        url: "/login",
        templateUrl: "login.html",
        controller: "LoginController",
      })
      .state("register", {
        url: "/register",
        templateUrl: "register.html",
        controller: "RegisterController",
      })
      .state("home", {
        url: "/home",
        templateUrl: "home.html",
        controller: "myController",
      });
  },
]);

app.factory("LoginService", function () {
  var users = [{ username: "admin", password: "pass" }];
  var isAuthenticated = false;

  return {
    login: function (username, password) {
      isAuthenticated = false;
      users.forEach((user) => {
        if (user.username == username && user.password == password) {
          isAuthenticated = true;
        }
      });
      return isAuthenticated;
    },
    addUser: function (user) {
      users.push(user);
    },
    checkUsername: function (username) {
      let tmp = true;
      users.forEach((user) => {
        if (user.username.toLowerCase() == username.toLowerCase()) {
          tmp = false;
        }
      });

      return tmp;
    },
  };
});

app.factory("FlashService", function () {
  var flash = null;
  return {
    setSuccessMessage: function (msg) {
      flash = { type: "success", message: msg };
    },

    resetFlash: function () {
      flash = null;
    },

    getFlash: function () {
      return flash;
    },
  };
});
