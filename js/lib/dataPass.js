/**
 * Created by Shaibal on 5/7/2017.
 */

// Passing data to another route

App.factory('Data', function () {
    // return {message: "i'm data from a service"}
    return {}
})

function dataControl($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl($scope, Data) {
    $scope.data = Data;
}
