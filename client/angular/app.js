var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider) {
$routeProvider
	 .when('/',{
		templateUrl: 'angular/partials/login.html'
	 })
	.when('/logged_in',{
		templateUrl: 'angular/partials/welcome.html'
	})
	.otherwise({
		templateUrl: 'angular/partials/login.html'
	})
});