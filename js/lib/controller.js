/**
 * Created by Shaibal on 5/7/2017.
 */

// Controller for App

App.controller('Array', function ($scope) {
    $scope.array = [
        {id: 3, name: 'rahman'},
        {id: 1, name: 'bashar'},
        {id: 2, name: 'anwar'}
    ];

    $scope.message = "Click on the hyper link to view the array list.";
});
