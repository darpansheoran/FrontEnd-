app.controller("profileController", function ($scope, $http) {
  $http.get("https://randomuser.me/api/").then(function (response) {
    $scope.myWelcome = response.data;
  });
});
