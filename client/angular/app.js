var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider) {
$routeProvider
	 .when('/',{
		templateUrl: 'angular/partials/login.html'
	 })
	// .when('/logged_in',{
	// 	templateUrl: 'partials/show.html'

	// })
	// .otherwise({
	// 	templateUrl: 'partials/landing_page.html'
	// })
});