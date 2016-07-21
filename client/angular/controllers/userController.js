app.controller('userController', ['$scope', '$location', 'userFactory',function($scope, $location, userFactory){
	$scope.login = function(){
		// userFactory.login($scope.user, function(sendUser){
		// 	$scope.name = sendUser
		// 	console.log(sendUser)
		// })
	}
}]);