/**
 * Created by Shaibal on 5/7/2017.
 */

// Provide route

App.config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'Array'
        })
        .when('/array', {
            templateUrl: 'array.html',
            controller: 'Array'
        })
        .otherwise({
            redirectTo: '/home'
        });


    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('your', {
            url: '/your',
            templateUrl: 'your.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        });

});