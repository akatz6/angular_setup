app.controller('welcomeController', ['$scope', '$location', 'welcomeFactory',function($scope, $location, welcomeFactory){
	index = function(){
		welcomeFactory.get_name(function(returned_data){
			$scope.name = returned_data.data.user
			console.log($scope.name) 
		})
	}
	index();
}]);