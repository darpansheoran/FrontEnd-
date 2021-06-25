app.controller("chartsController", function ($scope, randomUser) {
  // Initialize chart
  var chartData = [
    { label: "Males", value: 50 },
    { label: "Females", value: 50 },
  ];
  var dataSource = {
    chart: {
      caption: "Comparison of number of males and females",
      subCaption: "Data contains 100 results",
      xAxisName: "Gender",
      yAxisName: "Number",
      numberSuffix: "",
      theme: "fusion",
    },
    data: chartData,
  };
  $scope.myDataSource = dataSource;

  // update chart with data from api
  randomUser.getData().then(function (response) {
    var males = 0;
    var females = 0;
    for (i = 0; i < response.data.results.length; i++) {
      if (response.data.results[i].gender == "male") {
        males++;
      } else {
        females++;
      }
    }

    chartData = [
      { label: "Males", value: males },
      { label: "Females", value: females },
    ];

    dataSource = {
      chart: {
        caption: "Comparison of number of males and females",
        subCaption: "Data contains 100 results",
        xAxisName: "Gender",
        yAxisName: "Number",
        numberSuffix: "",
        theme: "fusion",
      },
      data: chartData,
    };
    $scope.myDataSource = dataSource;
  });
});
