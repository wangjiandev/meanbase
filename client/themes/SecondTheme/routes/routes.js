app.config(['$locationProvider', '$httpProvider', '$routeProvider', function($locationProvider, $httpProvider, $routeProvider) {
	var templates = 'themes/SecondTheme/templates/';
    $routeProvider.when('/', {
		templateUrl: templates + "page",
		controller: 'pageCtrl',
		resolve: {
			resolveData: getPage
		}
	}).when('/:page', {
		template: '<ng-include src="templateUrl()"></ng-include>',
		controller: 'pageCtrl',
		resolve: {
			resolveData: getPage
		}
	}).otherwise({
		redirectTo: '/'
	});
}]);

function getPage($http, $location) {
	return $http.get('/server' + $location.url()).success(function(response) {
		return response.data;
	}).error(function(error) {
		return error;
	});
}



// app.config(['$locationProvider', '$httpProvider', '$routeProvider', function($locationProvider, $httpProvider, $routeProvider) {
// 	var templates = 'themes/SecondTheme/templates/';
//     $routeProvider.when('/', {
// 		templateUrl: templates + "front-page",
// 		controller: 'mainCtrl'
// 	}).when('/:page', {
// 		templateUrl: templates + "page",
// 		controller: 'mainCtrl'
// 	}).otherwise({
// 		redirectTo: '/'
// 	});
// }]);